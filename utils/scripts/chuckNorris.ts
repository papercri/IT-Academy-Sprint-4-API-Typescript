export const getCnorris = async (): Promise<string> => {
    try {
        const response = await fetch("https://api.chucknorris.io/jokes/random", {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Error getting new Chuck Norris joke!");
        }
        const cnorrisJSON = await response.json();
        return cnorrisJSON.value;
    } catch (error) {
        return (error as Error).message;
    }
};
