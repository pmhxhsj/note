import { moveCreateNotePage } from './moveHtml.js';

// moveCreateNotePage();

const App = () => {
  document.querySelector('#create-note-btn').addEventListener('click', () => {
    moveCreateNotePage();
  });
};

App();
