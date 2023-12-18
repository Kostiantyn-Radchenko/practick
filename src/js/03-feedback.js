var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onSubmitForm);

const STORAGE_DATA = 'feedback-form-state';
const feedObj = {};

dataStorage();

function onFormInput(e) {
  const target = e.target;

  feedObj[target.name] = target.value;

  localStorage.setItem(STORAGE_DATA, JSON.stringify(feedObj));
}

function onSubmitForm(e) {
  e.preventDefault();

  e.target.reset();

  localStorage.removeItem(STORAGE_DATA);
}

function dataStorage() {
  const dataStor = JSON.parse(localStorage.getItem(STORAGE_DATA));
  if (dataStor === null) {
    return;
  }

  form.email.value = dataStor.email;
  form.message.value = dataStor.message;
  form.city.value = dataStor.city;
}
