let searchinput=document.querySelector("input");
let button=document.querySelector("button");
button.addEventListener("click",()=>{
    const city=searchinput.value;
    const api="e48706162a532e9674164dcf3af31318"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        
        const cityName = data.name;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const humidity = data.main.humidity;
        const windSpeed = data.wind.speed;
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        // Update the UI
        document.getElementById("city-name").textContent = cityName;
        document.getElementById("temperature").textContent = `🌡 Temperature: ${temperature}°C`;
        document.getElementById("description").textContent = `🌤 Condition: ${description}`;
        document.getElementById("humidity").textContent = `💧 Humidity: ${humidity}%`;
        document.getElementById("wind-speed").textContent = `💨 Wind Speed: ${windSpeed} m/s`;
        document.getElementById("weather-icon").src = iconUrl;
    })
    .catch(error => console.log("Error fetching data:", error));
});

    