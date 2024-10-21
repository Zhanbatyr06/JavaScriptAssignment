const readMoreButton = document.getElementById('read-more');
const moreContent = document.getElementById('more-content');

readMoreButton.addEventListener('click', () => {
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        readMoreButton.textContent = 'Hide';
    } else {
        moreContent.style.display = 'none';
        readMoreButton.textContent = 'Read more';
    }
});
