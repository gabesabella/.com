// Desktop only: when the page reaches its end, the fixed header scrolls up
// so its title lines up with the contact lead line.
window.followSection = (headerSelector, leadSelector) => {
  const header = document.querySelector(headerSelector);
  const lead = document.querySelector(leadSelector);
  if (!header || !lead) return;

  const title = header.querySelector('h1') ?? header;
  const desktop = window.matchMedia('(min-width: 1001px)');
  const contact = lead.closest('section') ?? lead.parentElement;

  // Size the space below the lead so max scroll puts the lead's text exactly
  // on the title's resting line (no more, no less).
  const fit = () => {
    contact.style.paddingBottom = '';
    if (!desktop.matches) return;

    const prev = header.style.transform;
    header.style.transform = '';
    const restTop = title.getBoundingClientRect().top;
    header.style.transform = prev;

    const leadPad = parseFloat(getComputedStyle(lead).paddingTop || '0');
    const leadDocTop = lead.getBoundingClientRect().top + window.scrollY;
    const below = document.documentElement.scrollHeight - leadDocTop;
    const needed = window.innerHeight - restTop + leadPad;
    const base = parseFloat(getComputedStyle(contact).paddingBottom) || 0;
    const extra = Math.max(0, needed - below);
    contact.style.paddingBottom = `${base + extra}px`;
  };

  let queued = false;
  const update = () => {
    queued = false;
    if (!desktop.matches) {
      // Any transform/will-change makes .header the containing block for the
      // fixed mobile nav bar, which shrinks it. Keep both off on mobile.
      header.style.transform = '';
      header.style.willChange = '';
      return;
    }
    header.style.willChange = 'transform';
    header.style.transform = '';
    const restTop = title.getBoundingClientRect().top;
    const targetTop =
      lead.getBoundingClientRect().top +
      parseFloat(getComputedStyle(lead).paddingTop || '0');
    const delta = Math.min(0, targetTop - restTop);
    header.style.transform = `translateY(${delta}px)`;
  };
  const schedule = () => {
    if (!queued) {
      queued = true;
      requestAnimationFrame(update);
    }
  };
  const refit = () => { fit(); schedule(); };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', refit);
  window.addEventListener('load', refit);
  desktop.addEventListener('change', refit);
  // Lazy images change page height as they load.
  document.querySelectorAll('img').forEach((img) => {
    if (!img.complete) img.addEventListener('load', refit, { once: true });
  });

  refit();
};