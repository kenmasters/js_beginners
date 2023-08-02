/**
 * JSON
 * JavaScript Object Notation
 */

/**
 * Errors in JavaScript
 * 1. SyntaxError
 * 2. ReferenceError
 * 3. TypeError
 * 4. RangeError
 * 5. URIError
 * 6. EvalError
 * 7. InternalError
 * 8. Error
 * 9. AggregateError
 * 10. DOMException
 * 11. AbortError
 * 12. EventException
 * 13. DOMError
 * 14. DOMException
 */

'use strict'

const Person = {
    name: 'Ken John Siosan',
    greet: function () {

    }
}

const sendJson = JSON.stringify(Person) // converts json object to string
const receiveJson = JSON.parse(sendJson) // converts string to json object

console.log(Person)
console.log(typeof Person)
console.log(typeof sendJson)
console.log(typeof receiveJson)


// variable = "myVariableValue" // without `use strict` this will actually work, but with `use strict` this will throw ReferenceError
// console.log(variable) // this will work


let variable = "myVariableValue"
console.log(variable) // this will work

console.warn('===================Custom Error===================')
// create a custom error
class CustomError extends Error {
    constructor(message) {
        super(message)
        this.name = 'CustomError'
    }
}

const makeCustomError = () => {
    throw new CustomError('This is a custom error')
}

try {
    makeCustomError()
}
catch (error) {
    console.log(error)
}
finally {
    console.log('This is the finally block')
}
console.warn('================================================')


const makeError = () => {
    throw new Error('This is an error')
}

try {
    makeError()
}
catch (error) {
    console.log(error)
}
finally {
    console.log('This is the finally block')
}


const makeError2 = () => {
    try {
        const error = new Error('This is an error')
        error = 'This is an error' // this will throw TypeError
    } catch (error) {
        throw new Error('This is an error')
    }
}

makeError2()