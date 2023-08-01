/**
 * functions provide reusable code
 */

// function declaration

// Anonymous functions
const getUserNameFromEmailVariation1 = function (email) {
    return email.indexOf('@') > -1 ? email.split('@')[0] : email
}

// Arrow function
const getUserNameFromEmailVariation3 = (email) => {
    return email.indexOf('@') > -1 ? email.split('@')[0] : email
}

// Common function
function getUserNameFromEmailVariation2 (email) {
    return email.slice(0, email.indexOf('@'))
}

console.log(getUserNameFromEmailVariation1('kjsiosan@gmail.com'))
console.log(getUserNameFromEmailVariation2('kjsiosan@gmail.com'))
console.log(getUserNameFromEmailVariation3('kjsiosan@gmail.com'))

console.error('Scope var, let, and const')
/**
 * Understanding scope
 * global = Not in a function or block. Not desirable
 * local = In a function or block. Not global
 * var --- instantiates function() scoped variables
 * let and  const --- instantiates {block}-scoped variables
 * const --- value cannot be reassigned
 *
 * TIPS:
 *      Avoid using var. Stick with const and let
 *      Use const unless you need to reassign values
 *      Use let if you know you will reassign values
 */
const name = 'Ken'
// name = 'Ken'
// console.log(name)


// global scope
var a = 1
let b = 1
const c = 1

// local scope
{
    let y = 1
}

// local scope inside a function
function myFunc () {
    const z = 1
    // console.log(`z: ${z}`)

    {
        let q = 2
        console.log(`c: ${c}`)
        console.log(`z: ${z}`)
        console.log(`q: ${q}`)
        // console.log(`y: ${y}`) // this will be undefined on this block
    }
}

myFunc()
