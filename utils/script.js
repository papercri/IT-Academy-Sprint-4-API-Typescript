"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getNewJoke = document.getElementById("new-joke");
const showJoke = document.getElementById("show-joke");
const scoreButtons = document.getElementById("score-buttons");
const reportAcudits = [];
//Fetch Joke
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Error getting new joke!");
        }
        const jokeJSON = yield response.json();
        return jokeJSON.joke;
    }
    catch (error) {
        return error.message;
    }
});
let currentJoke = "";
const displayJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    currentJoke = yield getJoke();
    console.log(currentJoke);
    if (showJoke) {
        showJoke.textContent = currentJoke;
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
// Crear botones de puntuación
if (scoreButtons) {
    [1, 2, 3].forEach(score => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.classList.add("btn-secondary");
        button.textContent = score.toString();
        button.addEventListener("click", () => rateJoke(score));
        scoreButtons.appendChild(button);
    });
}
// Evento para obtener un nuevo chiste
if (getNewJoke) {
    getNewJoke.addEventListener("click", displayJoke);
}
// Onload
displayJoke();
