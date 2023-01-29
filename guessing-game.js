let secretNumber = 4;
function checkGuess(n) {
    if (n > secretNumber) {
        console.log("Too high");
        return false;
    } else if (n < secretNumber) {
        console.log("Too low");
        return false;
    } else {
        return true;
    }
}

// console.log(checkGuess(1));
// console.log(checkGuess(5));
// console.log(checkGuess(4));
