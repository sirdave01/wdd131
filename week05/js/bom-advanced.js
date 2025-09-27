// learning to manipulate the BOM using JavaScript.

// declare three(3) variables that hold
// references to the input, button, and list elements.

// use the id attribute to select the input element
let input = document.querySelector('#favchap');

// use the element tag name to select the button element
let button = document.querySelector('button');

// use the id attribute to select the list element
let list = document.querySelector('#list');

//declaring another array varibale named chaptersArray
//and assign to it getChapterList function

let chaptersArray = getChapterList() || [];

//now display the list of chapters into the array using
//FOREACH loop to process entry into the array named chapter

chaptersArray.forEach(chapter => {
    displayList(chapter)
});

// create an li element that will hold each chapter title
// and an associated delete button

// first step construct the li element to hold the chapter title
let li = document.createElement('li');

//create a delete button
let deleteBtn = document.createElement('button');

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
    if (input.value != '') {
        //call the display list with input.value argument
        displayList(input.value);//this function displays the output

        //push the input.value into the chaptersArray
        chaptersArray.push(input.value); // this adds chapters into the chapters array

        // Update the localStorage with the new array by calling a function named setChapterList

        setChapterList(); //updates the localStorage with the new array

        //set the input.value to nothing

        input.value = ''; //clears the input

        //set the focus back to the input

        input.focus();
    }
});

function displayList(item) {

    // create an li element that will hold each chapter title
    // and an associated delete button

    // first step construct the li element to hold the chapter title
    let li = document.createElement('li');

    //create a delete button
    let deleteBtn = document.createElement('button');

    // Populate the li element variable's textContent
    // or innerHTML with the item parameter.

    li.textContent = item; //using the parameter item

    // Populate the button textContent with a ❌
    deleteBtn.textContent = '❌';

    //adding deletebutton with reference to the css rule for the button class

    deleteBtn.classList.add('delete');

    // Append the li element variable with the delete button.
    li.append(deleteBtn);

    // Append the li element variable to the unordered list in your HTML
    list.append(li);

    // Add an event listener to the delete button that removes the li element when clicked
    deleteBtn.addEventListener('click', function () {

        list.removeChild(li);

        //add a new delete button rule to delete/remove 
        // chapters from the array and the localStorage

        deleteChapter(li.textContent);

        //set the focus back to the input elememnt
        input.focus();
    });

    console.log(`I don't copy codes, I write them myself and try to understand them 🤣`)
}



