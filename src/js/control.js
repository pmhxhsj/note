import { inputException } from './inputException.js';

document.querySelector('#create-button').addEventListener('click', () => {
  const inputTitle = document.querySelector('#title-input');
  inputException(inputTitle);
});
