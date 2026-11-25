# verify_decks.py — kiểm tra chất lượng các bộ đề đã build
import json, os, sys, urllib.request

sys.stdout.reconfigure(encoding='utf-8')
ROOT = r'D:\Trong\Skill Learn\Cert'
DECKS = ['ab-100', 'ab-730', 'ab-731', 'ai-103', 'ccao-f', 'ccar-f',
         'ccar-p-tstudy', 'ccdv-f-tstudy', 'dp-800', 'gh-300']
CATALOG = {'ab-100': 111, 'ab-730': 100, 'ab-731': 100, 'ai-103': 175,
           'ccao-f': 169, 'ccar-f': 175, 'ccar-p': 166, 'ccdv-f': 110,
           'dp-800': 141, 'gh-300': 116}

ok = True
for slug in DECKS:
    path = os.path.join(ROOT, slug, slug + '-qa.json')
    q = json.load(open(path, encoding='utf-8'))
    src_slug = slug.replace('-tstudy', '')
    expected = CATALOG[src_slug]
    problems = []
    if len(q) != expected:
        problems.append(f'count {len(q)} != {expected}')
    for x in q:
        if not x['question'].strip():
            problems.append(f'Q{x["no"]} empty question')
        if not x['correct']:
            problems.append(f'Q{x["no"]} no correct')
        if not x['explanation'].strip():
            problems.append(f'Q{x["no"]} empty explanation')
        if not x['options']:
            problems.append(f'Q{x["no"]} no options')
        if any(not (o.get('text') or '').strip() for o in x['options']):
            problems.append(f'Q{x["no"]} empty option')
    nimg = sum(1 for x in q if '🖼' in x['question'] or '🖼' in x['explanation'])
    status = 'OK ' if not problems else 'BAD'
    print(f'{status} {slug:<16} {len(q):>4} q  {nimg:>3} img-link  ' + ('; '.join(problems[:5]) if problems else ''))
    if problems:
        ok = False

# kiểm tra vài link ảnh có tồn tại không
print()
sample = []
for slug in DECKS:
    q = json.load(open(os.path.join(ROOT, slug, slug + '-qa.json'), encoding='utf-8'))
    for x in q:
        import re
        urls = re.findall(r'https://tstudy\.vercel\.app[^\s)\]]+', x['explanation'])
        if urls:
            sample.extend(urls[:2])
            break
    if len(sample) >= 5:
        break
for u in sample[:5]:
    try:
        req = urllib.request.Request(u, method='HEAD', headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, timeout=20) as r:
            print(r.status, u)
    except Exception as e:
        print('ERR', u, type(e).__name__, str(e)[:80])
print('\nALL OK' if ok else '\nPROBLEMS FOUND')
