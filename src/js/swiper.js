const swiper = new Swiper('.swiper-m', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
});

const swiperDesktop = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const backToTop = document.querySelector('.back-to-top');
backToTop.hidden = true;

(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      backToTop.hidden = false;
    } else {
      backToTop.hidden = true;
    }
  });

  backToTop.addEventListener('click', goTop);
  function goTop() {
    if (window.scrollY > 0) {
      window.scrollBy(0, -25);
      setTimeout(goTop, 0);
    }
  }
})();
