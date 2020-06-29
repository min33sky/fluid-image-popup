const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallary img');
const original = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    original.classList.add('open');
    const originalSrc = preview.getAttribute('data-original');
    original.src = `./full/${originalSrc}.jpg`;
    caption.textContent = preview.alt;
  });
});

modal.addEventListener('click', (e) => {
  console.log(e.target.classList.contains('modal'));
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    original.classList.remove('open');
    original.src = '';
    caption.textContent = '';
  }
});
