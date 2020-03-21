const input = document.querySelector('input');
const errorMessage = document.querySelector('.error-text');
const submit = document.querySelector('button');

submit.addEventListener('click', e => {
  e.preventDefault();
  if (!input.value) {
    errorMessage.style.display = 'block';
    input.style.borderColor = 'hsl(354, 100%, 66%)';
  } else {
    errorMessage.style.display = 'none';
    input.style.borderColor = 'hsl(223, 100%, 88%)';
  }
});
