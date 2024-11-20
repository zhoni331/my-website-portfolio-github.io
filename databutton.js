const timeBtn = document.getElementById('time-btn');
const timeDisplay = document.getElementById('time-display');

timeBtn.addEventListener('click', function() {
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = `Current Time: ${currentTime}`;
});