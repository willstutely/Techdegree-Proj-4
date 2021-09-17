/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
 * Display phrase on game board
 */
    addPhraseToDisplay() {
        const phraseLocation = document.getElementById('phrase');
        const ul = phraseLocation.firstElementChild;
        const phrase = this.phrase;
        for (let i=0; i<phrase.length; i++) {
            const character = phrase.charAt(i);
            const li = document.createElement('li');
            li.textContent = character;
            if (/[a-z]/.test(character)) {
                li.className = 'letter';
            } else {
                li.className = 'space';
            }
            ul.appendChild(li);
        }
    };

/**
 * Checks if passed letter is in phrase
 * @param (string) letter - Letter to check
 */
    checkLetter(letter) {
        const phrase = this.phrase;
        let matchedLetter;
        for (let i=0; i<phrase.length; i++){
            if (phrase.charAt(i) === letter) {
                matchedLetter = letter;
            }
        }
        return matchedLetter;
    };

/**
 * Displays passed letter on screen after a match is found
 * @param (string) letter - Letter to display
 */
    showMatchedLetter(letter) {
        const matchedLetter = document.querySelectorAll('.letter');
        matchedLetter.forEach(item => {
            if (item.textContent === letter) {
                item.className = "show";
            }
        });
    }
};
