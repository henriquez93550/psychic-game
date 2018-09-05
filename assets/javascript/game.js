//Setting variables and starting counters with zero
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var ranLetter = ranLetter;
var letters = "abcdefghijklmnopqrstuvwxyz"

//GENERATING THE SECRET LETTER
//Generates random number (decimal from 0 to 1) which is multiplied by 26 and the rounded down to nearest decimal. 
ranLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(ranLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
      ranLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(ranLetter);

}

//USING THE PLAYERS INPUT
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
      var playerGuess = event.key;

      // WHAT HAPPENS WHEN PLAYER GUESSES CORRECTLY
      //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
      if (playerGuess === ranLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //WHAT HAPPENS WHEN PLAYER GUESSES INCORRECTLY
      //function used to execute if player guessed incorrectly
      jsGuess();
      if (playerGuess !== ranLetter) {
            attempts--;

      }

      //What to do when player is out of attempts, attempts go back to 10 and guesses reset
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //WHAT TO DO FOR INCORRECT GUESSES
      //this if function prevents player from choosing the same letter twice
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //shows player that they have guessed incorrectly
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }
      //PLAYER INFORMATION ON HTML
      //the statements show the player their score on the game
      document.getElementById('won').innerHTML = won;
      document.getElementById('lost').innerHTML = lost;
      document.getElementById('attempts').innerHTML = attempts;

}
