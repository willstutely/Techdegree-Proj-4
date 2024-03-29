# Techdegree-Proj-4
 OOP Game Show

The OOP Game Show allows the user to engage in a less morbid iteration of "Hangman," gently losing one of five tries (symbolized as blue hearts) per missed guess rather than illustrate an unfortunate stickman.  The keyboard displays the correct/incorrect keys as the user selects their input which is accomplished by either clicking the desired letter on screen, or typing it on their own physical keyboard via "click" or "keyup" eventListeners.  

For style customization, jQuery was attached to this project, and the fadeOut() and fadeIn() animations were used on the blue hearts in the "removeLife()" method in the Game Class.  The same effect is also initiated on "startGame" to fade all of the hearts to a 0.1 opacity and then back to 1.  

On the "Congratulations, you won!" page the original phrase is displayed with the first letter of each word capitalized.

A new method in the Game Class "clearGameBoard()" was created to handle resetting the hearts, removing the old phrase, etc. with the goal of keeping the "gameOver()" method cleaner.