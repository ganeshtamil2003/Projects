
//variables declaration
const minutesLabel = document.getElementById("minutes");
const secondsLabel = document.getElementById("seconds");
const millisecondsLabel = document.getElementById("milliseconds");

const startButton = document.getElementById("startBtn");
const stopButton = document.getElementById("stopBtn");
const pauseButton = document.getElementById("pauseBtn");
const resetButton = document.getElementById("resetBtn");

const lapList = document.getElementById("laplist");

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;

let isTimerRunning = false;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (!isTimerRunning) {
    interval = setInterval(updateTimer, 10);
    startButton.disabled = true;
    isTimerRunning = true;
  }
}

function stopTimer() {
  if (isTimerRunning) {
    clearInterval(interval); // Pause
    addToLapList();         // Add lap only if the timer was running
    resetTimerData();      // Reset the time
  }
  isTimerRunning = false;
  startButton.disabled = false;
}

function pauseTimer() {
  if (isTimerRunning) {
    clearInterval(interval);  //pause
    startButton.disabled = false;
    isTimerRunning = false;
  }
}

function resetTimer() {
    clearInterval(interval); //pause
    resetTimerData();       //reset the time
    startButton.disabled = false;
    isTimerRunning = false;
}

//Timer logic
function updateTimer() {
  milliseconds++;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  displayTimer();
}

//display function
function displayTimer() {
  millisecondsLabel.textContent = padTime(milliseconds);
  secondsLabel.textContent = padTime(seconds);
  minutesLabel.textContent = padTime(minutes);
}
function padTime(time) {
  return time.toString().padStart(2, "0");
}

//Timer reset function
function resetTimerData() {
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  displayTimer();
}

//LapList Function
function addToLapList() {
  if (isTimerRunning) {
    stopButton.disabled = false;
    const lapTime = `${padTime(minutes)}:${padTime(seconds)}:${padTime(
      milliseconds
    )}`;
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span> Lap ${
      lapList.childElementCount + 1
    }: </span>${lapTime}`;
    lapList.appendChild(listItem);
  } else {
    stopButton.disabled = true;
  }
}
