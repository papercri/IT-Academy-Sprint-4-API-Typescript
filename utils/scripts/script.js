var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getJoke } from "./dadJoke.js";
import { getCnorris } from "./chuckNorris.js";
import { showWeather } from "./weather.js";
const getNewJoke = document.getElementById("new-joke");
const showJoke = document.getElementById("show-joke");
const scoreButtons = document.getElementById("score-buttons");
const reportAcudits = [];
let currentJoke = "";
//alterna el chiste de un fetch al otro
const displayJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const isJoke = Math.random() < 0.5;
    currentJoke = isJoke ? yield getJoke() : yield getCnorris();
    console.log(currentJoke);
    if (showJoke) {
        showJoke.textContent = currentJoke;
        showJoke.style.fontStyle = isJoke ? "normal" : "italic";
        //si es chuckNorris se verá en cursiva, de esta manera reconocemos cual de los 2 es
    }
});
const rateJoke = (score) => {
    const existingReport = reportAcudits.find(report => report.joke === currentJoke);
    if (existingReport) {
        existingReport.score = score;
    }
    else {
        reportAcudits.push({
            joke: currentJoke,
            score: score,
            date: new Date().toISOString() // Formato ISO
        });
    }
    console.log(reportAcudits);
};
if (scoreButtons) {
    [1, 2, 3].forEach(score => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = score.toString();
        button.addEventListener("click", () => rateJoke(score));
        if (scoreButtons) {
            scoreButtons.appendChild(button);
        }
    });
}
if (getNewJoke) {
    getNewJoke.addEventListener("click", displayJoke);
}
// Onload
displayJoke();
showWeather();
getCnorris();
