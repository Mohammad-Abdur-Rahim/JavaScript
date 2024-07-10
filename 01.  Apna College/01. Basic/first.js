//create a game start with any random numbers.ask the user keep guessing the correct numbers until the game is finished   . 
let gameNum = 25;
let userNum = prompt("guessing the game number");

while (userNum != gameNum) {
     userNum = prompt(" Again try");
}
console.log("Congratulation You win ");
