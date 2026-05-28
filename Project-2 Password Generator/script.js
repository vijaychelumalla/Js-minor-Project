let hours = 0;
let minutes = 0;
let seconds = 0;

let timer = null;

let isRunning = false;

let display = document.getElementById("display");

let laps = document.getElementById("laps");

let lapCount = 0;



// START BUTTON
document.getElementById("startBtn").addEventListener("click", () => {

    if(!isRunning){

        timer = setInterval(runStopwatch, 1000);

        isRunning = true;
    }

});



// PAUSE BUTTON
document.getElementById("pauseBtn").addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;

});



// RESUME BUTTON
document.getElementById("resumeBtn").addEventListener("click", () => {

    if(!isRunning){

        timer = setInterval(runStopwatch, 1000);

        isRunning = true;
    }

});



// RESET BUTTON
document.getElementById("resetBtn").addEventListener("click", () => {

    clearInterval(timer);

    isRunning = false;

    hours = 0;
    minutes = 0;
    seconds = 0;

    display.innerHTML = "00 : 00 : 00";

    laps.innerHTML = "";

    lapCount = 0;

});



// LAP BUTTON
document.getElementById("lapBtn").addEventListener("click", () => {

    if(isRunning){

        lapCount++;

        let li = document.createElement("li");

        li.innerHTML = `Lap ${lapCount} : ${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(seconds)}`;

        laps.appendChild(li);
    }

});



// STOPWATCH FUNCTION
function runStopwatch(){

    seconds++;

    if(seconds === 60){

        seconds = 0;

        minutes++;
    }

    if(minutes === 60){

        minutes = 0;

        hours++;
    }

    display.innerHTML = `
        ${formatTime(hours)} : 
        ${formatTime(minutes)} : 
        ${formatTime(seconds)}
    `;
}



// FORMAT TIME
function formatTime(time){

    return time < 10 ? "0" + time : time;

}