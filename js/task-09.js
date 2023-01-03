function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let body = document.querySelector('body');
let changeColorBtn = document.querySelector('.change-color');
let colorValue = document.querySelector('.color');

changeColorBtn.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
}