/*
Api ottenuta registrandosi su https://home.openweathermap.org/.
Il progetto usa l'endpoint current weather per cercare una citta e mostrare i dati principali.
*/

/*
async function getData(){
    try{
        const result = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&appid=YOUR_API_KEY")

        if(!result.ok){
            throw new Error("Dati non trovati")
        }

        const data = await result.json();

        console.log(data);

    }catch(error){
        console.log(error)
    }
    
}

getData()
*/

const form = document.querySelector(".weather-form");
const card = document.querySelector(".card");
const cityInput = document.querySelector(".city-input");
const dati = document.querySelectorAll(".data");
const err = document.querySelector(".errorDisplay");
const cityh1 = document.querySelector(".cityDisplay");
const temp = document.querySelector(".tempDisplay");
const umidity = document.querySelector(".umidityDisplay");
const emoji = document.querySelector(".weatherEmoji");
// Legge la chiave dal file locale config.local.js senza salvarla nel codice versionato.
// La vecchia chiave esposta e stata eliminata e non va piu riutilizzata.
// `?.` prova a leggere OPENWEATHER_API_KEY solo se WEATHER_APP_CONFIG esiste.
// `?? ""` usa una stringa vuota se il valore e null o undefined, evitando errori a runtime.
const apiKey = window.WEATHER_APP_CONFIG?.OPENWEATHER_API_KEY ?? "";

form.addEventListener("submit", async event =>{
    event.preventDefault(); // serve ad evitare che la pagina si refreshi da sola

    // Blocca la richiesta se la configurazione locale non e stata ancora compilata.
    if(!apiKey){
        displayError("Missing OpenWeather API key. Configure weatherApp/config.local.js")
        return;
    }

    const city = cityInput.value;

    if(city){ // se c'è un valore in city risulta true
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }catch(error){
            console.log(error);
            displayError(error)
        }
    }else{
        displayError("Insert a city...")
    }
})

async function getWeatherData(city){
    // Se non specifichi units, OpenWeather restituisce la temperatura in Kelvin.
    // encodeURIComponent evita errori nella query se il nome della citta contiene spazi o caratteri speciali.
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&APPID=${apiKey}`;

    const response = await fetch(apiUrl);

    if(!response.ok){
        throw new Error("Could not fetch weather data...")
    }

    const data = await response.json()

    return await data;

}

function displayWeatherInfo(data){
    card.style.visibility = "visible";
    dati.forEach(dato =>{
        dato.style.display = "block";
    })
    err.style.display = "none";
    cityh1.textContent = data.name;
    // La temperatura viene mostrata nelle tre scale principali partendo dal valore Kelvin dell'API.
    temp.textContent = `${Math.floor(Number(data.main.temp))}K / ${Math.floor(Number((data.main.temp-273)))}°C / ${Math.floor(Number((data.main.temp-273))*9/5+32)}°F`;
    umidity.textContent = `Humidity: ${Math.floor(Number(data.main.humidity))}%`;
    emoji.textContent = getWeatherEmoji(data.weather[0].id);
}

function getWeatherEmoji(id){
    // Gli intervalli seguono i weather condition codes di OpenWeatherMap.
    if(id >= 200 && id <= 232){
        return "⛈️";
    }else if(id >= 300 && id <= 321){
        return "🌧️";
    }else if(id >= 500 && id <= 531){
        return "🌦️";
    }else if(id >= 600 && id <= 622){
        return "🌨️";
    }else if(id >= 701 && id <= 781){
        return "🌫️";
    }else if(id === 800){
        return "☀️";
    }else if(id >= 801 && id <= 804){
        return "🌥️";
    }else{
        return "❓";
    }
}

function displayError(message){
    card.style.visibility = "visible";
    dati.forEach(dato =>{
        dato.style.display = "none";
    })
    // Se arriva un oggetto Error, mostriamo solo il testo leggibile del messaggio.
    err.textContent = message instanceof Error ? message.message : message;
    err.style.display = "block";
}