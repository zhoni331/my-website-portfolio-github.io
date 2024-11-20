const toggleButton = document.getElementById('theme-toggle');
const bodyElement = document.body;

toggleButton.addEventListener('click', function() {
    if (bodyElement.classList.contains('day-theme')) {
        bodyElement.classList.replace('day-theme', 'night-theme');
        toggleButton.textContent = 'Switch to Day Mode';
    } else {
        bodyElement.classList.replace('night-theme', 'day-theme');
        toggleButton.textContent = 'Switch to Night Mode';
    }
});
