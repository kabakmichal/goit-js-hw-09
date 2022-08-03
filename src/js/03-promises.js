const createBtn = document.querySelector('button');

const delay = document.querySelector('delay');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

createBtn.addEventListener('click', () => {
  console.log(delay.toNumber());
})