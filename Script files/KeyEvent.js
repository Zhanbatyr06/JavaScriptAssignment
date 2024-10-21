document.getElementById('numbersInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        sortNumbers();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        CloseMenu();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'n') {
        document.getElementById('theme-toggle').click(); 
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        document.querySelector('.carousel-control-prev').click(); 
    } else if (event.key === 'ArrowRight') {
        document.querySelector('.carousel-control-next').click(); 
    }
});