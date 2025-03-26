const getNewJoke = document.getElementById("new-joke");
const showJoke = document.getElementById("show-joke");

const getJoke = async (): Promise<string> => {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });

        if (!response.ok) {
            throw new Error("Error retrieving dad joke!");
        }

        const jokeJSON = await response.json();
        return jokeJSON.joke;
    } catch (error) {
        return (error as Error).message;
    }
};

const displayJoke = async () => {
    const joke = await getJoke();
    console.log(joke);
    if (showJoke) {
        showJoke.textContent = joke;
    }
};

displayJoke();