import { getNewJoke, scoreButtons, displayJoke, rateJoke } from "./dadJoke.js";
import { getLocation } from "./weather.js";
// Crear botones de puntuación
if (scoreButtons) {
    [1, 2, 3].forEach(score => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-secondary");
        button.textContent = score.toString();
        button.addEventListener("click", () => rateJoke(score));
        if (scoreButtons) {
            scoreButtons.appendChild(button);
        }
    });
}
// Evento para obtener un nuevo chiste
if (getNewJoke) {
    getNewJoke.addEventListener("click", displayJoke);
}
// Onload
displayJoke();
getLocation();
