/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
 * Create phrases for use in game
 * @return {array} An array of phrases that could be used in the game
 */

    createPhrases() {
        const phraseArray = [
            "Never give up never surrender",
            "As you wish",
            "Slow down you move too fast",
            "The stuff that dreams are made of",
            "Bridge over troubled water"
        ];
        return phraseArray;
    };

/**
 * Selects random phrase from phrases property
 * @return {Object} Phrase object chosen to be used
 */

    getRandomPhrase() {
        const randomNumber = Math.ceil(Math.random() * this.phrases.length) -1;
        return this.phrases[randomNumber];
    };
 }