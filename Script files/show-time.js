const timeButton = document.getElementById('show-time-btn');
const dateDisplay = document.getElementById('current-time');
const timeDisplay = document.getElementById('current-time-p');

function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    timeDisplay.textContent = `Current Time: ${currentTime}`;
}

timeButton.addEventListener('click', () => {
    const currentDate = new Date().toLocaleDateString();
    dateDisplay.textContent = `Current Date: ${currentDate}`;
    
    dateDisplay.style.display = 'block';
    timeDisplay.style.display = 'block';

    updateTime();  
    setInterval(updateTime, 1000);  
});
