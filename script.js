(function () {
  'use strict';
  var menu = document.querySelector('.menu-button');
  var mobile = document.getElementById('mobile-nav');
  if (menu && mobile) {
    menu.addEventListener('click', function () {
      var nextOpen = mobile.hasAttribute('hidden');
      if (nextOpen) mobile.removeAttribute('hidden'); else mobile.setAttribute('hidden', '');
      menu.setAttribute('aria-expanded', String(nextOpen));
      menu.setAttribute('aria-label', nextOpen ? 'Close menu' : 'Open menu');
    });
    mobile.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobile.setAttribute('hidden', '');
        menu.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-label', 'Open menu');
      });
    });
  }
  document.querySelectorAll('.piece-photo[data-front][data-back]').forEach(function (button) {
    var picture = button.querySelector('img');
    if (!picture) return;
    button.addEventListener('click', function () {
      var reversed = button.getAttribute('data-reversed') === 'true';
      var next = reversed ? button.dataset.front : button.dataset.back;
      var preload = new Image();
      preload.onload = function () {
        picture.src = next;
        button.setAttribute('data-reversed', String(!reversed));
      };
      preload.src = next;
    });
  });
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
