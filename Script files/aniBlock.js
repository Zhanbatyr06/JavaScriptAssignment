function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateOnScroll() {
    const blocks = document.querySelectorAll('.card');
    blocks.forEach(block => {
        if (isInViewport(block)) {
            block.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);

document.querySelectorAll('.card').forEach(block => {
    block.classList.add('hidden');
});