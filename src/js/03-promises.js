// all modules//
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  useIcon: false,
})

const createBtn = document.querySelector('button');
const form = document.querySelector('.form');

const createPromise = (position, delay) => {
  const shouldResolve = Math.random() > 0.3;

  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
  } else {
    // Reject
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
  }
};

const sumTime = (sum, arg1, arg2, counter) => {
  return (sum = arg1 + arg2 * (counter - 1));
};

let timerId = null;

createBtn.addEventListener('click', event => {
  event.preventDefault();

  const delayInput = form.elements.delay.value;
  const delayStepsInput = form.elements.step.value;
  const amountInput = form.elements.amount.value;

  let loop = 1;

  console.log(`Delay: ${delayInput}`);

  setTimeout(() => {
    let time = Number(delayInput);
    createPromise(loop, time);

    timerId = setInterval(() => {
      loop++;
      const arg1 = Number(delayInput);
      const arg2 = Number(delayStepsInput);
      let newTime = 0;

      const actualTime = sumTime(newTime, arg1, arg2, loop);

      if (loop <= amountInput) {
        createPromise(loop, actualTime);
      } else {
        clearInterval(timerId);
      }
    }, delayStepsInput);
  }, delayInput);
});
