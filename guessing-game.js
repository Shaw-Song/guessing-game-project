const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


let secretNumber;


let askRange = () => {
    rl.question("Enter a max number: ", max => {
        rl.question("Enter a min number: ", min => {
            console.log("I'm thinking of a number between " + min + " and " + max + "...");
            secretNumber = randomInRange(Number(min), Number(max));
            askGuess();
        });
    });
}

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

askRange();

// askGuess();

// console.log(randomInRange(15, 20)); // 16
// console.log(randomInRange(15, 20)); // 17
// console.log(randomInRange(15, 20)); // 20

// console.log(checkGuess(1));
// console.log(checkGuess(5));
// console.log(checkGuess(4));
