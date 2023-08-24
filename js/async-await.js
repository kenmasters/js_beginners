// Fetch Api
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

const { get } = require("mongoose");


// Requires a discussion of Callbacks, Promises, Thenables and Async/Await



// This is an example of using callbacks, this approach is not recommended and is only used here for demonstration purposes
// callbacks are used to handle asynchronous operations this was the only way to do it before promises and async/await
function firstFunction(parameters, callback) {
    // do stuff
    callback();
}
function secondFunction(parameters, callback) {
    // do stuff
    callback();
}
function thirdFunction(parameters, callback) {
    // do stuff
    callback();
}

// AKA callback hell
firstFunction('stuff', function () {
    secondFunction('stuff', function () {
        thirdFunction('stuff', function () {
            // and so on...
        });
    });
});


// Using promises: 3 states Pending, Fulfilled, Rejected
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

// Promises are a way to handle asynchronous operations, they are a way to handle the result of an asynchronous operation

const myPromise = new Promise((resolve, reject) => {
    // do stuff
    const stuff = true;
    if (stuff) {
        resolve('stuff worked');
    } else {
        reject('error, it broke');
    }
});
console.log(myPromise);
console.clear();

const myNextPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('myNextPromise resolved');
    }, 3000) // this is an asynchronous operation
})

// we need to use .then() to handle the result of the promise
myNextPromise.then(result => console.log(result));
console.log('executed first because the promise is asynchronous');

myPromise
    .then(result => result + '<>')
    .then(result2 => result2 + '?')
    .catch(err => console.error('something went wrong: ', err))
    .then(result3 => {
        console.log(result3 + '!');
    });


// fetch api returns a promise, we dont need to create a new promise like above
async function getTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
}

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err.message));

// const users = fetch('https://jsonplaceholder.typicode.com/users');

// <pending>
// console.log(users);

fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    return response.json();
}).then(data => {
    console.log('data: ', data);
})




// Here Im showing two different ways of constructing an async function
// Method 1:
async function myFunction() {}
// Method 2:
const myOtherFunction = async () => {}


const myUsers = {
    userList: []
}

const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users'); // we need to await since this fetch() returns a promise
    const data = await response.json(); // we need to await since this .json() returns a promise
    return data;
}
const logUsers = async () => {
    const users = await getUsers();
    myUsers.userList = users;
    console.log(myUsers);
}

logUsers()
console.log(myUsers.userList);



// Workflow function
// 2nd parameter of fetch() is an object that contains the method, body and headers
const getAllUserEmails = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }); // we need to await since this fetch() returns a promise
    const data = await response.json(); // we need to await since this .json() returns a promise

    const emailsArray = data.map(user => user.email);

    postToWebpage(emailsArray);
}

const postToWebpage = (emails) => {
    console.log('posting to webpage: ', emails);
    // console.log(emails);
}

getAllUserEmails();

// const postToWebsite = async (emails) => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify(emails),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     });
//     const data = await response.json();
//     console.log(data);
// }

const getDadJoke = async () => {
    const response = await fetch('https://icanhazdadjoke.com/search?limit=2', {
        headers: {
            'Accept': 'application/json' // tell the api what type of data we want back
            // 'Accept': 'text/plain'
        },
        method: 'GET',
        // parameters: {
        //     'limit': 25,
        //     'term': 'cat'
        // }
    });
    const data = await response.json();
    // const data = await response.text();
    console.log(data.results.length);
    return data;
}

getDadJoke();

// Sending data to an api
const jokeObject = {
    id: 'CAlG6MRnWnb',
    joke: 'I just got fired from a florist, apparently I took too many leaves.',
}

const postJoke = async (joke) => {
    const response = await fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(joke),
        headers: {
            'Content-type': 'application/json; charset=UTF-8', // tell the api what type of data we are sending
        },
    });
    const data = await response.json();
    console.log(data);
}

postJoke(jokeObject);



console.log('end of file');

//syntactic-sugar