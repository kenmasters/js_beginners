/**
 * General format of an switch statement
 */
// switch (condition) {
//     case value1:
//         // do something
//         break;
//     case value2:
//         // do something
//         break;
//     case value3:
//         // do something
//         break;
//     default:
//         // do something
//         break;
// }

let soup = "chicken noodle";
let reply;
let customerIsBanned = true;

if (customerIsBanned) {
    reply = "You are banned from the store.";
} else if (soup) {
    // reply = "Here is your " + soup + " soup.";
    reply = `Here is your ${soup} soup.`; // this is using template literals
} else {
    reply = "Sorry, we're out of soup.";
}

console.log(reply);




let testScore = 75;
let grade;

/**
 * The logical order of the if statements is important. it's like a waterfall.
 */

if (testScore >= 90) {
    grade = "A";
} else if (testScore >= 80) {
    grade = "B";
} else if (testScore >= 70) {
    grade = "C";
} else if (testScore >= 60) {
    grade = "D";
} else {
    grade = "F";
}

console.log(`Your grade is ${grade}.`);

// Decision tree for Rock, Paper, Scissors game
// Rock beats scissors
// Scissors beats paper
// Paper beats rock
let playerOne = "rock";
let computer = "paper";
if (playerOne === computer) {
    // tie
} else if (playerOne === "rock") {
    if (computer === "scissors") {
        // playerOne wins
    } else {
        // computer wins
    }
} else if (playerOne === "scissors") {
    if (computer === "rock") {
        // computer wins
    } else {
        // playerOne wins
    }
} else if (playerOne === "paper") {
    if (computer === "rock") {
        // playerOne wins
    } else {
        // computer wins
    }
}


