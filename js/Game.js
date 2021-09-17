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

/**
 * Begins game by selecting a random phrase and displaying it to user
 * ...and:
 * If a previous game had been played the game board is cleared by:
 * 1. resetting lost hearts, 2. clearing QWERTY keyboard of selections,
 * 3. removing previous phrase <li> elements, and 4. removing the 
 * congratulations message
 */
    startGame() {
        // Reset Lost Hearts
        const lives = document.querySelectorAll('.tries');
        lives.forEach(life => {
            const image = life.firstElementChild;
            if (image.src.includes("images/lostHeart.png")) {
                return image.src = "images/liveHeart.png";
            }
        })
        
        // Clear QWERTY keyboard of selected letters
        const chosen = document.querySelectorAll('.chosen')
        chosen.forEach(item => {
            item.className = "key";
        })
        const wrong = document.querySelectorAll('.wrong')
        wrong.forEach(item => {
            item.className = "key";
        })
        
        // Remove previous phrase <li> elements
        const phraseLocation = document.getElementById('phrase');
        const ul = phraseLocation.firstElementChild;
        while (ul.lastElementChild) {
            ul.removeChild(ul.lastElementChild)
        }
        
        // Remove congratulations message
        const message = document.getElementById('game-over-message');
        if (message.firstElementChild) {
            message.removeChild(message.firstElementChild)
            message.textContent = "";
        }

        // Remove the initial or 'game over' overlay and create a new phrase
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
    checkForWin() {
        const phraseLi = document.querySelectorAll('.letter');
        const phraseLiArray = [...phraseLi];
        if (phraseLiArray.length === 0) {
            return true;
        } else {
            return false;
        }
    };

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
    removeLife() {
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(this.checkForWin());
        }
        const lives = document.getElementsByClassName('tries');
        for (let i=0; i<lives.length; i++) {
            const image = lives[i].firstElementChild;
            if (image.src.includes("images/liveHeart.png")) {
                return image.src = "images/lostHeart.png";
            }
        }
    };

/**
 * Displays 'game over' message
 * @param {boolean} gameWon - Whether or not the user won the game
 */
    gameOver(gameWon) {
        const overlay = document.getElementById('overlay');
        const message = document.getElementById('game-over-message');
        if (gameWon) {
            overlay.style.display = 'block';
            message.textContent = "Congratulations, you won!"
            const h = document.createElement('p');
            h.textContent = `"${this.activePhrase.phrase}"`;
            message.appendChild(h) 
        } else if (this.missed === 5) {
            overlay.style.display = 'block';
            message.textContent = "You were so close...better luck next time."
        }
    };

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonElement) button - The clicked button element
 */
    handleInteraction(button) {
        const checkedLetter = this.activePhrase.checkLetter(button.textContent);
        if (checkedLetter) {
            this.activePhrase.showMatchedLetter(checkedLetter);
            button.className = "chosen";
            this.gameOver(this.checkForWin());
        } else {
            button.className = "wrong";
            this.removeLife();
        }
    };
 }

