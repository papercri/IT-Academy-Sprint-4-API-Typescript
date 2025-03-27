interface WeatherData {
    temperature: number;
    weathercode: number;
}
interface IpInfoData {
    loc: string;
    city: string;
}
const climaEl = document.getElementById("clima") as HTMLElement;
const tempEl = document.getElementById("temp") as HTMLElement;
const cityEl = document.getElementById("city") as HTMLElement;
let currentCity: string = "";  
const getWeather = async (lat: number, lon: number): Promise<void> => {
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
        const data = await response.json();
        const { temperature, weathercode }: WeatherData = data.current_weather;
        const conditions: { [key: number]: string } = {
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
    } catch (error) {
       console.error("Could not get the weather.");
    }
};

export const showWeather = (): void => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                currentCity = "";  
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
                    console.error("Could not get the location.");
                }
            }
        );
    } else {
        console.error("Your browser does not support geolocation.");
    }
};


