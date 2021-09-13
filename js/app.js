/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset');
const qwertyButtons = document.getElementById('qwerty'); 
let game;

startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
})

qwertyButtons.addEventListener('click', (event) => {
    const letter = game.activePhrase.checkLetter(event.target.textContent);
    game.activePhrase.showMatchedLetter(letter);
    console.log(letter);
});

