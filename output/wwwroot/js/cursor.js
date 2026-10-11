(() => {
  // Only for devices with a precise pointer and hover; respect reduced motion.
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!fine.matches) return;

  const dot = document.createElement('div');
  const ring = document.createElement('div');
  dot.className = 'cursor-dot';
  ring.className = 'cursor-ring';
  // Appended to <body>, outside #app, so Blazor re-renders never remove them.
  document.body.append(ring, dot);
  document.documentElement.classList.add('has-custom-cursor');

  let x = -100, y = -100, rx = x, ry = y;
  const INTERACTIVE = 'a, button, [role="button"], summary, label';

  window.addEventListener('mousemove', (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    document.documentElement.classList.remove('cursor-hidden');
  }, { passive: true });

  // Delegated, so it keeps working as Blazor adds or removes elements.
  document.addEventListener('mouseover', (e) => {
    ring.classList.toggle('is-hover', !!e.target.closest(INTERACTIVE));
  });
  document.addEventListener('mousedown', () => ring.classList.add('is-down'));
  document.addEventListener('mouseup', () => ring.classList.remove('is-down'));
  document.documentElement.addEventListener('mouseleave', () =>
    document.documentElement.classList.add('cursor-hidden'));

  const tick = () => {
    const k = reduced.matches ? 1 : 0.18; // easing; 1 = no trailing
    rx += (x - rx) * k;
    ry += (y - ry) * k;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(tick);
  };
  tick();
})();