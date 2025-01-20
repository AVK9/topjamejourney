const readMore = document.querySelector('#user1');
const click1 = document.querySelector('#click1');

click1.addEventListener('click', onModal);

function onModal() {
  readMore.classList.add('ppoapp');

  document.addEventListener('scroll', removeClass);
  document.addEventListener('keydown', removeClassOnKey);
}

function removeClass() {
  if (readMore.classList.contains('ppoapp')) {
    readMore.classList.remove('ppoapp');

    document.removeEventListener('scroll', removeClass);
    document.removeEventListener('keydown', removeClassOnKey);
  }
}

function removeClassOnKey(event) {
  if (event.code === 'Space' || event.code === 'Escape') {
    removeClass();
  }
}
