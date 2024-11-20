// Get the button element
const button = document.getElementById('animateButton');

// Add an event listener for click event
button.addEventListener('click', () => {
    // Add the 'clicked' class to trigger the animation
    button.classList.add('clicked');

    // Reset the button after the animation ends (0.4s)
    setTimeout(() => {
        button.classList.remove('clicked');
        button.classList.add('reset');

        // Remove the reset class after a short delay
        setTimeout(() => {
            button.classList.remove('reset');
        }, 500);
    }, 400);
});