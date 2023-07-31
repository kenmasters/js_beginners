/**
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript
 */

console.log('main.js loaded');
console.log(typeof 'main.js loaded');
console.log(typeof 12);
console.log(typeof true);

const myVariable = 'Mathematics is fun!';


console.error('JavaScript String object'); // displays a warning message

console.log(myVariable.length);
console.log(myVariable.charAt(0));
console.log(myVariable.indexOf('at')); // looks for first occurence of 'at'
console.log(myVariable.lastIndexOf('at')); // looks for last occurence of 'at'
console.log(myVariable.slice(0, 2)); // returns a substring from index 0 to 2
console.log(myVariable.includes('athe')); // returns true if the string contains the specified value
console.log(myVariable.split('e')); // splits the string into an array of substrings

console.error('JavaScript numbers'); // displays a warning message
const myNumber = 12;
const myFloat = 12.4032;
const myString = "12.4032";
console.log(myNumber.toFixed(2)); // rounds to 2 decimal places
console.log(myNumber === myString); // converts a string to a floating-point number
console.log(parseFloat(myString)); // converts a string to a floating-point number
console.log(Number(myString)); // converts a string to a floating-point number
console.log(Number(myString) === parseFloat(myString));
console.log(Number("Ken John Siosan")); // returns NaN (Not a Number)
console.log(Number(false)); // returns 0
console.log(Number(true)); // returns 1
console.log(Number(null)); // returns 0
console.log(Number(undefined)); // returns NaN
console.log(Number(Infinity)); // returns Infinity
console.log(Number(-Infinity)); // returns -Infinity
/** Always remember that 0 is false in Javascript */


console.error('JavaScript Number methods and properties');
console.log(Number.parseFloat("54.9904abc")); // converts a string to a floating-point number
console.log(Number.isNaN("54.9904abc")); // converts a string to an integer
console.log(isNaN("54.9904abc")); // checks if a value is NaN, this is a global function and preferred to be used


console.error('JavaScript Math object');
console.log(Math.PI); // returns PI
console.log(Math.round(4.7)); // rounds to the nearest integer
console.log(Math.round(4.4)); // rounds to the nearest integer
console.log(Math.pow(2, 3)); // returns the value of 2 to the power of 3
console.log(Math.sqrt(64)); // returns the square root of 64
console.log(Math.abs(-4.7)); // returns the absolute (positive) value of -4.7
console.log(Math.ceil(4.4)); // returns the value of 4.4 rounded up to its nearest integer
console.log(Math.floor(4.7)); // returns the value of 4.7 rounded down to its nearest integer
console.log(Math.sin(90 * Math.PI / 180)); // returns the sine of 90 degrees
console.log(Math.cos(0 * Math.PI / 180)); // returns the cosine of 0 degrees
console.log(Math.min(0, 150, 30, 20, -8, -200)); // returns the number with the lowest value
console.log(Math.max(0, 150, 30, 20, -8, -200)); // returns the number with the highest value
console.log(Math.random()); // returns a random number between 0 (inclusive), and 1 (exclusive)
console.log(Math.floor(Math.random() * 10) + 1); // returns a random integer from 1 to 10


/**
 * Exercise: Write a javascript program that will generate a random letter from your name
 */
const myName = 'KENJOHNSIOSAN';
const nameLength = myName.length;
console.log(`Random letter from ${myName}:`, myName.charAt(Math.floor(Math.random() * nameLength)));

