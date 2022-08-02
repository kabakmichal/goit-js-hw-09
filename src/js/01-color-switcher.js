function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
let changeColor = null;

start.addEventListener('click', () => {
  start.disabled = true;
  stop.disabled = false;

  changeColor = setInterval(() => {
    const color = getRandomHexColor();
    body.style.background = color;
  }, 1000);
});

stop.addEventListener('click', () => {
  stop.disabled = true;
  start.disabled = false;
  clearInterval(changeColor);
});

