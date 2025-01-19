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
  slidesPerView: 1.02,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
