const stars = document.querySelectorAll('.stars');
const ratingMessage = document.getElementById('ratingMessage');

stars.forEach(star => {
    star.addEventListener('click', () => {
        stars.forEach(s => s.classList.remove('selected'));

        for(let i = 0; i < star.getAttribute('data-value'); i++){
            stars[i].classList.add('selected');
        }

        ratingMessage.textContent = `You rated this product ${star.getAttribute('data-value')} star(s)!`; 
    });
});