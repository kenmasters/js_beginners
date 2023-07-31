/**
 * General format of an switch statement
 * Switch statements are used when you have a lot of if/else if statements
 * and you want to make your code more readable.
 * Switch comparison is in a strict sense, meaning that it checks for value and type.
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

switch (true) {
    case customerIsBanned:
        reply = "You are banned from the store.";
        break;
    case soup:
        reply = `Here is your ${soup} soup.`;
        break;
    default:
        reply = "Sorry, we're out of soup.";
        break;
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


console.log("Switch statement version");
switch (playerOne) {
    case computer:
        // tie
        break;
    case "rock":
        switch (computer) {
            case "scissors":
                // playerOne wins
                break;
            default:
                // computer wins
                break;
        }
        break;
    case "scissors":
        switch (computer) {
            case "rock":
                // computer wins
                break;
            default:
                // playerOne wins
                break;
        }
        break;
    case "paper":
        switch (computer) {
            case "rock":
                // playerOne wins
                break;
            default:
                // computer wins
                break;
        }
        break;
    default:
        console.log("Invalid input");
        break;
}

