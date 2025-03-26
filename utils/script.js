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
const getJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        if (!response.ok) {
            throw new Error("Error retrieving dad joke!");
        }
        const jokeJSON = yield response.json();
        return jokeJSON.joke;
    }
    catch (error) {
        return error.message;
    }
});
const displayJoke = () => __awaiter(void 0, void 0, void 0, function* () {
    const joke = yield getJoke();
    console.log(joke);
    if (showJoke) {
        showJoke.textContent = joke;
    }
});
displayJoke();
