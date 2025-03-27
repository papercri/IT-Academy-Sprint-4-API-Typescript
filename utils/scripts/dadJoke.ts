export const getJoke = async (): Promise<string> => {
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
}