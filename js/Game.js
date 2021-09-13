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
        const phrase = new Phrase(this.phrases[randomNumber])
        return phrase;
    };

    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        const newPhrase = game.getRandomPhrase();
        newPhrase.addPhraseToDisplay();
        this.activePhrase = newPhrase;
    };

/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't won
 */

    checkForWin() {};

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */

    removeLife() {};

/**
 * Displays 'game over' message
 * @param {boolean} gameWon - Whether or not the user won the game
 */

    gameOver(gameWon) {};

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */

    handleInteraction(button) {};

 }