// practice qs2
let gameNum = 15;
let userNum = parseInt(prompt("Enter Your Number:"));

while (userNum !== gameNum) {
    userNum = parseInt(prompt("Wrong Number. Enter Your Number:"));
}

console.log("Congratulations! You Win 🎉");
