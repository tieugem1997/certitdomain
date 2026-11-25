import json, re, sys
from html.parser import HTMLParser


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


src, hsrc, outdir = sys.argv[1], sys.argv[2], sys.argv[3]
raw = json.load(open(src))
H = {h['id']: h for h in json.load(open(hsrc))}
clean = []
for q in raw:
    h = H[q['id']]
    qt = re.sub(r'^\d+\s*', '', md(h['qHtml'])).replace('[image]', '').strip()
    opts = [{'key': chr(65 + i), 'text': md(o['html']), 'src': o['key']} for i, o in enumerate(h['opts'])]
    assert [o['key'] for o in h['opts']] == [o['key'] for o in q['options']]
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
json.dump(clean, open(f'{outdir}/ccar-p-qa.json', 'w'), ensure_ascii=False, indent=2)

n = lambda r: sum(q['result'] == r for q in clean)
L = ['# CCAR-P — Claude Certified Architect (Professional): 126 questions\n',
     f"Source: practice-cert.maithienan.com study mode. Your progress: {n('correct')} correct, "
     f"{n('incorrect')} incorrect, {n('unanswered')} unanswered.\n",
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
open(f'{outdir}/ccar-p-qa.md', 'w').write('\n'.join(L))
print(len(clean))
