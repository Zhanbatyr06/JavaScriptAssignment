function updateTime() {
    const now = new Date();
    
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    
    document.getElementById('current-time-p').textContent = formattedTime;
}


setInterval(updateTime, 1000);


updateTime();
