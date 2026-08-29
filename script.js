(() => {
  const screen = document.querySelector('.tv-screen');
  if (!screen) return;

  const flicker = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    screen.classList.add('micro-flicker');
    setTimeout(() => screen.classList.remove('micro-flicker'), 70);
  };

  setInterval(() => {
    if (Math.random() > 0.72) flicker();
  }, 2200);
})();
