// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.site-menu-btn');
  var drawer = document.querySelector('.site-mobile-drawer');
  if (!btn || !drawer) return;

  btn.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.innerHTML = isOpen ? '<i class="ti ti-x"></i>' : '<i class="ti ti-menu-2"></i>';
  });

  // Close drawer when a link is tapped
  drawer.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      drawer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.innerHTML = '<i class="ti ti-menu-2"></i>';
    });
  });
});
