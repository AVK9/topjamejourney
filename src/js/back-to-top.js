// const backToTop = document.querySelector('.back-to-top');
// backToTop.hidden = true;

// (() => {
//   window.addEventListener('scroll', () => {
//     if (window.scrollY > window.innerHeight) {
//       backToTop.hidden = false;
//     } else {
//       backToTop.hidden = true;
//     }
//   });

//   backToTop.addEventListener('click', goTop);
//   function goTop() {
//     if (window.scrollY > 0) {
//       window.scrollBy(0, -25);
//       setTimeout(goTop, 0);
//     }
//   }
// })();

document.querySelector('.back-to-top').addEventListener('click', scrollToTop);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const scrollToTopBtn = document.querySelector('.back-to-top');
  if (window.scrollY > window.innerHeight * 0.7) {
    // document.body.scrollTop > 300 ||
    //   document.documentElement.scrollTop > 300  )
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
