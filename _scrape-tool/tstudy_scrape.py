# tstudy_scrape.py — cào bộ đề từ T-Study (https://tstudy.vercel.app/)
# Site Next.js App Router: toàn bộ dữ liệu câu hỏi (đáp án + giải thích) nằm trong
# flight data (self.__next_f.push) của trang /study/<id>?view=all → không cần cookie/JS.
#
# Usage:
#   python tstudy_scrape.py catalog                 # danh sách course từ homepage
#   python tstudy_scrape.py fetch <slug>            # -> ../_tstudy-data/<slug>.json (dữ liệu site đã resolve)
#   python tstudy_scrape.py build <slug> <outdir> <title>   # -> raw/qa/md/js (structure ccar-p)
#   python tstudy_scrape.py all                     # catalog + fetch + build toàn bộ course công khai
#   python tstudy_scrape.py unlock <slug> <password>  # mở khóa course riêng tư (lưu cookie), rồi fetch lại
import argparse, json, re, sys, time, urllib.request, urllib.parse, http.cookiejar, os, html as H

sys.stdout.reconfigure(encoding='utf-8')
BASE = 'https://tstudy.vercel.app'
HERE = os.path.dirname(os.path.abspath(__file__))
DATA_DIR = os.path.join(os.path.dirname(HERE), '_tstudy-data')   # Cert/_tstudy-data
COOKIE_FILE = os.path.join(DATA_DIR, 'cookies.txt')

PUSH_RE = re.compile(r'self\.__next_f\.push\((\[.*?\]\s*)\)</script>', re.S)


def http_get(url, jar=None):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Encoding': 'identity',
        'Accept-Language': 'en-US,en;q=0.9,vi;q=0.8',
    })
    opener = urllib.request.build_opener()
    if jar is not None:
        opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    with opener.open(req, timeout=60) as r:
        return r.status, r.read().decode('utf-8', 'replace')


EMBED_RE = re.compile(r'([0-9a-z]+):(T[0-9a-f]+,)')


def decode_flight(html):
    """Trả về (rows dict, text đã nối các push payload).

    Flight data có 2 đặc điểm cần xử lý:
    - T-template row bị chia nhỏ giữa các push (định nghĩa row ở cuối push trước,
      nội dung ở push sau) → nối payloads bằng '\n' rồi parse theo dòng, dòng
      không khớp `id:` là dòng nối tiếp của row trước.
    - Nội dung T-row có thể chứa các row con nhúng inline (`15:T528,` nằm trong
      content row 14) → tách ra thành các row riêng.
    """
    payloads = []
    for m in PUSH_RE.finditer(html):
        try:
            arr = json.loads(m.group(1))
            if isinstance(arr, list) and len(arr) > 1 and isinstance(arr[1], str):
                payloads.append(arr[1])
        except Exception:
            pass
    text = '\n'.join(payloads)
    seq = []  # [(row_id, value)]
    for line in text.split('\n'):
        m = re.match(r'^([0-9a-z]+):(.*)$', line)
        if m:
            seq.append([m.group(1), m.group(2)])
        elif seq:
            seq[-1][1] += '\n' + line
    # tách row con nhúng trong T-row
    out = []
    for rid, val in seq:
        if val.startswith('T'):
            pos = 0
            segs = []
            for m in EMBED_RE.finditer(val):
                segs.append([rid, val[pos:m.start()]])
                rid = m.group(1)
                segs.append([rid, m.group(2)])
                pos = m.end()
            if segs:
                segs.append([rid, val[pos:]])
                out.extend(segs)
                continue
        out.append([rid, val])
    rows = {}
    for rid, val in out:
        rows[rid] = val
    return rows, text


def find_props(rows):
    """Tìm node chứa khóa 'questions' trong các row parse được (props của study page)."""
    def walk(node):
        if isinstance(node, dict):
            if isinstance(node.get('questions'), list):
                return node
            for v in node.values():
                r = walk(v)
                if r is not None:
                    return r
        elif isinstance(node, list):
            for v in node:
                r = walk(v)
                if r is not None:
                    return r
        return None
    for rid, val in rows.items():
        try:
            node = json.loads(val)
        except Exception:
            continue
        r = walk(node)
        if r is not None:
            return r
    return None


def resolve(node, rows, seen=frozenset()):
    """Thay tham chiếu flight '$N' bằng giá trị row tương ứng."""
    if isinstance(node, list):
        return [resolve(x, rows, seen) for x in node]
    if isinstance(node, dict):
        return {k: resolve(v, rows, seen) for k, v in node.items()}
    if isinstance(node, str):
        m = re.fullmatch(r'\$([0-9]+)', node)
        if m:
            rid = m.group(1)
            if rid in seen or rid not in rows:
                return None
            raw = rows[rid]
            try:
                val = json.loads(raw)
            except Exception:
                val = raw
            return resolve(val, rows, seen | {rid})
        if node == '$undefined':
            return None
        return node
    return node


def parse_study_page(html):
    rows, _ = decode_flight(html)
    props = find_props(rows)
    if props is None:
        return None
    return resolve(props, rows)


# ---------------- block -> markdown ----------------
def _clean_tpl(s):
    """Nếu text là nội dung T-template (HTML) thì bỏ tag."""
    if s is None:
        return ''
    s = re.sub(r'^T[0-9a-f]+,', '', s)
    if '<' in s:
        s = re.sub(r'<br\s*/?>', '\n', s)
        s = re.sub(r'</(p|h[1-6]|li|ul|ol|div|tr)>', '\n', s)
        s = re.sub(r'<li[^>]*>', '- ', s)
        s = re.sub(r'<[^>]+>', '', s)
    return H.unescape(s)


def blocks_to_md(blocks, image_urls, unknown):
    out = []
    for b in blocks or []:
        if not isinstance(b, dict):
            out.append(_clean_tpl(str(b)))
            continue
        t = b.get('type')
        if t == 'paragraph':
            out.append(_clean_tpl(b.get('text', '')))
        elif t == 'heading':
            lvl = str(b.get('level', '3'))
            txt = _clean_tpl(b.get('text', ''))
            out.append(('#### ' if lvl == '3' else '## ') + txt)
        elif t == 'list':
            items = b.get('items', [])
            ordered = bool(b.get('ordered'))
            for i, it in enumerate(items):
                txt = it.get('text', '') if isinstance(it, dict) else str(it)
                out.append((f'{i + 1}. ' if ordered else '- ') + _clean_tpl(txt))
        elif t == 'image':
            src = b.get('src', '')
            url = src if src.startswith('http') else BASE + src
            label = b.get('caption') or b.get('alt') or 'Hình minh họa'
            image_urls.append(url)
            out.append(f'🖼 [{label}]({url})')
        elif t == 'callout':
            tone_icon = {'warning': '⚠️', 'tip': '💡', 'info': 'ℹ️', 'note': '📝'}.get(b.get('tone'), 'ℹ️')
            title = b.get('title') or ''
            body = _clean_tpl(b.get('text', ''))
            lines = [f'**{tone_icon} {title}**'] + body.split('\n')
            out.append('\n'.join('> ' + ln if ln else '>' for ln in lines))
        elif t == 'code':
            lang = b.get('language') or ''
            out.append('```' + lang + '\n' + _clean_tpl(b.get('code', '')) + '\n```')
        elif t == 'table':
            cols = b.get('columns') or []
            rows = b.get('rows') or []
            md_rows = ['| ' + ' | '.join(_clean_tpl(str(c)) for c in cols) + ' |',
                       '|' + '|'.join(' --- ' for _ in cols) + '|']
            for r in rows:
                cells = [_clean_tpl(str(c)) for c in r]
                cells += [''] * (len(cols) - len(cells))
                md_rows.append('| ' + ' | '.join(cells) + ' |')
            out.append('\n'.join(md_rows))
        else:
            unknown.add(t)
            out.append(json.dumps(b, ensure_ascii=False, indent=1))
    return '\n\n'.join(x for x in out if x.strip())


# ---------------- convert -> player QA format ----------------
def convert_question(q, idx, contexts, unknown):
    image_urls = []
    prompt_md = blocks_to_md(q.get('prompt', []), image_urls, unknown)
    ctx = None
    if q.get('contextId'):
        ctx = next((c for c in contexts if c.get('id') == q['contextId']), None)
    if ctx:
        prompt_md = ('📋 **' + ctx.get('title', 'Case study') + '**\n\n'
                     + blocks_to_md(ctx.get('content', []), image_urls, unknown)
                     + '\n\n' + prompt_md)

    inter = q.get('interaction', {}) or {}
    itype = inter.get('type', 'single_choice')
    note = ''
    if itype in ('single_choice', 'multiple_choice'):
        opts = inter.get('options', [])
        correct = inter.get('correctOptionIds', [])
        typ = 'multiple' if itype == 'multiple_choice' else 'single'
        sel = inter.get('selectLimit') or inter.get('maxSelections') or (len(correct) if typ == 'multiple' else 1)
    elif itype == 'true_false':
        sts = inter.get('statements', [])
        opts = [{'id': s['id'], 'label': s['label']} for s in sts]
        correct = [sid for sid, v in (inter.get('correctValues') or {}).items() if v]
        typ, sel = 'multiple', max(1, len(correct))
        note = '(Dạng gốc: Đúng/Sai — chọn các phát biểu đúng.)'
    elif itype == 'ordering':
        items = inter.get('items', [])
        opts = [{'id': it['id'], 'label': it['label']} for it in items]
        correct = inter.get('correctOrder', [])
        typ, sel = 'multiple', len(correct)
        labels = {it['id']: it['label'] for it in items}
        steps = ' → '.join(f'{i + 1}. {labels.get(oid, oid)}' for i, oid in enumerate(correct))
        note = f'(Dạng gốc: sắp xếp thứ tự — thứ tự đúng: {steps})'
    elif itype == 'matching':
        choices = inter.get('choices', [])
        opts = [{'id': c['id'], 'label': c['label']} for c in choices]
        pairs = inter.get('correctPairs', {})
        correct = list(dict.fromkeys(pairs.values()))
        typ, sel = 'multiple', max(1, len(correct))
        pl = {p['id']: p['label'] for p in inter.get('prompts', [])}
        cl = {c['id']: c['label'] for c in choices}
        pairs_md = '; '.join(f'{pl.get(pid, pid)} → {cl.get(cid, cid)}' for pid, cid in pairs.items())
        note = f'(Dạng gốc: ghép cặp — đáp án: {pairs_md})'
    else:
        unknown.add('interaction:' + itype)
        opts, correct, typ, sel = [], [], 'single', 1

    keymap = {o['id']: chr(65 + i) for i, o in enumerate(opts)}
    options = [{'key': keymap[o['id']], 'text': _clean_tpl(o['label'])} for o in opts]
    correct_keys = [keymap[c] for c in correct if c in keymap]

    # câu không có phương án đúng (VD: true_false toàn No) — tạo phương án tổng hợp để player chấm được
    if not correct_keys:
        if itype == 'true_false':
            synth = 'Tất cả các phát biểu trên đều SAI (No)'
            note = (note + ' ' if note else '') + '(Dạng gốc: Yes/No cho từng phát biểu — tất cả đều No.)'
        else:
            synth = 'Không có phương án nào đúng (xem giải thích)'
            note = (note + ' ' if note else '') + '(Site nguồn không có phương án đúng cho câu này.)'
        options = [{'key': 'A', 'text': synth}]
        correct_keys = ['A']
        typ, sel = 'single', 1

    expl = blocks_to_md(q.get('explanation', []), image_urls, unknown)
    if not expl.strip():
        expl = '(Site nguồn không có giải thích cho câu này.)'
    if note:
        expl = note + ('\n\n' + expl if expl else '')
    # giải thích từng phương án nếu site cung cấp
    oe = q.get('optionExplanations') or []
    if oe:
        parts = []
        for e in oe:
            oid = e.get('optionId') or e.get('id') or '?'
            label = f'{keymap[oid]}.' if oid in keymap else f'{oid}:'
            parts.append('**' + label + '** ' + blocks_to_md(e.get('content') or e.get('explanation') or [], image_urls, unknown))
        expl += '\n\n' + '\n\n'.join(parts)

    src = q.get('source') or {}
    refs = []
    if src.get('url'):
        refs.append({'title': src.get('name') or 'Nguồn', 'url': src['url']})
    elif src.get('name'):
        refs.append({'title': src['name'] + ((' · ' + src['locator']) if src.get('locator') else ''), 'url': ''})

    return {
        'no': idx + 1,
        'id': q.get('id'),
        'type': typ,
        'select': int(sel) or 1,
        'question': prompt_md,
        'imageMissing': False,          # ảnh tồn tại trên site — link nằm trong explanation
        'imageUrls': image_urls,
        'options': options,
        'correct': correct_keys,
        'yourAnswer': [],
        'result': 'unanswered',
        'explanation': expl,
        'references': refs,
        '_topicId': q.get('topicId'),
        '_siteType': 'sequence' if (itype in ('single_choice', 'multiple_choice') and is_sequence_question(q)) else itype,
    }


GROUP_TYPES = ['single_choice', 'multiple_choice', 'sequence', 'ordering', 'true_false', 'matching']
GROUP_LABELS = {
    'single_choice': 'Chọn 1 đáp án (single choice)',
    'multiple_choice': 'Chọn nhiều đáp án (multiple choice)',
    'sequence': 'Sắp xếp thứ tự (sequence)',
    'ordering': 'Sắp xếp thứ tự (ordering)',
    'true_false': 'Đúng/Sai (true/false)',
    'matching': 'Ghép cặp (matching)',
}

SEQ_KW = re.compile(
    r'correct sequence|which sequence|sequence of|sequence is|correct order|which order|in which order|'
    r'sound ordering|thứ tự|sắp xếp|order should|steps be taken|order of', re.I)
PERM_RE = re.compile(r'^\d{1,2}(\s*[,–—-]\s*\d{1,2})+$')
STEP_CONN_RE = re.compile(r'\bthen\b|;\s|first[,;]|next[,;]', re.I)


def is_sequence_question(q):
    """Câu 'sắp xếp thứ tự' ẩn dưới nhãn single/multiple choice trên site:
    prompt hỏi trình tự đúng, phương án là hoán vị số bước hoặc chuỗi bước mô tả."""
    prompt_text = ' '.join(b.get('text', '') for b in (q.get('prompt') or []) if isinstance(b, dict))
    if not SEQ_KW.search(prompt_text):
        return False
    labels = [o.get('label', '').strip() for o in (q.get('interaction') or {}).get('options', [])]
    if not labels:
        return False
    if all(PERM_RE.match(l) for l in labels):
        return True
    return any(STEP_CONN_RE.search(l) for l in labels)


def build_from_props(props, slug, outdir, title, exam_code, group_by_type=False):
    questions = props['questions']
    contexts = props.get('contexts') or []
    unknown = set()
    clean = [convert_question(q, i, contexts, unknown) for i, q in enumerate(questions)]
    group_starts = None  # {index: (label, count)}
    if group_by_type:
        rank = {t: i for i, t in enumerate(GROUP_TYPES)}
        clean = sorted(clean, key=lambda q: (rank.get(q['_siteType'], 99), q['no']))
        group_starts = {}
        cur_t, cur_n = None, 0
        for i, q in enumerate(clean):
            t = q['_siteType']
            if t != cur_t:
                if cur_t is not None:
                    group_starts[i - cur_n] = (GROUP_LABELS.get(cur_t, cur_t), cur_n)
                cur_t, cur_n = t, 1
            else:
                cur_n += 1
        if cur_t is not None:
            group_starts[len(clean) - cur_n] = (GROUP_LABELS.get(cur_t, cur_t), cur_n)
        for i, q in enumerate(clean):
            q['origNo'] = q['no']
            q['no'] = i + 1
    os.makedirs(outdir, exist_ok=True)
    for q in clean:
        q.pop('imageUrls', None)
        q.pop('_topicId', None)
        q.pop('_siteType', None)
    json.dump(props, open(f'{outdir}/{slug}-raw.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    json.dump(clean, open(f'{outdir}/{slug}-qa.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    open(f'{outdir}/{slug}-qa.js', 'w', encoding='utf-8').write(
        'window.__PC_DECK_LAST__ = ' + json.dumps(clean, ensure_ascii=False, indent=1) + ';')

    # qa.md
    L = [f'# {exam_code} — {title}: {len(clean)} questions\n',
         'Source: tstudy.vercel.app (T-Study — data của ThinhNH39). '
         'Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).\n']
    for i, q in enumerate(clean):
        if group_starts and i in group_starts:
            label, n = group_starts[i]
            L.append(f'\n# Nhóm: {label} — {n} câu\n')
        kind = f"pick {q['select']}" if q['type'] == 'multiple' else 'single choice'
        L.append(f"\n---\n\n## Q{q['no']} · {kind}\n")
        L.append(re.sub(r'(?<=\S)\n(?=\S)', '  \n', q['question']) + '\n')
        for o in q['options']:
            body = o['text'].replace('\n', '\n  ')
            if body.startswith('- '):
                body = '\n  ' + body
            L.append(f"- {'✅ ' if o['key'] in q['correct'] else ''}**{o['key']}.** {body}")
        L.append(f"\n**Answer:** {', '.join(q['correct'])}")
        if q['references']:
            L.append('\n**Nguồn:** ' + '; '.join(
                f"[{r['title']}]({r['url']})" if r['url'] else r['title'] for r in q['references']))
        L.append('\n<details><summary>Explanation</summary>\n\n' + q['explanation'] + '\n\n</details>\n')
    open(f'{outdir}/{slug}-qa.md', 'w', encoding='utf-8').write('\n'.join(L))

    nimg = sum(1 for q in clean if '🖼' in q['question'] or '🖼' in q['explanation'])
    print(f'  built {outdir}/{slug}-qa.json ({len(clean)} q) + qa.md + raw + qa.js · {nimg} câu có link ảnh')
    if group_starts:
        print('  nhóm: ' + ' → '.join(f'{label.split(" (")[0]} ({n})' for label, n in group_starts.values()))
    if unknown:
        print(f'  WARNING unknown blocks/types: {sorted(unknown)}')
    return clean


# ---------------- commands ----------------
def load_jar():
    os.makedirs(DATA_DIR, exist_ok=True)
    jar = http.cookiejar.MozillaCookieJar(COOKIE_FILE)
    if os.path.exists(COOKIE_FILE):
        jar.load(ignore_discard=True, ignore_expires=True)
    return jar


def cmd_catalog():
    status, html = http_get(BASE + '/')
    rows, _ = decode_flight(html)
    courses = {}
    def walk(node):
        if isinstance(node, dict):
            if isinstance(node.get('questionIds'), list) and node.get('id'):
                courses[node['id']] = node
            for v in node.values():
                walk(v)
        elif isinstance(node, list):
            for v in node:
                walk(v)
    for rid, val in rows.items():
        try:
            walk(json.loads(val))
        except Exception:
            pass
    print(f"{'id':<18}{'q':>5}  title")
    for cid, c in sorted(courses.items()):
        print(f"{cid:<18}{len(c['questionIds']):>5}  {c.get('title')}")
    return courses


def cmd_fetch(slug, jar=None):
    url = f'{BASE}/study/{slug}?view=all'
    status, html = http_get(url, jar)
    if 'course-access-card' in html or 'course-access-password' in html:
        print(f'[PROTECTED] {slug}: course riêng tư — dùng: python tstudy_scrape.py unlock {slug} <password>')
        return None
    props = parse_study_page(html)
    if props is None:
        print(f'[FAIL] {slug}: không tìm thấy dữ liệu câu hỏi (status {status})')
        return None
    os.makedirs(DATA_DIR, exist_ok=True)
    path = os.path.join(DATA_DIR, slug + '.json')
    json.dump(props, open(path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    n = len(props['questions'])
    print(f'[OK] {slug}: {n} questions -> {path}')
    return props


def cmd_unlock(slug, password):
    jar = load_jar()
    data = json.dumps({'password': password}).encode('utf-8')
    req = urllib.request.Request(f'{BASE}/api/course-access/{slug}', data=data, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131.0 Safari/537.36',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'identity',
    })
    opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(jar))
    try:
        with opener.open(req, timeout=60) as r:
            body = r.read().decode('utf-8', 'replace')
    except urllib.error.HTTPError as e:
        body = e.read().decode('utf-8', 'replace')
        try:
            msg = json.loads(body).get('error')
        except Exception:
            msg = body[:200]
        print(f'[FAIL] unlock {slug}: {msg}')
        return False
    jar.save(ignore_discard=True, ignore_expires=True)
    print(f'[OK] unlock {slug} thành công, cookie đã lưu {COOKIE_FILE}. Chạy fetch lại:')
    print(f'  python tstudy_scrape.py fetch {slug}')
    return True


def cmd_build(slug, outdir, title, out_slug=None, group_by_type=False):
    props = json.load(open(os.path.join(DATA_DIR, slug + '.json'), encoding='utf-8'))
    exam_code = (out_slug or slug).upper()
    build_from_props(props, out_slug or slug, outdir, title, exam_code, group_by_type=group_by_type)


def cmd_all(args):
    # danh sách course công khai (id -> tên thư mục đầu ra)
    courses = {
        'ab-100': 'ab-100', 'ab-730': 'ab-730', 'ab-731': 'ab-731',
        'ai-103': 'ai-103', 'ccao-f': 'ccao-f', 'ccar-f': 'ccar-f',
        'ccar-p': 'ccar-p-tstudy', 'ccdv-f': 'ccdv-f-tstudy',
        'dp-800': 'dp-800', 'gh-300': 'gh-300',
    }
    if args.include:
        for slug in args.include.split(','):
            slug = slug.strip()
            if slug and slug not in courses:
                courses[slug] = slug + ('-tstudy' if os.path.isdir(os.path.join(os.path.dirname(HERE), slug)) else '')
    root = os.path.dirname(HERE)  # Cert/
    ok, fail, prot = [], [], []
    jar = load_jar() if args.use_cookies else None
    for slug, folder in courses.items():
        props = cmd_fetch(slug, jar)
        if props is None:
            fail.append(slug)
            continue
        title = props.get('title') or slug.upper()
        n = len(props['questions'])
        cid = props.get('course', {}).get('id')
        if cid and cid != slug:
            print(f'  NOTE: course id={cid} (slug {slug})')
        try:
            cmd_build(slug, os.path.join(root, folder), title, out_slug=folder)
            ok.append((folder, n, title))
        except Exception as e:
            print(f'[FAIL] build {slug}: {e}')
            fail.append(slug)
        time.sleep(0.5)
    print('\n=== KẾT QUẢ ===')
    for folder, n, title in ok:
        print(f'  OK   {folder:<16} {n:>4} q  {title}')
    for slug in fail:
        print(f'  FAIL {slug}')
    print(f'\nTổng: {len(ok)} bộ đề thành công, {sum(n for _, n, _ in ok)} câu hỏi.')
    print('Nhớ thêm các entry vào BUILTIN_DECKS trong _player/app.js.')


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description='Scrape T-Study decks')
    sub = ap.add_subparsers(dest='cmd', required=True)
    sub.add_parser('catalog')
    p = sub.add_parser('fetch'); p.add_argument('slug')
    p = sub.add_parser('unlock'); p.add_argument('slug'); p.add_argument('password')
    p = sub.add_parser('build'); p.add_argument('slug'); p.add_argument('outdir'); p.add_argument('title')
    p.add_argument('--out-slug', help='slug cho tên file đầu ra (mặc định = slug dữ liệu)')
    p.add_argument('--group-by-type', action='store_true',
                   help='gom câu theo dạng: single → multiple → ordering → true/false → matching')
    p = sub.add_parser('all')
    p.add_argument('--include', help='course id bổ sung (phân cách bằng dấu phẩy)')
    p.add_argument('--use-cookies', action='store_true', help='dùng cookie đã unlock')
    args = ap.parse_args()
    if args.cmd == 'catalog':
        cmd_catalog()
    elif args.cmd == 'fetch':
        cmd_fetch(args.slug)
    elif args.cmd == 'unlock':
        cmd_unlock(args.slug, args.password)
    elif args.cmd == 'build':
        cmd_build(args.slug, args.outdir, args.title, out_slug=getattr(args, 'out_slug', None),
                  group_by_type=bool(getattr(args, 'group_by_type', False)))
    elif args.cmd == 'all':
        cmd_all(args)
