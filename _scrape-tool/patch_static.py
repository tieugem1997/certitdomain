import sys, json, time
sys.stdout.reconfigure(encoding='utf-8')
from playwright.sync_api import sync_playwright

COOKIE = 'eyJpdiI6IjlaM1lleC9haDFhaGluZ2hvUkx6VHc9PSIsInZhbHVlIjoiV1d5eWdlWVNXN3NkOGpTYktkdElIeVMzTzR6MThBN3R1bEo2ZjdEcHRCVUdibitDRS9NaVhGWWU4N0cvU3ZZV1FYZ3V2N0NTTmlhWFRNZEFnR3lhZGRhSFNnc29DYjRBOFhKcjBweThlaHJTS2g5SWt5YUdTTWZRSDU0eFdFOGkiLCJtYWMiOiIxYjc5ODZkYjNlNTUwNGZkODRiYzk0MTJhYTEyYzFmYTg4MjkxMzI2ZDY5YjZiOTAyMmY5MDQ0YTFkMjYwOGY1IiwidGFnIjoiIn0%3D'
BASE = 'https://practice-cert.maithienan.com'

cp_path = sys.argv[1] + '-capture.json'
wanted = [(int(a), b) for a, b in zip(sys.argv[2].split(','), sys.argv[3].split(','))]
cp = json.load(open(cp_path, encoding='utf-8'))

with sync_playwright() as p:
    browser = p.chromium.launch(channel='chrome', headless=True, args=['--no-sandbox'])
    ctx = browser.new_context()
    ctx.add_cookies([{'name': 'october_session', 'value': COOKIE, 'domain': 'practice-cert.maithienan.com',
                      'path': '/', 'httpOnly': True, 'secure': True, 'sameSite': 'Lax'}])
    page = ctx.new_page()
    page.goto(f'{BASE}/practice/{sys.argv[1]}/session?mode=learn', wait_until='domcontentloaded', timeout=60000)
    page.wait_for_timeout(6000)

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

    for num, qid in wanted:
        idx = num - 1
        # jump
        page.fill('#practice-jump-number', str(num))
        page.click('[data-map-jump-go]')
        # wait for the fieldset to load content
        fs = page.locator(f'fieldset[data-question-index="{idx}"]')
        ok = False
        for _ in range(40):
            page.wait_for_timeout(500)
            if fs.count() and fs.locator('.practice-question-content').count():
                ok = True
                break
        if not ok:
            print(f'q{num}: fieldset/content not found')
            continue
        st = static_capture(fs)
        if st['contentHtml']:
            cp[qid]['static'] = st
            json.dump(cp, open(cp_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=2)
            print(f'q{num} (qid {qid}): patched — opts {len(st["opts"])}, content {len(st["contentHtml"])} chars')
        else:
            print(f'q{num}: still empty')
    browser.close()
