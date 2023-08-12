// web storage api

// not part of the dom - refers to the window api
// local storage and session storage
// available to js via the global `window` object

// we do not have to type `window` because it is implied

// local storage
// persists after the browser is closed
// session storage
// persists only during the session

// both are key value stores
// both are synchronous
// both are limited to 5mb

// local storage
// localStorage.setItem('name', 'value');
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear(); // removes all items

// session storage
// sessionStorage.setItem('name', 'value');
// sessionStorage.getItem('name');
// sessionStorage.removeItem('name');
// sessionStorage.clear(); // removes all items

// both have the same api
// both have the same methods
// both have the same properties

// template literals ( `${}` ) - backticks `` - ES6 - ECMAScript 2015 - ES2015
const myString = `this is a string`;
const myString2 = `this is a string with a ${myString}`;

console.log('sessionStorage: ', sessionStorage);
console.log('localStorage: ', localStorage);
console.log('window: ', window)

const myArray = [1, 2, 3, 4, 5];
const myObject = {
    name: 'Ken',
    hobbies: ['coding', 'hiking', 'riding'],
    logname: function() {
        console.log(this.name);
    }
}


console.time('timer')

// some code to measure here

console.timeEnd('timer')
myObject.logname();

sessionStorage.setItem('mySessionStorage', JSON.stringify(myObject));
localStorage.setItem('myLocalStorage', JSON.stringify(myArray));


// const myObjectFromSessionStorage = JSON.parse(sessionStorage.getItem('myObject'));






