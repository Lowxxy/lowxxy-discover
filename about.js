document.querySelector('.menu-toggle')?.addEventListener('click', e => {
  const nav = document.querySelector('#mobile-nav');
  nav.hidden = !nav.hidden;
  e.currentTarget.setAttribute('aria-expanded', String(!nav.hidden));
  e.currentTarget.setAttribute('aria-label', nav.hidden ? 'Open menu' : 'Close menu');
});
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('#mobile-nav').hidden = true;
  document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
}));
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
