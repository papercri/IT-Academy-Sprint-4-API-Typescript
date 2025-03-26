const getNewJoke = document.getElementById("new-joke");
const showJoke = document.getElementById("show-joke");
const scoreButtons = document.getElementById("score-buttons");

interface ReportAcudits {
    joke: string,
    score: number,
    date: string
}
const reportAcudits: ReportAcudits[] = [];

//Fetch Joke
const getJoke = async (): Promise<string> => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error getting new joke!");
        }

        const jokeJSON = await response.json();
        return jokeJSON.joke;
    } catch (error) {
        return (error as Error).message;
    }
};

let currentJoke: string = "";

const displayJoke = async () => {
    currentJoke = await getJoke();
    console.log(currentJoke);
    if (showJoke) {
        showJoke.textContent = currentJoke;
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

export { getNewJoke, showJoke, scoreButtons, ReportAcudits, reportAcudits, getJoke, currentJoke, displayJoke, rateJoke }