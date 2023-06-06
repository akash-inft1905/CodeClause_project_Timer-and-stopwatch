// script.js

// Timer
let timerInterval;
let timerActive = false;
let timerTime = 0;

const timerHours = document.getElementById('timer-hours');
const timerMinutes = document.getElementById('timer-minutes');
const timerSeconds = document.getElementById('timer-seconds');
const startTimerButton = document.getElementById('start-timer');
const pauseTimerButton = document.getElementById('pause-timer');
const resetTimerButton = document.getElementById('reset-timer');

startTimerButton.addEventListener('click', startTimer);
pauseTimerButton.addEventListener('click', pauseTimer);
resetTimerButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!timerActive) {
    timerActive = true;
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function pauseTimer() {
  if (timerActive) {
    timerActive = false;
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  timerActive = false;
  clearInterval(timerInterval);
  timerTime = 0;
  updateTimerDisplay();
}

function updateTimer() {
  timerTime++;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const hours = Math.floor(timerTime / 3600);
  const minutes = Math.floor((timerTime % 3600) / 60);
  const seconds = timerTime % 60;

  timerHours.textContent = formatTime(hours);
  timerMinutes.textContent = formatTime(minutes);
  timerSeconds.textContent = formatTime(seconds);
}

// Stopwatch
let stopwatchInterval;
let stopwatchActive = false;
let stopwatchTime = 0;

const stopwatchHours = document.getElementById('stopwatch-hours');
const stopwatchMinutes = document.getElementById('stopwatch-minutes');
const stopwatchSeconds = document.getElementById('stopwatch-seconds');
const stopwatchMilliseconds = document.getElementById('stopwatch-milliseconds');
const startStopwatchButton = document.getElementById('start-stopwatch');
const pauseStopwatchButton = document.getElementById('pause-stopwatch');
const resetStopwatchButton = document.getElementById('reset-stopwatch');

startStopwatchButton.addEventListener('click', startStopwatch);
pauseStopwatchButton.addEventListener('click', pauseStopwatch);
resetStopwatchButton.addEventListener('click', resetStopwatch);

function startStopwatch() {
  if (!stopwatchActive) {
    stopwatchActive = true;
    stopwatchInterval = setInterval(updateStopwatch, 10);
  }
}

function pauseStopwatch() {
  if (stopwatchActive) {
    stopwatchActive = false;
    clearInterval(stopwatchInterval);
  }
}

function resetStopwatch() {
  stopwatchActive = false;
  clearInterval(stopwatchInterval);
  stopwatchTime = 0;
  updateStopwatchDisplay();
}

function updateStopwatch() {
  stopwatchTime++;
  updateStopwatchDisplay();
}

function updateStopwatchDisplay() {
  const hours = Math.floor(stopwatchTime / 360000);
  const minutes = Math.floor((stopwatchTime % 360000) / 6000);
  const seconds = Math.floor((stopwatchTime % 6000) / 100);
  const milliseconds = stopwatchTime % 100;

  stopwatchHours.textContent = formatTime(hours);
  stopwatchMinutes.textContent = formatTime(minutes);
  stopwatchSeconds.textContent = formatTime(seconds);
  stopwatchMilliseconds.textContent = formatTime(milliseconds, 3);
}

function formatTime(time, digits = 2) {
  return time.toString().padStart(digits, '0');
}
