//get the date of the webpage creation and last modified date and use it to populate the footer
//get the current year and override it into the html file on the footer

const currentYearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

// input the current year into the html text content

currentYearElement.textContent = currentYear

// get the last modified date to input the last date the website was modified
const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;

//hamburger menu
// creating script for the hamburger menu for small screen

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});
