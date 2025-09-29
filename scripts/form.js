//creating a responsive hamburger menu for small screens

let hamButton = document.querySelector(`.menu`);
let navigation = document.querySelector(`.navigation`);

//add a click event listener for responsiveness

hamButton.addEventListener(`click`, () => {
    navigation.classList.toggle(`open`);
    hamButton.classList.toggle(`open`);
});



//creating a product array that'll dynamically populate the products area

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },

    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },

    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },

    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },

    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    },

    {
        id: `sh-2015`,
        name: `Dell core i5`,
        averagerating: 4.8
    },

    {
        id: `to-2010`,
        name: `Toyota Highlander`,
        averagerating: 4.9
    }

];

//populating the arrays into the product select id/container
let select = document.querySelector(`#productSelect`);

//looping throught the products to correctly append them in their designated containers

products.forEach(product => {
    //create the option for the products
    let option = document.createElement(`option`);
    //populate the option value to the product name with option.value and product.name
    option.value = product.name;
    //manipulate the created option element to take up position in the product in HTML with .textcontent
    option.textContent = product.name;
    //append the option into the select element/container
    select.appendChild(option);
});


// dynamically populate the footer of the HTML with current currentYear, last modified and time

let currentYearElement = document.querySelector(`#currentYear`);
let currentYear = new Date().getFullYear();

// populate it into the HTML footer with .textContent

currentYearElement.textContent = currentYear

// getting the last modifed time and date

let lastModifiedElement = document.querySelector(`#lastModified`);
let lastModifiedDate = document.lastModified;

//populate the last modified element into the HTML with .textcontent

lastModifiedElement.textContent = `Last Modified ${lastModifiedDate}`;