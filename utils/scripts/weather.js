var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const climaEl = document.getElementById("clima");
const tempEl = document.getElementById("temp");
const cityEl = document.getElementById("city");
let currentCity = "";
const getWeather = (lat, lon) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        const data = yield response.json();
        const { temperature, weathercode } = data.current_weather;
        const conditions = {
            0: "☀️", 1: "🌤️", 2: "⛅",
            3: "☁️", 45: "🌫️", 48: "❄️",
            51: "🌦️", 53: "🌧️", 55: "🌧️",
            61: "🌧️", 63: "🌧️", 65: "⛈️",
            71: "🌨️", 73: "🌨️", 75: "❄️",
            80: "🌦️", 81: "🌧️", 82: "⛈️"
        };
        climaEl.textContent = `${conditions[weathercode]}`;
        tempEl.textContent = `${temperature}°C.`;
        cityEl.textContent = `${currentCity}`;
    }
    catch (error) {
        console.error("Could not get the weather.");
    }
});
export const showWeather = () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            currentCity = "";
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
                console.error("Could not get the location.");
            }
        }));
    }
    else {
        console.error("Your browser does not support geolocation.");
    }
};
