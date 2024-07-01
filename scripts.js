document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContainer = document.getElementById('navbar-default');

    menuToggle.addEventListener('click', function () {
      menuContainer.classList.toggle('hidden');
    });
  });