var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const saludoEl = document.getElementById("saludo");
saludoEl.textContent = `Good Morning!`;
const climaEl = document.getElementById("clima");
let currentCity = "your location";
const getWeather = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        const data = yield response.json();
        const { temperature, weathercode } = data.current_weather;
        // Weather conditions dictionary
        const conditions = {
            0: "clear ☀️", 1: "mostly clear 🌤️", 2: "partly cloudy ⛅",
            3: "cloudy ☁️", 45: "fog 🌫️", 48: "fog with frost ❄️",
            51: "light drizzle 🌦️", 53: "drizzle 🌧️", 55: "heavy drizzle 🌧️",
            61: "light rain 🌧️", 63: "moderate rain 🌧️", 65: "heavy rain ⛈️",
            71: "light snow 🌨️", 73: "moderate snow 🌨️", 75: "heavy snow ❄️",
            80: "light showers 🌦️", 81: "moderate showers 🌧️", 82: "heavy showers ⛈️"
        };
        climaEl.textContent = `The weather in ${currentCity} is ${conditions[weathercode] || "unknown"} with ${temperature}°C.`;
    }
    catch (error) {
        climaEl.textContent = "Could not get the weather.";
    }
});
const getLocation = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            currentCity = "your location";
            getWeather(latitude, longitude);
        }, () => __awaiter(void 0, void 0, void 0, function* () {
            // If the user blocks geolocation, use the IP
            try {
                const response = yield fetch("https://ipinfo.io/json?token=532f9f9456531b");
                const data = yield response.json();
                const [lat, lon] = data.loc.split(",").map((coord) => parseFloat(coord));
                currentCity = data.city;
                getWeather(lat, lon);
            }
            catch (error) {
                climaEl.textContent = "Could not get the location.";
            }
        }));
    }
    else {
        climaEl.textContent = "Your browser does not support geolocation.";
    }
};
export { saludoEl, climaEl, getWeather, getLocation };
