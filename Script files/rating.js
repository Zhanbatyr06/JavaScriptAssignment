function rateService(event) {
    let selectedRating = event.target.getAttribute('data-value');
    alert(`You have rated: ${selectedRating} stars!`);
}

let stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', rateService);
});
