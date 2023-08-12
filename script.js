// Replace with your API keys
const weatherAPIKey = '147a24efaa6e48c0aa241359231208';
const giphyAPIKey = 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/01d9bc30971807.563b2b13c384b.gif';

const city = 'New York'; // Replace with desired city

// Fetch weather data from OpenWeatherMap API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherAPIKey}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('city').textContent = data.name;
        document.getElementById('temperature').textContent = data.main.temp;
        document.getElementById('weather').textContent = data.weather[0].description;

        // Fetch GIF based on weather condition from GIPHY API
        const weatherCondition = data.weather[0].main.toLowerCase();
        return fetch(`https://api.giphy.com/v1/gifs/random?tag=${weatherCondition}&api_key=${giphyAPIKey}`);
    })
    .then(response => response.json())
    .then(data => {
        const gifUrl = data.data.image_original_url;
        document.getElementById('weather-gif').src = gifUrl;
    })
    .catch(error => console.error('Error:', error));
