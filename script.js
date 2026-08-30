// Lightweight motion only. No dependencies.
const cards = document.querySelectorAll('.film');
window.addEventListener('pointermove', (e) => {
  if (window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  cards.forEach((card, i) => {
    const d = (i + 1) * 1.2;
    card.style.translate = `${x * d}px ${y * d}px`;
  });
});
