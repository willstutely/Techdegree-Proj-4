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
        while (ul.firstChild) {
            ul.removeChild(parent.firstChild);
        }
        const phrase = this.phrase;
        console.log(phrase);
        console.log(phrase.length);
        for (let i=0; i<phrase.length; i++) {
            const character = phrase.charAt(i);
            if (/[a-z]/.test(character)) {
                const li = document.createElement('li');
                li.textContent = character;
                li.className = 'letter';
                ul.appendChild(li);
            } else {
                const li = document.createElement('li');
                li.textContent = character;
                li.className = 'space';
                ul.appendChild(li);
            }
            
        }
          
    };
 }

