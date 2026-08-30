// Small motion only; keeps the page lightweight.
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.documentElement.style.setProperty('--scrollY', `${y}px`);
});
