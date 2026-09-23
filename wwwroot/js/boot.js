(function () {
  const lines = [
    "gabesabella.dev — boot sequence initiated",
    "> mounting runtime",
    "> resolving assemblies [ok]",
    "> loading components [ok]",
    "> compiling styles [ok]",
    "> ready"
  ];
  const logEl = document.getElementById('boot-log');
  const screenEl = document.getElementById('boot-screen');
  const appEl = document.getElementById('app');
  const MIN_DISPLAY_MS = 1800; // dial this up/down for "a few seconds"
  const start = performance.now();

  let li = 0, ci = 0;
  function typeNext() {
    if (li >= lines.length) return;
    const line = lines[li];
    if (ci <= line.length) {
      logEl.textContent = lines.slice(0, li).join('\n') + (li > 0 ? '\n' : '') + line.slice(0, ci);
      ci++;
      setTimeout(typeNext, 18 + Math.random() * 28);
    } else {
      li++; ci = 0;
      setTimeout(typeNext, 110);
    }
  }
  typeNext();

  window.__bootReveal = function reveal() {
    const wait = Math.max(0, MIN_DISPLAY_MS - (performance.now() - start));
    setTimeout(() => {
      screenEl.classList.add('boot-hide');
      appEl.classList.add('app-visible');
      setTimeout(() => screenEl.remove(), 500);
    }, wait);
  };
})();