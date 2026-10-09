// Desktop only: when the page reaches its end, the fixed header scrolls up
// so its title lines up with the contact lead line.
window.followSection = (headerSelector, leadSelector) => {
  const header = document.querySelector(headerSelector);
  const lead = document.querySelector(leadSelector);
  if (!header || !lead) return;

  const title = header.querySelector('h1') ?? header;
  const desktop = window.matchMedia('(min-width: 1001px)');

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

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  desktop.addEventListener('change', schedule);
  schedule();
};