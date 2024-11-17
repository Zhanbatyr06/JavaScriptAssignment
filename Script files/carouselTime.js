const carousel = document.querySelector('#pizzaCarousel');
const speedControl = document.querySelector('#speedControl');
const speedValue = document.querySelector('#speedValue');

let carouselInstance = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel, {
    interval: parseInt(speedControl.value), 
    ride: 'carousel'
});

speedControl.addEventListener('input', (event) => {
    const newInterval = parseInt(event.target.value);
    speedValue.textContent = newInterval;

    carouselInstance.pause();

    carouselInstance = new bootstrap.Carousel(carousel, {
        interval: newInterval,
        ride: 'carousel'
    });

    carouselInstance.cycle();
});