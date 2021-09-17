/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.getElementById('btn__reset');
const qwertyButtons = document.getElementsByClassName('key'); 
let game;

startButton.addEventListener('click', e => {
    game = new Game();
    game.startGame();
})

for (let i=0; i<qwertyButtons.length; i++) {
    qwertyButtons[i].addEventListener('click', (event) => {
        game.handleInteraction(event.target)
    });

}

document.addEventListener('keyup', event => {
    for (let i=0; i<qwertyButtons.length; i++) {
        if (event.key === qwertyButtons[i].textContent) {
            game.handleInteraction(qwertyButtons[i])
        }
    }
})