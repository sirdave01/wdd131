// get the current year and override it into the html file on the footer

const currentYearElement = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();

// input the current year into the html text content

currentYearElement.textContent = currentYear

// get the last modified date to input the last date the website was modified
const lastModifiedElement = document.querySelector("#lastModified");
const lastModifiedDate = document.lastModified;
lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;

//check if the script is running on the console.log
console.log("getdates.js script has run successfully!");