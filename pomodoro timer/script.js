const WORK_DURATION = 25 * 60;
const BREAK_TIME = 5 * 60;

let timeLeft = WORK_DURATION;
let isPaused = true;
let timeInterval;

const timer = document.getElementById('timer');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');


function startTimer() {
    timeInterval = setInterval(function(){
        if(timeLeft > 0) {
            timeLeft--;
            updateDisplay();
        } else {
            clearInterval(timeInterval);
            if(isWorkDuration()) {
                timeLeft = WORK_DURATION;
                timer.style.color = 'red';
            } else {
                timeLeft = BREAK_TIME;
                timer.style.color = 'blue';
            }
            isPaused = true;
            updateDisplay();
        }
    }, 1000);
}

function isWorkDuration() {
    return timeLeft === WORK_DURATION;
}

function pauseTimer() {
    clearInterval(timeInterval);
    isPaused = true;
}

function stopTimer() {
    clearInterval(timeInterval);
    timeLeft = WORK_DURATION;
    isPaused = true;
    updateDisplay();
}

function getSeconds (seconds) {
    return seconds < 10 ? `0${seconds}` : seconds;
}

function updateDisplay() {
    const minutes = Math.floor( timeLeft / 60 );
    const seconds = timeLeft % 60;
    const timeString = `${minutes} : ${getSeconds(seconds)}`;
    timer.innerText = timeString;
}


start.addEventListener('click', function(){
    if (isPaused) {
        startTimer();
        isPaused = false;
    }
})

pause.addEventListener('click', function(){
    if(!isPaused) {
        pauseTimer();
        isPaused = true;
    }
})

stop.addEventListener('click', function(){
    stopTimer();
});