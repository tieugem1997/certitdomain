import sys, json, os, re, time
sys.stdout.reconfigure(encoding='utf-8')
from playwright.sync_api import sync_playwright

# Cookie october_session của tài khoản practice-cert.maithienan.com (lấy từ DevTools → Application → Cookies).
# KHÔNG commit giá trị thật lên git.
COOKIE = 'PASTE_OCTOBER_SESSION_COOKIE_HERE'
BASE = 'https://practice-cert.maithienan.com'


def walk2(slug, out_prefix):
    cp_path = out_prefix + '-capture.json'
    cp = json.load(open(cp_path, encoding='utf-8')) if os.path.exists(cp_path) else {}

    with sync_playwright() as p:
        browser = p.chromium.launch(channel='chrome', headless=True, args=['--no-sandbox'])
        ctx = browser.new_context()
        ctx.add_cookies([{'name': 'october_session', 'value': COOKIE, 'domain': 'practice-cert.maithienan.com',
                          'path': '/', 'httpOnly': True, 'secure': True, 'sameSite': 'Lax'}])
        page = ctx.new_page()
        page.on('dialog', lambda d: d.accept())
        page.goto(f'{BASE}/practice/{slug}/session?mode=learn', wait_until='domcontentloaded', timeout=60000)
        # wait for question UI (slow machine: up to 60s)
        ok = False
        for _ in range(60):
            page.wait_for_timeout(1000)
            if page.locator('fieldset[data-question-id]').count() and page.locator('#practice-jump-number').count():
                ok = True
                break
        if not ok:
            print('FATAL: session UI did not load')
            browser.close()
            return

        total = page.evaluate("""() => {
            const m = document.querySelector('main');
            const t = m ? m.innerText.match(/(\\d+)\\s*Câu hỏi/) : null;
            return t ? parseInt(t[1]) : 0;
        }""")
        print('total questions:', total)

        # iterate ALL positions; inside the loop we skip those already fully captured
        # (positions may remap after a bank reload, so re-check by qid after jumping)
        todo = list(range(1, total + 1))
        print(f'checkpoint: {len(cp)} qids, iterating all {total} positions')

        def static_capture(fs):
            return fs.evaluate("""(el) => {
                const qid = el.getAttribute('data-question-id');
                const idx = el.getAttribute('data-question-index');
                const prompt = el.querySelector('.practice-question-prompt');
                const badge = prompt ? prompt.querySelector('span') : null;
                const content = el.querySelector('.practice-question-content');
                const optsBox = el.querySelector('[data-question-options]');
                const limit = optsBox ? optsBox.getAttribute('data-selection-limit') : '1';
                const opts = [];
                el.querySelectorAll('label[data-answer-option]').forEach(lab => {
                    const inp = lab.querySelector('input');
                    const cnt = lab.querySelector('.practice-option-content');
                    const num = lab.querySelector('.practice-option-number');
                    opts.push({
                        key: inp ? inp.value : '',
                        type: inp ? inp.type : 'radio',
                        checked: inp ? inp.checked : false,
                        num: num ? num.innerText.trim() : '',
                        html: cnt ? cnt.innerHTML : '',
                        text: cnt ? cnt.innerText.replace(/\\s+/g, ' ').trim() : '',
                        resultAttr: lab.getAttribute('data-answer-result') || '',
                    });
                });
                const imgs = [...el.querySelectorAll('.practice-question-content img')].map(im => im.src);
                return {
                    qid, idx, limit,
                    badgeHtml: badge ? badge.outerHTML : '',
                    contentHtml: content ? content.innerHTML : '',
                    contentText: content ? content.innerText : '',
                    opts, imgs,
                };
            }""")

        def feedback_capture(fs, qid):
            return fs.evaluate("""(el) => {
                const fb = el.querySelector('#study-feedback-' + el.getAttribute('data-question-id'));
                if (!fb) return null;
                const correct = [];
                fb.querySelectorAll('[data-correct-option]').forEach(sp => correct.push(sp.getAttribute('data-correct-option')));
                const ec = fb.querySelector('.practice-explanation-content');
                if (!ec && correct.length === 0) return null;
                return {
                    correct,
                    explanationHtml: ec ? ec.innerHTML : '',
                    refs: ec ? [...ec.querySelectorAll('a')].map(a => ({ title: (a.innerText || '').replace(/\\s+/g, ' ').trim(), url: a.href })) : [],
                    checkedSel: fb.getAttribute('data-checked-selection') || '',
                    isCorrect: fb.getAttribute('data-is-correct') || '',
                };
            }""")

        def jump_to(n):
            page.fill('#practice-jump-number', str(n))
            page.click('[data-map-jump-go]')
            # wait until the current position shows n (position text "n / total")
            for _ in range(40):
                page.wait_for_timeout(400)
                pos = page.evaluate("""() => {
                    const el = document.querySelector('main [data-question-position]');
                    return el ? el.innerText.replace(/\\s+/g, ' ').trim() : '';
                }""")
                m = re.match(r'(\d+)\s*/\s*(\d+)', pos or '')
                if m and int(m.group(1)) == n:
                    return True
            return False

        for n in todo:
            t0 = time.time()
            if not jump_to(n):
                print(f'[q{n}] JUMP FAILED — will retry once')
                if not jump_to(n):
                    print(f'[q{n}] jump failed twice; skipping')
                    continue
            # find the visible fieldset
            v = page.evaluate("""() => {
                let found = null;
                document.querySelectorAll('fieldset[data-question-id]').forEach(fs => {
                    const r = fs.getBoundingClientRect();
                    if (r.width > 0 && r.height > 0 && !found) found = fs;
                });
                return found ? { qid: found.getAttribute('data-question-id'), idx: found.getAttribute('data-question-index') } : null;
            }""")
            if not v:
                print(f'[q{n}] no visible fieldset')
                continue
            qid = v['qid']
            fs = page.locator(f'fieldset[data-question-id="{qid}"]')
            # wait content
            got = False
            for _ in range(30):
                page.wait_for_timeout(400)
                if fs.count() and fs.locator('.practice-question-content').count():
                    got = True
                    break
            if not got:
                print(f'[q{n}] content never loaded')
                continue
            entry = cp.get(qid, {})
            st = static_capture(fs)
            if st.get('contentHtml'):
                entry['static'] = st
            fb = entry.get('feedback')
            if not fb or not fb.get('correct'):
                # answer + check
                try:
                    limit = int(st['limit'] or 1)
                    labels = fs.locator('label[data-answer-option]')
                    for k in range(min(limit, labels.count())):
                        try:
                            labels.nth(k).click(timeout=2500)
                        except Exception:
                            pass
                    page.wait_for_timeout(300)
                    btn = fs.locator('button[data-question-next]:visible').first
                    if btn.count():
                        txt = btn.inner_text(timeout=3000)
                        if 'Kiểm tra' in txt:
                            btn.click()
                            for _ in range(40):
                                page.wait_for_timeout(400)
                                fbc = feedback_capture(fs, qid)
                                if fbc and fbc['correct']:
                                    break
                            fbc = feedback_capture(fs, qid)
                            if fbc:
                                entry['feedback'] = fbc
                                print(f'[q{n}] qid={qid} checked -> correct: {fbc["correct"]}')
                            else:
                                print(f'[q{n}] qid={qid} WARN: no feedback after check')
                        else:
                            fbc = feedback_capture(fs, qid)
                            if fbc:
                                entry['feedback'] = fbc
                                print(f'[q{n}] qid={qid} feedback existed -> {fbc["correct"]}')
                except Exception as e:
                    print(f'[q{n}] check error:', str(e)[:150])
            else:
                print(f'[q{n}] qid={qid} already captured')
            cp[qid] = entry
            json.dump(cp, open(cp_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
            print(f'    ({time.time() - t0:.1f}s) total captured: {len(cp)}')

        # final report
        miss = [qid for qid, it in cp.items() if not it.get('feedback', {}).get('correct')]
        empt = [qid for qid, it in cp.items() if not (it.get('static') or {}).get('contentHtml')]
        print(f'DONE: {len(cp)} qids | missing feedback: {len(miss)} {miss} | empty statics: {len(empt)} {empt}')
        # reset progress to leave account clean
        try:
            btn = page.locator('[data-study-reset]')
            if btn.count():
                btn.click()
                page.wait_for_timeout(5000)
                print('[reset-end] progress wiped')
        except Exception as e:
            print('[reset-end] failed:', e)
        json.dump(cp, open(cp_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
        browser.close()


if __name__ == '__main__':
    slug = sys.argv[1]
    out_prefix = sys.argv[2] if len(sys.argv) > 2 else slug
    walk2(slug, out_prefix)
