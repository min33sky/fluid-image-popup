const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.gallary img');
const originalImg = document.querySelector('.full-img');
const caption = document.querySelector('.caption');

// 프리뷰 이미지들에 이벤트 등록
previews.forEach((preview) => {
  preview.addEventListener('click', () => {
    modal.classList.add('open');
    originalImg.classList.add('open');
    const originalSrc = preview.getAttribute('data-original'); // 원본 이미지 파일 이름
    originalImg.src = `./full/${originalSrc}.jpg`; // 원본 이미지 주소
    caption.textContent = preview.alt; // 이미지 설명
  });
});

// 모달 종료 이벤트
modal.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal')) {
    modal.classList.remove('open');
    originalImg.classList.remove('open');
    originalImg.src = '';
    caption.textContent = '';
  }
});
