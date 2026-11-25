# Build deck files (ccar-p structure) from capture.json
# Produces: <slug>-raw.json, <slug>-html.json, <slug>-qa.json, <slug>-qa.md
import json, re, sys, os
from html.parser import HTMLParser

sys.stdout.reconfigure(encoding='utf-8')


def norm(s):
    return re.sub(r'\s+', ' ', s).strip()


def html_to_text(html):
    s = html
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'</(p|h[1-6]|li|ul|ol|div)>', '\n', s)
    s = re.sub(r'<li[^>]*>', '- ', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = s.replace('&nbsp;', ' ').replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>').replace('&quot;', '"')
    lines = [norm(x) for x in s.split('\n')]
    return '\n'.join(x for x in lines if x)


# ---- Markdown converter (same as reference build.py) ----
class MD(HTMLParser):
    def __init__(s):
        super().__init__(); s.out = []; s.href = None

    def handle_starttag(s, t, a):
        a = dict(a)
        if t in ('p', 'h4', 'ul', 'ol'): s.out.append('\n\n')
        if t == 'img': s.out.append('[image]')
        if t == 'h4': s.out.append('#### ')
        if t == 'li': s.out.append('\n- ')
        if t == 'strong': s.out.append('**')
        if t == 'br': s.out.append('\n')
        if t == 'a': s.href = a.get('href'); s.out.append('[')
        if t == 'code': s.out.append('`')

    def handle_endtag(s, t):
        if t == 'strong': s.out.append('**')
        if t == 'a': s.out.append(f']({s.href})')
        if t == 'code': s.out.append('`')

    def handle_data(s, d): s.out.append(re.sub(r'\s+', ' ', d))

    def text(s): return re.sub(r'\n{3,}', '\n\n', ''.join(s.out)).strip()


def md(h):
    p = MD(); p.feed(h); return p.text()


def build(slug, outdir, title, exam_code, source_note='study mode'):
    cp_path = f'{slug}-capture.json'
    cp = json.load(open(cp_path, encoding='utf-8'))
    items = sorted(cp.values(), key=lambda x: int(x['static']['idx']))
    print(f'capture: {len(items)} questions')

    raw, H = [], []
    missing = []
    for it in items:
        st = it['static']
        fb = it.get('feedback') or {}
        num = int(st['idx']) + 1
        qtext = str(num) + '\n' + norm(st['contentText'])
        opts = [{'key': o['key'], 'text': o['text']} for o in st['opts']]
        correct = sorted(fb.get('correct') or [])
        if not correct:
            missing.append(num)
        raw.append({
            'no': num,
            'id': int(st['qid']),
            'multi': len(correct) > 1 or any(o['type'] == 'checkbox' for o in st['opts']),
            'selectLimit': int(st['limit'] or 1),
            'question': qtext,
            'images': st['imgs'],
            'options': opts,
            'correct': correct,
            'yourAnswer': [],
            'result': 'unanswered',
            'explanationHtml': fb.get('explanationHtml', ''),
            'explanation': html_to_text(fb.get('explanationHtml', '')),
            'references': fb.get('refs', []),
        })
        H.append({
            'id': int(st['qid']),
            'qHtml': '\n' + st['badgeHtml'] + '\n<div class="practice-question-content text-on-surface">' + st['contentHtml'] + '</div>\n',
            'opts': [{'key': o['key'], 'html': o['html']} for o in st['opts']],
        })

    os.makedirs(outdir, exist_ok=True)
    json.dump(raw, open(f'{outdir}/{slug}-raw.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
    json.dump(H, open(f'{outdir}/{slug}-html.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)

    # ---- clean QA (mirror reference build.py) ----
    clean = []
    for q in raw:
        h = next(h for h in H if h['id'] == q['id'])
        qt = re.sub(r'^\d+\s*', '', md(h['qHtml'])).replace('[image]', '').strip()
        opts = [{'key': chr(65 + i), 'text': md(o['html']), 'src': o['key']} for i, o in enumerate(h['opts'])]
        assert [o['key'] for o in h['opts']] == [o['key'] for o in q['options']], f"option order mismatch q{q['no']}"
        m = {o['src']: o['key'] for o in opts}
        clean.append({
            'no': q['no'], 'id': q['id'],
            'type': 'multiple' if q['multi'] else 'single', 'select': q['selectLimit'],
            'question': qt, 'imageMissing': bool(q['images']),
            'options': [{'key': o['key'], 'text': o['text']} for o in opts],
            'correct': sorted(m[c] for c in q['correct']),
            'yourAnswer': sorted(m[c] for c in q['yourAnswer'] if c in m),
            'result': q['result'] if q['yourAnswer'] else 'unanswered',
            'explanation': md(q['explanationHtml']),
            'references': q['references'],
        })
    json.dump(clean, open(f'{outdir}/{slug}-qa.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=2)

    n = lambda r: sum(q['result'] == r for q in clean)
    L = [f'# {exam_code} — {title}: {len(clean)} questions\n',
         f'Source: practice-cert.maithienan.com {source_note}. Your progress: {n("correct")} correct, '
         f'{n("incorrect")} incorrect, {n("unanswered")} unanswered.\n',
         'Options are labeled A–E in the order shown on screen. ✅ marks the correct answer(s).\n']
    tags = {'correct': '✔ you got it right', 'incorrect': '✘ you got it wrong', 'unanswered': '— not answered'}
    for q in clean:
        kind = f"pick {q['select']}" if q['type'] == 'multiple' else 'single choice'
        L.append(f"\n---\n\n## Q{q['no']} · {kind} · {tags[q['result']]}\n")
        L.append(re.sub(r'(?<=\S)\n(?=\S)', '  \n', q['question']) + '\n')
        if q['imageMissing']:
            L.append('> ⚠️ This question references an image that is missing on the source site (404).\n')
        for o in q['options']:
            body = o['text'].replace('\n', '\n  ')
            if body.startswith('- '): body = '\n  ' + body
            L.append(f"- {'✅ ' if o['key'] in q['correct'] else ''}**{o['key']}.** {body}")
        yours = f" · **Yours:** {', '.join(q['yourAnswer'])}" if q['result'] == 'incorrect' else ''
        L.append(f"\n**Answer:** {', '.join(q['correct'])}{yours}")
        L.append('\n<details><summary>Explanation</summary>\n\n' + q['explanation'] + '\n\n</details>\n')
    open(f'{outdir}/{slug}-qa.md', 'w', encoding='utf-8').write('\n'.join(L))

    print(f'built {outdir}/{slug}-qa.json ({len(clean)} q) + qa.md + raw + html')
    print(f'  missing correct answers: {missing}')
    no_expl = [q['no'] for q in raw if not q['explanationHtml']]
    print(f'  missing explanations: {no_expl}')
    return clean


if __name__ == '__main__':
    slug = sys.argv[1]
    outdir = sys.argv[2] if len(sys.argv) > 2 else '.'
    title = sys.argv[3] if len(sys.argv) > 3 else slug.upper()
    build(slug, outdir, title, slug.upper())
