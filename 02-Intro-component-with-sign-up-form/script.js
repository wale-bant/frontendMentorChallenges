const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submit = document.querySelector('.btn');
console.log(submit);
// console.log(document.querySelector('.form-row .first-name-error'));
const getElement = (parent, child) =>
  document.querySelector(`.${parent} .${child}`);

submit.addEventListener('click', e => {
  e.preventDefault();
  validate();
});

function validate() {
  if (!firstName.value) {
    firstName.style.border = '1.5px solid rgba(255, 0, 0, .5)';
    getElement('form-row', 'first-name-error').style.display = 'block';
    getElement('form-row', 'first-name-error-icon').style.visibility =
      'visible';
  }
  if (!lastName.value) {
    lastName.style.border = '1.5px solid rgba(255, 0, 0, .5)';
    getElement('form-row', 'last-name-error').style.display = 'block';
    getElement('form-row', 'last-name-error-icon').style.visibility = 'visible';
  }
  if (!email.value) {
    email.style.border = '1.5px solid rgba(255, 0, 0, .5)';
    getElement('form-row', 'email-error').style.display = 'block';
    getElement('form-row', 'email-error-icon').style.visibility = 'visible';
  }
  if (!password.value) {
    password.style.border = '1.5px solid rgba(255, 0, 0, .5)';
    getElement('form-row', 'password-error').style.display = 'block';
    getElement('form-row', 'password-error-icon').style.visibility = 'visible';
  }

  if (firstName.value || lastName.value || email.value || password.value)
    submit.disabled = false;
}
