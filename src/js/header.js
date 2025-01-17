document.getElementById('logo').addEventListener('click', function () {
  window.location.href = '#home_section';
});

const menuButton = document.querySelector('.js-open-menu');
const closeButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');

function openMenu() {
  menuContainer.classList.add('active');
  menuContainer.style.visibility = 'visible';
  // menuButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menuContainer.classList.remove('active');
  setTimeout(() => {
    menuContainer.style.visibility = 'hidden';
  }, 300);
  // menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);

document.addEventListener('click', event => {
  if (
    !menuContainer.contains(event.target) &&
    !menuButton.contains(event.target)
  ) {
    closeMenu();
  }
});
