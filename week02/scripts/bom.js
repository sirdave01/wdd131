// learning to manipulate the BOM using JavaScript.


// declare three(3) variables that hold
// references to the input, button, and list elements.

// use the id attribute to select the input element
const input = document.querySelector('#favchap');

// use the element tag name to select the button element
const button = document.querySelector('button');

// use the id attribute to select the list element
const list = document.querySelector('#list');


// create an li element that will hold each chapter title
// and an associated delete button

// first step construct the li element to hold the chapter title
const li = document.createElement('li');

//create a delete button
const deleteBtn = document.createElement('button');

// Populate the li element variable's textContent
// or innerHTML with the input value.
li.textContent = input.value;

// Append the li element variable to the unordered list in your HTML
list.append(li);

//create a click event listener for the add chapter button and
// copy the codes above into the event listener function

button.addEventListener('click', function () {
    // Check to make sure the input is not blank before completing the remaining tasks in this list
    // by using an if block that provides a message or does nothing and returns the .focus() to the input field.
    if (input.value.trim() !== '') {// use the id attribute to select the input element
        const input = document.querySelector('#favchap');

        // use the element tag name to select the button element
        const button = document.querySelector('button');
        
        // use the id attribute to select the list element
        const list = document.querySelector('#list');


        // create an li element that will hold each chapter title
        // and an associated delete button

        // first step construct the li element to hold the chapter title
        const li = document.createElement('li');

        //create a delete button
        const deleteBtn = document.createElement('button');

        // Populate the li element variable's textContent
        // or innerHTML with the input value.
        li.textContent = input.value;

        // Populate the button textContent with a ❌
        deleteBtn.textContent = '❌';

        // Append the li element variable with the delete button.
        li.append(deleteBtn);

        //adding an aria-label to the delete button for accessibility
        deleteBtn.ariaLabel = `Delete ${input.value}`;
        console.log(deleteBtn);

        // Append the li element variable to the unordered list in your HTML
        list.append(li);
        // Add an event listener to the delete button that removes the li element when clicked
        deleteBtn.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        // Change the input value to nothing or the empty string to clean up the interface for the user
        input.value = '';
        // return the focus to the input element so the user can add another chapter title
        input.focus();
    }

});