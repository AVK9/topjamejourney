// document.getElementById('logo').addEventListener('click', function () {
//   window.location.href = '#home_section';
// });

const menuButton = document.querySelector('.js-open-menu');
const closeButton = document.querySelector('.js-close-menu');
const menuContainer = document.querySelector('.js-menu-container');
const navLinks = document.querySelectorAll('.mobile-menu__link');
const logo = document.querySelector('.mob-menu-logo a');

function openMenu() {
  menuContainer.classList.add('active');
  menuContainer.style.visibility = 'visible';
  // document.body.style.overflow = 'hidden';
  // menuButton.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menuContainer.classList.remove('active');
  setTimeout(() => {
    menuContainer.style.visibility = 'hidden';
  }, 300);
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

document.querySelectorAll('.smooth-scroll').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
      });
    }
  });
});

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

logo.addEventListener('click', closeMenu);
