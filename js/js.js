"use strict";

let intervalId;
const colorBlock = document.getElementById('colorBlock');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

startBtn.addEventListener('click', () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = getRandomColor();
        }, 500);
    }
});

stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null; 
});