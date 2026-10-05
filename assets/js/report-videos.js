/* Only the three technical-report previews are managed here. */
(() => {
  const videos = [...document.querySelectorAll('.report-video')];
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new WeakMap();
  const sync = video => {
    const play = visible.get(video) && !document.hidden && !reduced.matches;
    video.autoplay = Boolean(play);
    if (play) video.play().catch(() => {});
    else video.pause();
  };
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      visible.set(entry.target, entry.isIntersecting);
      sync(entry.target);
    });
  }, { threshold: 0.15 });
  videos.forEach(video => {
    video.muted = true;
    video.defaultMuted = true;
    video.loop = true;
    if (reduced.matches) { video.autoplay = false; video.pause(); }
    observer.observe(video);
  });
  document.addEventListener('visibilitychange', () => videos.forEach(sync));
  reduced.addEventListener('change', () => videos.forEach(sync));
})();
