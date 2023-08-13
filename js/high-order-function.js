
// A higher-order function is a function that takes another function as an argument or returns another function as a result.

// A higher order function is a function that does atleast one of the following:
// 1. Takes one or more functions as arguments
// 2. Returns a function as its result


import posts  from './posts.js';

posts.forEach(post => {
    console.log(post);
});
console.clear();

const postsTitle = posts.map(post => post.title); // map() returns a new array
console.log(postsTitle);

const postFiltered = posts.filter(post => post.title.includes('2')); // filter() returns a new array
console.log('postFiltered: ', postFiltered);

const filteredPosts = posts.filter(post => post.title === 'The Final Post'); // filter() returns a new array
console.log('filteredPosts: ', filteredPosts);

const postsFromUser = (userid) => posts.filter(post => post.userId === userid); // filter() returns a new array
console.log('postsFromUser: ', postsFromUser(1));

const post = posts.find(post => post.title === 'The Final Post'); // find() returns the first item that matches the condition
console.log('post: ', post);

const reducedPosts = posts.reduce((acc, post) => {
    if (post.userId === 1) {
        acc.push(post);
    }
    return acc;
}, []); // reduce() returns a new array

console.log('typeof reducedPosts: ', typeof reducedPosts);
console.log('reducedPosts: ', reducedPosts);

const postIds = posts.map(post => post.id); // creates a new array of post ids
const sumOfPostId = postIds.reduce((accumulator, post) => accumulator + post, 0);
console.log('sumOfPostId: ', sumOfPostId);

