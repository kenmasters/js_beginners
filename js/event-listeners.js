// JavaScript Event Listeners
// 1. Event listeners are used to trigger a function when a user interacts with a specific element.
// 2. Event listeners are created using the addEventListener() method.
// 3. The addEventListener() method takes two arguments: the event type and the function to be executed when the event is triggered.
// 4. The addEventListener() method can be used to add multiple event listeners to the same element.
// 5. The removeEventListener() method is used to remove an event listener that has been created with the addEventListener() method.

// Example 1
// The addEventListener() method is used to add an event listener to an element.
// The first argument is the event type, and the second argument is the function that should be executed when the event is triggered.
// The following example adds an event listener to a <button> element. The event listener triggers a function that changes the text of the <button> element to "Clicked!" when the user clicks on the <button> element.

// Syntax
// element.addEventListener(event, function, useCapture);

document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has been loaded!");
});
// add event listener to the document object ready event
// the DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState is complete!");
        initApplication();
    }
});
// add event listener to the document object ready state change event
// the readystatechange event fires when the readyState attribute of a document has changed.

const initApplication = () => {
    const myButton = document.getElementById("myButton");
    const clickMe = 'Click Me';
    const clicked = 'Clicked!';
    myButton.addEventListener("click", (event) => {
        console.log(event.target);
        console.log(event);
        let currentButtonText = myButton.textContent;
        myButton.textContent = currentButtonText !== clicked ? clicked : clickMe;
    });

    const myForm = document.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let query = event.target.querySelector("#query").value;
        console.log(event.target);
        console.log(query);
    });
}





