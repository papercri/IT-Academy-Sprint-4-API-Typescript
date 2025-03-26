interface WeatherData {
    temperature: number;
    weathercode: number;
}

interface IpInfoData {
    loc: string;
    city: string;
}

const saludoEl = document.getElementById("saludo") as HTMLElement;
saludoEl.textContent = `Good Morning!`;
const climaEl = document.getElementById("clima") as HTMLElement;
let currentCity: string = "your location";  

const getWeather = async (lat: number, lon: number): Promise<void> => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        const data = await response.json();
        const { temperature, weathercode }: WeatherData = data.current_weather;
        
        // Weather conditions dictionary
        const conditions: { [key: number]: string } = {
            0: "clear ☀️", 1: "mostly clear 🌤️", 2: "partly cloudy ⛅",
            3: "cloudy ☁️", 45: "fog 🌫️", 48: "fog with frost ❄️",
            51: "light drizzle 🌦️", 53: "drizzle 🌧️", 55: "heavy drizzle 🌧️",
            61: "light rain 🌧️", 63: "moderate rain 🌧️", 65: "heavy rain ⛈️",
            71: "light snow 🌨️", 73: "moderate snow 🌨️", 75: "heavy snow ❄️",
            80: "light showers 🌦️", 81: "moderate showers 🌧️", 82: "heavy showers ⛈️"
        };

        climaEl.textContent = `The weather in ${currentCity} is ${conditions[weathercode] || "unknown"} with ${temperature}°C.`;
    } catch (error) {
        climaEl.textContent = "Could not get the weather.";
    }
};

const getLocation = (): void => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                currentCity = "your location";  
                getWeather(latitude, longitude);
            },
            async () => {
                // If the user blocks geolocation, use the IP
                try {
                    const response = await fetch("https://ipinfo.io/json?token=532f9f9456531b");
                    const data: IpInfoData = await response.json();
                    const [lat, lon] = data.loc.split(",").map((coord: string) => parseFloat(coord));
                    currentCity = data.city;  
                    getWeather(lat, lon);
                } catch (error) {
                    climaEl.textContent = "Could not get the location.";
                }
            }
        );
    } else {
        climaEl.textContent = "Your browser does not support geolocation.";
    }
};

export { WeatherData, IpInfoData, saludoEl, climaEl, getWeather, getLocation }
