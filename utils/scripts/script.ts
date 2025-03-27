import {  getJoke} from "./dadJoke.js"
import { getCnorris } from "./chuckNorris.js"
import { showWeather } from "./weather.js"

const getNewJoke = document.getElementById("new-joke");
const showJoke = document.getElementById("show-joke");
const scoreButtons = document.getElementById("score-buttons");

interface ReportAcudits {
    joke: string,
    score: number,
    date: string
}
const reportAcudits: ReportAcudits[] = [];

let currentJoke: string = "";

//alterna el chiste de un fetch al otro
const displayJoke = async () => {
    const isJoke = Math.random() < 0.5;
    currentJoke = isJoke ? await getJoke() : await getCnorris();
    console.log(currentJoke);

    if (showJoke) {
        showJoke.textContent = currentJoke;
        showJoke.style.fontStyle = isJoke ? "normal" : "italic"; 
        //si es chuckNorris se verá en cursiva, de esta manera reconocemos cual de los 2 es
    }
};

const rateJoke = (score: number) => {
    const existingReport = reportAcudits.find(report => report.joke === currentJoke);
    if (existingReport) {
        existingReport.score = score; 
    } else {
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


