// PCAP — capture script cho practice-cert.maithienan.com
// Dùng: dán toàn bộ vào Console (F12) trên trang hiển thị câu hỏi (chế độ luyện tập),
//       sau đó gõ __PCAP.auto() để tự chuyển câu, hoặc tự bấm qua hết các câu,
//       cuối cùng gõ __PCAP.dump() để tải file JSON.
(() => {
  'use strict';
  if (window.__PCAP) { console.log('[PCAP] Đã kích hoạt — gõ __PCAP.dump() để tải file.'); return; }
  const segs = location.pathname.split('/').filter(Boolean);
  const slug = segs[segs.indexOf('practice') + 1] || segs[segs.length - 1] || 'unknown';
  const now = () => new Date().toISOString();
  const store = { version: 1, slug, startedAt: now(), examTitle: document.title, pageUrl: location.href, questions: [], pages: [], ajax: [] };

  // ---------- Bắt phản hồi AJAX: Winter CMS events + XHR + fetch ----------
  const pushAjax = (kind, url, parsed, status) => {
    store.ajax.push({ ts: now(), kind, url, status: status || null, parsed });
    if (store.ajax.length > 4000) store.ajax.splice(0, store.ajax.length - 4000);
  };
  document.addEventListener('ajax:request-success', e => {
    try { if (e.detail && e.detail.data) pushAjax('winter', location.href, e.detail.data); } catch (_) {}
  }, true);
  document.addEventListener('ajax:success', e => {
    try { if (e.detail && e.detail.data) pushAjax('winter2', location.href, e.detail.data); } catch (_) {}
  }, true);
  const _o = XMLHttpRequest.prototype.open, _s = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (m, u) { this.__u = new URL(String(u), location.href).href; return _o.apply(this, arguments); };
  XMLHttpRequest.prototype.send = function () {
    this.addEventListener('load', () => {
      try {
        const t = this.responseText || ''; let p = null;
        try { p = JSON.parse(t); } catch (_) {}
        if (p || t.trim()) pushAjax('xhr', this.__u, p || t.slice(0, 200000), this.status);
      } catch (_) {}
    });
    return _s.apply(this, arguments);
  };
  if (window.fetch) {
    const of = window.fetch;
    window.fetch = function (u, o) {
      return of.apply(this, arguments).then(res => {
        try {
          const ct = res.headers.get('content-type') || '';
          if (ct.includes('json')) {
            res.clone().json().then(j => pushAjax('fetch', String(u), j, res.status)).catch(() => {});
          }
        } catch (_) {}
        return res;
      });
    };
  }

  // ---------- Quét DOM ----------
  const letterOf = el => {
    const dk = (el.getAttribute('data-key') || el.getAttribute('data-option') || el.getAttribute('data-letter') || '').trim();
    if (/^[A-F]$/i.test(dk)) return dk.toUpperCase();
    for (const c of el.querySelectorAll('span, div, strong, b')) {
      const t = (c.innerText || '').trim();
      if (/^[A-F]$/i.test(t) && c.childElementCount === 0) return t.toUpperCase();
    }
    return '';
  };
  const stateOf = el => ({
    cls: typeof el.className === 'string' ? el.className : '',
    aria: el.getAttribute('aria-checked') || el.getAttribute('aria-selected') || '',
    data: [...el.attributes].filter(a => a.name.indexOf('data-') === 0).reduce((o, a) => { o[a.name] = a.value; return o; }, {}),
    checked: el.matches('input') ? !!el.checked : !!el.querySelector('input:checked'),
  });
  const cleanMain = () => {
    const m = document.querySelector('main');
    if (!m) return '';
    const c = m.cloneNode(true);
    c.querySelectorAll('script, style, link, header, footer, nav, dialog, svg').forEach(n => n.remove());
    return c.outerHTML.slice(0, 120000);
  };
  const qSig = q => (q.num || '') + '|' + String(q.qHtml || '').replace(/\s+/g, ' ').slice(0, 140);
  const scrapePage = () => {
    const qcs = [...document.querySelectorAll('.practice-question-content')];
    if (!qcs.length) return 0;
    let added = 0;
    for (const qc of qcs) {
      const headerRow = qc.closest('div, section, article, li') || qc.parentElement;
      const block = (headerRow && headerRow.parentElement) ? headerRow.parentElement : qc;
      let num = '';
      const badge = headerRow ? (headerRow.querySelector('span') || block.querySelector('span')) : null;
      if (badge) { const m = (badge.innerText || '').trim().match(/^\d{1,3}$/); if (m) num = m[0]; }
      const opts = [];
      block.querySelectorAll('label, button, li, [role="option"], [class*="option"]').forEach(el => {
        if (el.querySelector('.practice-question-content')) return;
        const key = letterOf(el);
        const input = el.querySelector('input[type="radio"], input[type="checkbox"]');
        if (!key && !input) return;
        opts.push({ key: key || (input ? (input.value || '') : ''), html: el.innerHTML, state: stateOf(el) });
      });
      if (!num && !opts.length) continue;
      const q = {
        pageUrl: location.href, ts: now(), num,
        qHtml: qc.innerHTML,
        options: opts,
        images: [...block.querySelectorAll('img')].map(i => i.src),
        blockHtml: block.outerHTML.slice(0, 200000),
        mainHtml: cleanMain(),
      };
      const sig = qSig(q);
      if (!store.questions.some(x => qSig(x) === sig)) { store.questions.push(q); added++; }
    }
    store.pages.push({ url: location.href, ts: now(), found: qcs.length });
    if (store.pages.length > 800) store.pages.splice(0, store.pages.length - 800);
    console.log('[PCAP] quét trang:', location.pathname, '| tổng câu đã thu:', store.questions.length, '| ajax:', store.ajax.length);
    return added;
  };

  // ---------- Tự chuyển câu ----------
  let autoTimer = null, noChange = 0, lastSig = '';
  const txt = b => (((b.innerText || '') + ' ' + (b.getAttribute('aria-label') || '') + ' ' + (b.title || '')).toLowerCase());
  const nextBtn = () => {
    const all = [...document.querySelectorAll('button, a[href], [role="button"]')].filter(b => !b.disabled && b.offsetParent !== null);
    let cands = all.filter(b => /(tiếp|câu tiếp|next|continue|kế tiếp)/.test(txt(b)) && !/(quay|trở|back|prev|trước)/.test(txt(b)));
    if (!cands.length) {
      cands = all.filter(b => b.querySelector('.bi-chevron-right, .bi-arrow-right, .bi-chevron-double-right, .bi-caret-right'));
      if (cands.length > 1) cands = [cands[cands.length - 1]];
    }
    return cands[0] || null;
  };
  const stop = () => { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } console.log('[PCAP] auto đã dừng.'); };
  const auto = (ms = 1400) => {
    if (autoTimer) { console.log('[PCAP] auto đang chạy — __PCAP.stop() để dừng.'); return; }
    console.log('[PCAP] tự chuyển câu mỗi', ms, 'ms — __PCAP.stop() để dừng.');
    autoTimer = setInterval(() => {
      scrapePage();
      const sig = store.questions.length + '|' + location.href;
      if (sig === lastSig) {
        if (++noChange > 45) { stop(); console.log('[PCAP] không thấy thay đổi — auto đã dừng. Gõ __PCAP.dump() để tải.'); }
        return;
      }
      lastSig = sig; noChange = 0;
      const b = nextBtn();
      if (b) b.click();
    }, ms);
  };

  // ---------- Tải file ----------
  const dump = () => {
    scrapePage();
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pcap-' + slug + '-' + Date.now() + '.json';
    document.body.appendChild(a); a.click(); a.remove();
    console.log('[PCAP] ĐÃ TẢI FILE:', a.download, '| câu:', store.questions.length, '| ajax:', store.ajax.length);
    return store;
  };

  // ---------- Theo dõi thay đổi trang ----------
  scrapePage();
  const obs = new MutationObserver(() => {
    if (document.querySelector('.practice-question-content')) scrapePage();
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });

  window.__PCAP = { store, scrape: scrapePage, dump, auto, stop };
  console.log('[PCAP] Sẵn sàng. Gõ __PCAP.auto() để tự lướt hết câu, __PCAP.dump() để tải file JSON.');
})();
