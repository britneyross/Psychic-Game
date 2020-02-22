var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Computer to pick random value from alphabet array
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice)

//resets game
var restart = function() {
    guessesLeft = 9;
    guessesSoFar = [];
    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

function countGuessesLeft() {
    document.getElementById('guessesLeft').innerHTML = "Guesses Left: " + guessesLeft;
    }
      
function farUserChoice() {
    document.getElementById('guessesSoFar').innerHTML = "Your Guesses so far: " + guessesSoFar.join(' ');
    }
      
    countGuessesLeft();
  
document.onkeyup = function(event) {
    guessesLeft--;
      
    var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
      
    guessesSoFar.push(userChoice);
    countGuessesLeft();
    farUserChoice();       
      
    if (userChoice === computerChoice){
        wins++;
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        alert("You have guessed the correct letter! You must be psychic!");
        restart();
    } 
    else if (guessesLeft === 0) {
        losses++;
        document.getElementById('losses').innerHTML = "Loses: " + losses;
        alert("You are out of chances! You are not psychic! Try again!");
        restart();
    }
}
  
  