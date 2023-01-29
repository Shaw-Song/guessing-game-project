const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let secretNumber = 4;

function checkGuess(n) {
    if (n > secretNumber) {
        console.log("Too high");
        return false;
    } else if (n < secretNumber) {
        console.log("Too low");
        return false;
    } else if (n === secretNumber) {
        return true;
    }
}


let askGuess = () => {
    rl.question("Enter a guess: ", answer => {
        if (checkGuess(Number(answer))) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }
    });
}


askGuess();



// console.log(checkGuess(1));
// console.log(checkGuess(5));
// console.log(checkGuess(4));
