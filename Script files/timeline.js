function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

function animateTimeline() {
    const timelineContents = document.querySelectorAll('.timeline-content');
    timelineContents.forEach(content => {
        if (isInViewport(content)) {
            content.classList.add('visible');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', animateTimeline);
});
