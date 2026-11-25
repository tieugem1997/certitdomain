/* ===== Player ôn luyện offline — app.js =====
 * 2 chế độ:
 *  - "Thi": làm bài như thi thật, Nộp bài cuối cùng mới chấm điểm + xem lại bài làm
 *  - "Học": mỗi câu hiện luôn đáp án đúng + giải thích
 */
'use strict';

/* ---------- Đăng ký bộ đề có sẵn ---------- */
const BUILTIN_DECKS = [
  {
    slug: 'ccdv-f',
    title: 'CCDV-F — Claude Certified Developer – Foundations',
    emoji: '🤖',
    count: 155,
    src: '../ccdv-f/ccdv-f-qa.js',
  },
  {
    slug: 'databricks-dea',
    title: 'DATABRICKS-DEA — Databricks Certified Data Engineer Associate',
    emoji: '🧱',
    count: 528,
    src: '../databricks-dea/databricks-dea-qa.js',
  },
  {
    slug: 'ccar-p',
    title: 'CCAR-P — Claude Certified Architect (Professional)',
    emoji: '🏗️',
    count: 126,
    src: '../ccar-p/ccar-p-qa.js',
  },
  // ---- T-Study (tstudy.vercel.app) ----
  {
    slug: 'ab-100',
    title: 'AB-100 — Agentic AI Business Solutions Architect',
    emoji: '🏢',
    count: 111,
    src: '../ab-100/ab-100-qa.js',
  },
  {
    slug: 'ab-730',
    title: 'AB-730 — AI Business Professional',
    emoji: '💼',
    count: 100,
    src: '../ab-730/ab-730-qa.js',
  },
  {
    slug: 'ab-731',
    title: 'AB-731 — AI Transformation Leader',
    emoji: '🚀',
    count: 100,
    src: '../ab-731/ab-731-qa.js',
  },
  {
    slug: 'ai-103',
    title: 'AI-103 — Azure AI Apps and Agents Developer Associate',
    emoji: '🧠',
    count: 175,
    src: '../ai-103/ai-103-qa.js',
  },
  {
    slug: 'ccao-f',
    title: 'CCAO-F — Claude Certified Associate – Foundations',
    emoji: '🧩',
    count: 169,
    src: '../ccao-f/ccao-f-qa.js',
  },
  {
    slug: 'ccar-f',
    title: 'CCAF — Claude Certified Architect – Foundations',
    emoji: '🏛️',
    count: 175,
    src: '../ccar-f/ccar-f-qa.js',
  },
  {
    slug: 'ccar-p-tstudy',
    title: 'CCAR-P (T-Study) — Claude Certified Architect – Professional',
    emoji: '🏗️',
    count: 166,
    src: '../ccar-p-tstudy/ccar-p-tstudy-qa.js',
  },
  {
    slug: 'ccdv-f-tstudy',
    title: 'CCDV-F (T-Study) — Claude Certified Developer – Foundations',
    emoji: '🤖',
    count: 110,
    src: '../ccdv-f-tstudy/ccdv-f-tstudy-qa.js',
  },
  {
    slug: 'dp-800',
    title: 'DP-800 — Developing AI-Enabled Database Solutions',
    emoji: '🗄️',
    count: 141,
    src: '../dp-800/dp-800-qa.js',
  },
  {
    slug: 'gh-300',
    title: 'GH-300 — GitHub Copilot',
    emoji: '🐙',
    count: 116,
    src: '../gh-300/gh-300-qa.js',
  },
];

/* ---------- State ---------- */
let state = {
  deck: null,        // {slug, title, questions}
  mode: 'study',     // study | exam | mock
  idx: 0,
  filter: 'all',
  studyFlags: [],
  exam: { answers: {}, flags: [], submitted: false, results: {} },
  mock: { answers: {}, flags: [], submitted: false, results: {} },
};

const LS_THEME = 'pcoffline-theme';
const $ = sel => document.querySelector(sel);

/* ---------- Markdown mini → HTML ---------- */
function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function inline(s) {
  s = esc(s);
  s = s.replace(/`([^`]+)`/g, '<code>$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener">$1</a>');
  return s;
}
function mdToHtml(md) {
  const lines = String(md || '').split('\n');
  let html = '';
  let listOpen = false;
  let para = [];
  const flushPara = () => {
    if (para.length) { html += '<p>' + para.map(inline).join('<br>') + '</p>'; para = []; }
  };
  const closeList = () => { if (listOpen) { html += '</ul>'; listOpen = false; } };
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^####\s+/.test(line)) {
      flushPara(); closeList();
      html += '<h4>' + inline(line.replace(/^####\s+/, '')) + '</h4>';
    } else if (/^\s*-\s+/.test(line)) {
      flushPara();
      if (!listOpen) { html += '<ul>'; listOpen = true; }
      html += '<li>' + inline(line.replace(/^\s*-\s+/, '')) + '</li>';
    } else if (line.trim() === '') {
      flushPara(); closeList();
    } else {
      para.push(line);
    }
  }
  flushPara(); closeList();
  return html;
}

/* ---------- Lưu / đọc dữ liệu ---------- */
function storeGet(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch (e) { return fallback; }
}
function storeSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}
const keyStudy = slug => 'pcoffline-' + slug + '-study';
const keyExam = slug => 'pcoffline-' + slug + '-exam';
const keyMock = slug => 'pcoffline-' + slug + '-mock';
const keyLast = slug => 'pcoffline-' + slug + '-last';

/** Lần làm hiện tại: exam (thi nộp cuối bài) hoặc mock (thi thử kiểm tra từng câu) */
function attempt() {
  return state.mode === 'mock' ? state.mock : state.exam;
}

function loadState(slug) {
  state.studyFlags = storeGet(keyStudy(slug), { flags: [] }).flags || [];
  state.exam = storeGet(keyExam(slug), { answers: {}, flags: [], submitted: false, results: {} });
  state.exam.answers = state.exam.answers || {};
  state.exam.flags = state.exam.flags || [];
  state.exam.results = state.exam.results || {};
  state.mock = storeGet(keyMock(slug), { answers: {}, flags: [], submitted: false, results: {} });
  state.mock.answers = state.mock.answers || {};
  state.mock.flags = state.mock.flags || [];
  state.mock.results = state.mock.results || {};
}
function saveState() {
  if (!state.deck) return;
  storeSet(keyStudy(state.deck.slug), { flags: state.studyFlags });
  storeSet(keyExam(state.deck.slug), state.exam);
  storeSet(keyMock(state.deck.slug), state.mock);
}

/* ---------- Bộ đề import (lưu trong localStorage) ---------- */
function listImported() {
  const out = [];
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('pcoffline-import-')) {
        const deck = storeGet(k, null);
        if (deck && deck.questions) out.push(deck);
      }
    }
  } catch (e) {}
  return out;
}

/* ---------- Màn chọn bộ đề ---------- */
function showDeckScreen() {
  $('#deck-screen').hidden = false;
  $('#study-screen').hidden = true;
  $('#result-overlay').hidden = true;
}
function showStudyScreen() {
  $('#deck-screen').hidden = true;
  $('#study-screen').hidden = false;
  renderStudy();
}

function deckCardHtml(deck, removable) {
  const last = storeGet(keyLast(deck.slug), null);
  const count = deck.questions ? deck.questions.length : (deck.count || 0);
  const meta = count + ' câu' +
    (last ? ' · Lần thi gần nhất: ' + last.correct + '/' + last.total : '');
  return `
    <div class="deck-card" data-slug="${esc(deck.slug)}">
      <span class="emoji">${deck.emoji}</span>
      <span class="info">
        <span class="name">${esc(deck.title)}</span><br>
        <span class="meta">${esc(meta)}</span>
      </span>
      <span class="deck-actions">
        <button class="mode-btn study" data-act="study">📖 Học</button>
        <button class="mode-btn mock" data-act="mock">🎯 Thi thử</button>
        <button class="mode-btn exam" data-act="exam">📝 Thi</button>
        ${removable ? '<button class="mode-btn remove" data-act="remove">✕</button>' : ''}
      </span>
    </div>`;
}

function renderDeckList() {
  const list = $('#deck-list');
  list.innerHTML = '';
  for (const d of listImported()) {
    const div = document.createElement('div');
    div.innerHTML = deckCardHtml({ slug: d.slug, title: d.title + ' (đã import)', emoji: '💼', questions: d.questions }, true);
    list.appendChild(div.firstElementChild);
  }
  for (const d of BUILTIN_DECKS) {
    const div = document.createElement('div');
    div.innerHTML = deckCardHtml(d, false);
    list.appendChild(div.firstElementChild);
  }
}

$('#deck-list').addEventListener('click', e => {
  const btn = e.target.closest('.mode-btn');
  if (!btn) return;
  const card = e.target.closest('.deck-card');
  const slug = card.dataset.slug;
  const act = btn.dataset.act;
  if (act === 'remove') {
    if (confirm('Xóa bộ đề đã import này?')) {
      localStorage.removeItem('pcoffline-import-' + slug);
      renderDeckList();
    }
    return;
  }
  const builtin = BUILTIN_DECKS.find(d => d.slug === slug);
  const imp = listImported().find(d => d.slug === slug);
  if (builtin) {
    loadDeckScript(slug, builtin.title, builtin.src)
      .then(deck => startDeck(deck, act))
      .catch(err => alert(err.message));
  } else if (imp) {
    startDeck({ slug, title: imp.title, questions: imp.questions }, act);
  }
});

function startDeck(deck, mode) {
  state.deck = deck;
  state.mode = mode;
  loadState(deck.slug);
  state.filter = 'all';
  state.idx = 0;
  showStudyScreen();
}

function loadDeckScript(slug, title, src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = () => {
      const data = window.__PC_DECK_LAST__;
      if (Array.isArray(data) && data.length) resolve({ slug, title, questions: data });
      else reject(new Error('File dữ liệu không đúng định dạng: ' + src));
    };
    s.onerror = () => reject(new Error('Không tải được bộ đề: ' + src +
      '\nBạn cần mở trang này từ thư mục _player (mở file index.html trực tiếp), hoặc dùng nút Import.'));
    document.head.appendChild(s);
  });
}

/* ---------- Import file ---------- */
$('#import-btn').addEventListener('click', () => $('#import-input').click());
$('#import-input').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!Array.isArray(data) || !data.length) throw new Error('Không phải mảng câu hỏi');
      const q0 = data[0];
      if (!('question' in q0) || !('options' in q0) || !('correct' in q0)) {
        throw new Error('Cấu trúc không giống qa.json');
      }
      const slug = 'import-' + file.name.replace(/\.json$/i, '').replace(/[^a-z0-9_-]+/gi, '-');
      storeSet('pcoffline-import-' + slug, { slug, title: file.name.replace(/\.json$/i, ''), questions: data });
      renderDeckList();
      alert('Đã import bộ đề: ' + file.name + ' (' + data.length + ' câu)');
    } catch (err) {
      alert('Import thất bại: ' + err.message);
    }
    e.target.value = '';
  };
  reader.readAsText(file);
});

/* ---------- Lọc câu hỏi ---------- */
const FILTER_TABS = {
  study: [['all', 'Tất cả'], ['flagged', 'Đánh dấu']],
  exam: [['all', 'Tất cả'], ['answered', 'Đã trả lời'], ['unanswered', 'Chưa trả lời'], ['flagged', 'Đánh dấu']],
  mock: [['all', 'Tất cả'], ['answered', 'Đã trả lời'], ['unanswered', 'Chưa trả lời'], ['flagged', 'Đánh dấu']],
  review: [['all', 'Tất cả'], ['incorrect', 'Câu sai'], ['correct', 'Câu đúng'], ['flagged', 'Đánh dấu']],
};
function currentModeKey() {
  return (state.mode === 'exam' || state.mode === 'mock') && attempt().submitted ? 'review' : state.mode;
}
function flagsOf() {
  return state.mode === 'study' ? state.studyFlags : attempt().flags;
}
function inFilter(q) {
  const f = state.filter;
  if (f === 'all') return true;
  if (f === 'flagged') return flagsOf().includes(q.no);
  const ans = attempt().answers[q.no];
  if (f === 'answered') return !!(ans && ans.length);
  if (f === 'unanswered') return !(ans && ans.length);
  if (f === 'incorrect') return attempt().results[q.no] === 'incorrect';
  if (f === 'correct') return attempt().results[q.no] === 'correct';
  return true;
}
function filteredQuestions() {
  return state.deck.questions
    .map((q, i) => ({ q, i }))
    .filter(({ q }) => inFilter(q));
}
function currentQuestion() {
  const f = filteredQuestions();
  return f[state.idx] || null;
}

/* ---------- Render tổng thể ---------- */
function renderStudy() {
  if (!state.deck) return;
  renderHeader();
  renderTabs();
  renderMap();
  renderQuestion();
}

function renderHeader() {
  const deck = state.deck;
  $('#deck-title').textContent = deck.title;
  const modeKey = currentModeKey();
  const badge = $('#mode-badge');
  badge.textContent = modeKey === 'study' ? '📖 Học — hiện đáp án' :
    modeKey === 'exam' ? '📝 Thi — nộp cuối bài' :
    modeKey === 'mock' ? '🎯 Thi thử — kiểm tra từng câu' : '🔍 Xem lại bài thi';
  badge.className = 'mode-badge ' + modeKey;

  const total = deck.questions.length;
  const ans = attempt().answers;
  if (modeKey === 'study') {
    $('#stat-answered').textContent = total + ' câu';
    $('#stat-correct').textContent = '';
    $('#stat-incorrect').textContent = '';
    $('#progress-bar').style.width = '0%';
    $('#submit-btn').hidden = true;
    $('#reset-btn').hidden = false;
  } else {
    const done = Object.keys(ans).filter(no => ans[no] && ans[no].length).length;
    if (modeKey === 'mock') {
      const checked = Object.keys(attempt().results).length;
      $('#stat-answered').textContent = 'Đã chọn ' + done + '/' + total + ' · Đã kiểm tra ' + checked;
      $('#stat-correct').textContent = '';
      $('#stat-incorrect').textContent = '';
      $('#progress-bar').style.width = (total ? (done / total * 100) : 0) + '%';
      $('#submit-btn').textContent = '🏁 Kết thúc & xem điểm';
    } else {
      $('#stat-answered').textContent = modeKey === 'exam' ? 'Đã chọn ' + done + '/' + total : 'Đã làm ' + done + '/' + total;
      if (modeKey === 'review') {
        let c = 0, w = 0;
        for (const no in attempt().results) {
          if (attempt().results[no] === 'correct') c++;
          else if (attempt().results[no] === 'incorrect') w++;
        }
        $('#stat-correct').textContent = c + ' đúng';
        $('#stat-incorrect').textContent = w + ' sai';
        $('#progress-bar').style.width = (total ? (done / total * 100) : 0) + '%';
      } else {
        $('#stat-correct').textContent = '';
        $('#stat-incorrect').textContent = '';
        $('#progress-bar').style.width = (total ? (done / total * 100) : 0) + '%';
      }
      $('#submit-btn').textContent = '📤 Nộp bài';
    }
    $('#submit-btn').hidden = modeKey !== 'exam' && modeKey !== 'mock';
    $('#reset-btn').hidden = modeKey === 'review';
  }
}

function renderTabs() {
  const box = $('#filter-tabs');
  box.innerHTML = '';
  const modeKey = currentModeKey();
  for (const [key, label] of FILTER_TABS[modeKey]) {
    const b = document.createElement('button');
    b.dataset.filter = key;
    b.textContent = label;
    b.classList.toggle('active', state.filter === key);
    box.appendChild(b);
  }
}

function renderMap() {
  const grid = $('#map-grid');
  grid.innerHTML = '';
  const modeKey = currentModeKey();
  const f = filteredQuestions();
  const cur = currentQuestion();
  const active = new Set(f.map(x => x.q.no));
  for (const q of state.deck.questions) {
    const b = document.createElement('button');
    b.textContent = q.no;
    if (modeKey === 'review') {
      const r = attempt().results[q.no];
      if (r === 'correct') b.classList.add('ok');
      else if (r === 'incorrect') b.classList.add('bad');
    } else if (modeKey === 'exam') {
      const ans = attempt().answers[q.no];
      if (ans && ans.length) b.classList.add('done');
    } else if (modeKey === 'mock') {
      const r = attempt().results[q.no];
      if (r === 'correct') b.classList.add('ok');
      else if (r === 'incorrect') b.classList.add('bad');
      else {
        const ans = attempt().answers[q.no];
        if (ans && ans.length) b.classList.add('done');
      }
    }
    if (flagsOf().includes(q.no)) b.classList.add('flagged');
    if (cur && cur.q.no === q.no) b.classList.add('current');
    if (!active.has(q.no)) b.style.opacity = '.35';
    b.addEventListener('click', () => {
      const f2 = filteredQuestions();
      const pos = f2.findIndex(x => x.q.no === q.no);
      if (pos >= 0) { state.idx = pos; renderStudy(); }
    });
    grid.appendChild(b);
  }
}

/* ---------- Render câu hỏi ---------- */
function renderQuestion() {
  const card = $('#question-card');
  const entry = currentQuestion();
  if (!entry) {
    card.innerHTML = '<p style="color:var(--text-soft)">Không có câu hỏi nào trong bộ lọc này.</p>';
    $('#prev-btn').disabled = true; $('#next-btn').disabled = true;
    $('#question-pos').textContent = '';
    return;
  }
  const { q } = entry;
  const modeKey = currentModeKey();
  const flagged = flagsOf().includes(q.no);
  const myAns = (attempt().answers[q.no] || []);
  const myResult = attempt().results[q.no]; // 'correct' | 'incorrect' | 'blank' | undefined
  const checked = modeKey === 'mock' && myResult !== undefined; // thi thử: câu đã được kiểm tra

  let html = '';
  html += '<div class="q-meta">';
  html += '<span class="q-no">' + q.no + '</span>';
  if (modeKey === 'study') {
    html += '<span class="q-type">Chọn ' + (q.select || 1) + ' đáp án · <strong>Đáp án: ' + q.correct.join(', ') + '</strong></span>';
  } else {
    html += '<span class="q-type">' + (q.type === 'multiple' ? 'Chọn ' + (q.select || 1) + ' đáp án' : 'Chọn 1 đáp án') + '</span>';
  }
  html += '<button class="q-flag' + (flagged ? ' on' : '') + '" id="flag-btn">' + (flagged ? '🚩 Đã đánh dấu' : '🚩 Đánh dấu') + '</button>';
  html += '</div>';
  html += '<div class="q-text">' + mdToHtml(q.question) + '</div>';
  if (q.imageMissing) {
    html += '<div class="q-warn">⚠️ Câu này có hình minh họa trên site gốc nhưng ảnh đã bị thiếu (404).</div>';
  }

  const reveal = modeKey === 'study' || modeKey === 'review' || checked;
  html += '<div class="options" id="options">';
  for (const o of q.options) {
    const isSel = myAns.includes(o.key);
    const isCorrect = q.correct.includes(o.key);
    let cls = 'option';
    let mark = '';
    if (reveal) {
      if (isCorrect) { cls += ' correct'; mark = '✅'; }
      else if (isSel) { cls += ' wrong'; mark = '❌'; }
      else { cls += ' dimmed'; }
    } else {
      if (isSel) cls += ' selected';
    }
    html += '<label class="' + cls + '">' +
      '<input type="' + (q.type === 'multiple' ? 'checkbox' : 'radio') + '" value="' + esc(o.key) + '"' +
      (reveal ? ' disabled' : '') + (isSel ? ' checked' : '') + '>' +
      '<span class="key">' + esc(o.key) + '</span>' +
      '<span class="body"><span class="txt">' + mdToHtml(o.text) + '</span></span>' +
      '<span class="mark">' + mark + '</span>' +
      '</label>';
  }
  html += '</div>';

  if (modeKey === 'exam') {
    html += '<div class="check-bar">' +
      '<span class="sel-count" id="sel-count"></span>' +
      '</div>';
  } else if (modeKey === 'mock' && !checked) {
    html += '<div class="check-bar">' +
      '<button class="primary" id="check-one-btn">✅ Kiểm tra đáp án</button>' +
      '<span class="sel-count" id="sel-count"></span>' +
      '</div>';
  } else if (modeKey === 'review' || checked) {
    const tag = myResult === 'correct' ? '<span class="result-tag ok">✔ Chính xác!</span>' :
      myResult === 'incorrect' ? '<span class="result-tag bad">✘ Sai — Đáp án: ' + q.correct.join(', ') + '</span>' :
        '<span class="result-tag">— Bỏ trống — Đáp án: ' + q.correct.join(', ') + '</span>';
    html += '<div class="check-bar">' + tag + '</div>';
  }

  if (reveal) {
    html += '<div class="explanation"><div class="expl-title">📖 Giải thích</div>';
    html += '<div class="expl-body">' + mdToHtml(q.explanation) + '</div>';
    if (q.references && q.references.length) {
      html += '<div class="refs"><strong>Tham khảo:</strong>';
      for (const r of q.references) {
        html += '<a href="' + esc(r.url) + '" target="_blank" rel="noopener">🔗 ' + esc(r.title) + '</a>';
      }
      html += '</div>';
    }
    html += '</div>';
  }
  card.innerHTML = html;

  // tương tác chọn đáp án (chế độ thi / thi thử khi câu chưa kiểm tra)
  if ((modeKey === 'exam' || modeKey === 'mock') && !checked) {
    const optionEls = card.querySelectorAll('.option');
    optionEls.forEach((el, k) => {
      el.addEventListener('click', ev => { ev.preventDefault(); toggleOption(k, optionEls); });
    });
    updateSelCount();
  }
  const flagBtn = $('#flag-btn');
  if (flagBtn) flagBtn.addEventListener('click', () => {
    const fl = flagsOf();
    const pos = fl.indexOf(q.no);
    if (pos >= 0) fl.splice(pos, 1); else fl.push(q.no);
    if (state.mode === 'study') state.studyFlags = fl; else attempt().flags = fl;
    saveState();
    renderStudy();
  });

  // thi thử: kiểm tra đáp án từng câu
  const checkBtn = $('#check-one-btn');
  if (checkBtn) checkBtn.addEventListener('click', () => {
    const entry = currentQuestion();
    if (!entry) return;
    const q = entry.q;
    const sel = attempt().answers[q.no] || [];
    const ok = sel.length === q.correct.length && q.correct.every(c => sel.includes(c));
    attempt().results[q.no] = sel.length ? (ok ? 'correct' : 'incorrect') : 'blank';
    saveState();
    renderStudy();
  });

  const f = filteredQuestions();
  $('#prev-btn').disabled = state.idx <= 0;
  $('#next-btn').disabled = state.idx >= f.length - 1;
  $('#question-pos').textContent = (state.idx + 1) + ' / ' + f.length + ' (câu ' + q.no + '/' + state.deck.questions.length + ')';
}

function getSelections() {
  return [...document.querySelectorAll('#options input:checked')].map(i => i.value);
}

function toggleOption(k, optionEls) {
  const entry = currentQuestion();
  if (!entry) return;
  const q = entry.q;
  const limit = q.select || 1;
  const key = q.options[k].key;
  let sel = [...attempt().answers[q.no] || []];
  if (sel.includes(key)) {
    sel = sel.filter(x => x !== key);
  } else {
    if (q.type === 'multiple' && sel.length >= limit) {
      sel.shift(); // bỏ đáp án cũ nhất
    } else if (q.type === 'single' && sel.length >= 1) {
      sel = [];
    }
    sel.push(key);
  }
  attempt().answers[q.no] = sel;
  saveState();
  // cập nhật UI
  optionEls.forEach((el, i) => {
    const inp = el.querySelector('input');
    inp.checked = sel.includes(q.options[i].key);
    el.classList.toggle('selected', inp.checked);
  });
  updateSelCount();
}

function updateSelCount() {
  const el = $('#sel-count');
  const entry = currentQuestion();
  if (!el || !entry) return;
  const limit = entry.q.select || 1;
  const n = (attempt().answers[entry.q.no] || []).length;
  el.textContent = 'Đã chọn ' + n + ' / ' + limit;
}

/* ---------- Nộp bài ---------- */
function doSubmit() {
  const total = state.deck.questions.length;
  const ans = attempt().answers;
  let done = 0;
  for (const no in ans) if (ans[no] && ans[no].length) done++;
  const blank = total - done;
  if (blank > 0 && !confirm('Bạn còn ' + blank + ' câu chưa trả lời. Nộp luôn?')) return;

  let correct = 0, incorrect = 0;
  for (const q of state.deck.questions) {
    const sel = ans[q.no] || [];
    if (!sel.length) { attempt().results[q.no] = 'blank'; continue; }
    const ok = sel.length === q.correct.length && q.correct.every(c => sel.includes(c));
    attempt().results[q.no] = ok ? 'correct' : 'incorrect';
    if (ok) correct++; else incorrect++;
  }
  attempt().submitted = true;
  saveState();
  storeSet(keyLast(state.deck.slug), { correct, total, ts: Date.now() });

  $('#result-overlay h2').textContent = state.mode === 'mock' ? '🏆 Kết quả thi thử' : '🏆 Kết quả bài thi';
  $('#result-score').textContent = correct + ' / ' + total;
  const pct = total ? Math.round(correct / total * 100) : 0;
  $('#result-breakdown').innerHTML =
    '<span class="ok">✔ Đúng: ' + correct + '</span>' +
    '<span class="bad">✘ Sai: ' + incorrect + '</span>' +
    '<span>— Bỏ trống: ' + blank + '</span>' +
    '<span>(' + pct + '%)</span>';
  $('#result-overlay').hidden = false;
}

function doRetake() {
  if (state.mode === 'mock') state.mock = { answers: {}, flags: [], submitted: false, results: {} };
  else state.exam = { answers: {}, flags: [], submitted: false, results: {} };
  state.filter = 'all';
  state.idx = 0;
  saveState();
  $('#result-overlay').hidden = true;
  renderStudy();
}

$('#submit-btn').addEventListener('click', doSubmit);
$('#review-btn').addEventListener('click', () => {
  $('#result-overlay').hidden = true;
  state.filter = 'all';
  state.idx = 0;
  renderStudy();
});
$('#retake-btn').addEventListener('click', doRetake);
$('#result-close-btn').addEventListener('click', () => { $('#result-overlay').hidden = true; });

/* ---------- Điều hướng ---------- */
$('#back-btn').addEventListener('click', showDeckScreen);
$('#prev-btn').addEventListener('click', () => { if (state.idx > 0) { state.idx--; renderStudy(); } });
$('#next-btn').addEventListener('click', () => {
  const f = filteredQuestions();
  if (state.idx < f.length - 1) { state.idx++; renderStudy(); }
});
$('#filter-tabs').addEventListener('click', e => {
  const btn = e.target.closest('button[data-filter]');
  if (!btn) return;
  state.filter = btn.dataset.filter;
  state.idx = 0;
  renderStudy();
});
$('#reset-btn').addEventListener('click', () => {
  if (state.mode === 'study') {
    if (confirm('Xóa danh sách câu đã đánh dấu của chế độ Học?')) {
      state.studyFlags = [];
      saveState(); renderStudy();
    }
  } else {
    if (confirm('Xóa toàn bộ bài làm hiện tại (đáp án đã chọn, đánh dấu)?')) {
      if (state.mode === 'mock') state.mock = { answers: {}, flags: [], submitted: false, results: {} };
      else state.exam = { answers: {}, flags: [], submitted: false, results: {} };
      state.filter = 'all'; state.idx = 0;
      saveState(); renderStudy();
    }
  }
});

/* ---------- Bàn phím ---------- */
document.addEventListener('keydown', e => {
  if ($('#study-screen').hidden || !$('#result-overlay').hidden) return;
  if (e.key === 'Enter') {
    const nb = $('#next-btn');
    if (!nb.disabled) { state.idx++; renderStudy(); }
    e.preventDefault();
  } else if (e.key === 'ArrowLeft') {
    $('#prev-btn').click(); e.preventDefault();
  } else if (e.key === 'ArrowRight') {
    $('#next-btn').click(); e.preventDefault();
  }
});

/* ---------- Theme ---------- */
function applyTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem(LS_THEME, t); } catch (e) {}
}
function initTheme() {
  let t = null;
  try { t = localStorage.getItem(LS_THEME); } catch (e) {}
  if (!t) t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(t);
}
$('#theme-btn').addEventListener('click', () => {
  applyTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});

/* ---------- Khởi động ---------- */
initTheme();
renderDeckList();
