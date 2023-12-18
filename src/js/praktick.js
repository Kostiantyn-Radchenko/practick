function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  start: document.querySelector('.js-start'),
  stop: document.querySelector('.js-stop'),
  body: document.querySelector('body'),
};

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);

let timerId = null;
refs.stop.disabled = true;

function onStartClick(e) {
  const btnStart = e.target;

  btnStart.disabled = true;
  refs.stop.disabled = false;

  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopClick(e) {
  const btnStop = e.target;

  clearInterval(timerId);

  btnStop.disabled = true;
  refs.start.disabled = false;
}
