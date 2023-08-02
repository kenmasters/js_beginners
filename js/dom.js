// DOM - Document Object Model

// selecting elements by id
const view1 = document.getElementById('view1');
const view2 = document.getElementById('view2');
const view3 = document.querySelector('#view2');
console.log(view1);
console.log(view2);
// console.log(view3); // same with view2 just a different way of selecting

const views = document.getElementsByClassName('view'); // returns an array of elements or HTMLCollection
console.log(views);
const sameViews = document.querySelectorAll('.view'); // this returns a NodeList, a more modern way of selecting elements
// NodeList is more powerful than HTMLCollection.
console.log(sameViews);

view1.style.backgroundColor = 'red';
view2.style.backgroundColor = 'blue';


const divs = view1.querySelectorAll('div');
console.log(divs);

const sameDivs = view1.getElementsByTagName('div');
console.log(sameDivs);

// select the even divs
const evenDivs = view1.querySelectorAll('div:nth-child(even)');
console.log(evenDivs);

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = 'yellow';
}

const headerText = document.querySelector('header h1');
console.log(headerText.textContent);
headerText.textContent = 'New Header Text';
console.log(headerText.textContent);


const createElement = (parent, iter) => {
    const newDiv = document.createElement('div');
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = 'green';
    newDiv.style.color = 'white';
    newDiv.style.width = '100px';
    // newDiv.style.fontSize = '2rem';
    // newDiv.style.padding = '1rem';
    // newDiv.style.margin = '1rem';
    // newDiv.style.borderRadius = '1rem';
    // newDiv.style.textAlign = 'center';
    // newDiv.style.fontFamily = 'sans-serif';
    // newDiv.style.fontWeight = 'bold';
    // newDiv.style.textTransform = 'uppercase';
    parent.appendChild(newDiv);
}
// adding new elements

for (let i = 1; i <= 10; i++) {
    createElement(view1, i);
}
