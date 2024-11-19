
async function fetchWeather(city) {
    const apiKey = 'da5db7de02cf2b138144ccecb006c882'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}


document.getElementById('WeatherBtn').addEventListener('click', async () => {
    const city = 'Astana'; 
    const resultDiv = document.getElementById('weatherResult');

    
    resultDiv.innerHTML = '';

    try {
        
        const weatherData = await fetchWeather(city);
        const { name, main, weather } = weatherData;
        resultDiv.innerHTML = `
            <h2>Weather in ${name}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Condition: ${weather[0].description}</p>
        `;
    } catch (error) {
        resultDiv.textContent = `Error: ${error.message}`;
    }
});
