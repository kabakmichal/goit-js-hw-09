// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';

const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const today = new Date().getTime();

const convertMs = (ms) =>{
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

let selectedDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const selected = selectedDates[0].getTime();
        if (selected < today) {
            window.alert('Please choose a date in the future');
        } else {
            startBtn.disabled = false;
            return selectedDate = selectedDates[0];
      }
  },
};

flatpickr('#datetime-picker', options);

function addLeadingZero(value) {
    if (value < 10) {
        return value = '0' + value;
    } else {
        return value;
    }
};

let daysHtml = document.querySelector('[data-days]');
let hoursHtml = document.querySelector('[data-hours]');
let minutesHtml = document.querySelector('[data-minutes]');
let secondsHtml = document.querySelector('[data-seconds]');


const getDifference = () => {
    const todayTime = new Date().getTime();
    let difference = selectedDate.getTime() - todayTime;
    console.log(convertMs(difference));
    console.log(difference);

    const resultDays = convertMs(difference).days;
    daysHtml.textContent = addLeadingZero(resultDays);

    const resultHours = convertMs(difference).hours;
    hoursHtml.textContent = addLeadingZero(resultHours);

    const resultMinutes = convertMs(difference).minutes;
    minutesHtml.textContent = addLeadingZero(resultMinutes);

    const resultSeconds = convertMs(difference).seconds;
    secondsHtml.textContent = addLeadingZero(resultSeconds);

    difference -= 1000;
};

let timerId = null;
startBtn.addEventListener('click', () => {
    timerId = setInterval(() => {
        getDifference();
    }, 1000);
});