// const confirmed = confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!')

// console.log(confirmed);

const userInput = prompt('What is your favorite movie?'); // when cancel is clicked, null is returned
console.log(userInput ?? 'You have not entered anything.');