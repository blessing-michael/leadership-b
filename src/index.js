import './style.css';
import addScore from './addScore';
import refresh from './showUI';

const submitButton = document.querySelector('.submit');
console.log(submitButton)
submitButton.addEventListener('click', async () => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  const name = nameInput.value;
  const score = (scoreInput.value);

  await addScore(name, score);
  nameInput.value = '';
  scoreInput.value = '';
});

const refreshButton = document.querySelector('.refresh');
refreshButton.addEventListener('click', refresh);
window.addEventListener('load', refresh);