// writing a script code to dynamically populate the footer area of all the webpages

//for the current year
let theYearElement = document.querySelector(`#year`);
let theYear = new Date().getFullYear();

theYearElement.textContent = theYear

// for the last modified

let timeModifiedElement = document.querySelector(`#modified`);
let modifiedDate = document.lastModified;

timeModifiedElement.textContent = `Last Modified: ${modifiedDate}`;