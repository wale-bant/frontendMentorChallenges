const email = document.querySelector('input');
const errorMessage = document.querySelector('.error-message');
const button = document.querySelector('.btn');

button.addEventListener('click', e => {
  e.preventDefault();
  if (!email.value) {
    email.classList.add('on-error');
    errorMessage.style.display = 'block';
  } else {
    email.classList.remove('on-error');
    errorMessage.style.display = 'none';
  }
});
