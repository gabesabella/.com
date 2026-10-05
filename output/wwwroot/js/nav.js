window.observeSections = (...args) => {
  const ids = args.flat();
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((e) =>
      document.getElementById(`nav-${e.target.id}`)?.classList.toggle('active', e.isIntersecting)),
    { rootMargin: '-200px 0px -800px 0px', threshold: 0 }
  );
  ids.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
};