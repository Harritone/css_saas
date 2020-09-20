const close = document.querySelector('.popup__close');
const btns = document.querySelectorAll('.btn-popup');
const popup = document.querySelector('.popup');

popup.addEventListener('click', () => {
  popup.style.display = 'none';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

btns.forEach(btn => {
  btn.addEventListener('click', () => {
  popup.style.display = 'block';
  });
});
