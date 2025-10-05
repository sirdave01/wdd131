// dynamically creating the header nav elements to be unique across all pages

//mark the active nav element/tag
let currentPage = window.location.pathname.split(`/`).pop() || `index.html`;
let pageName = currentPage.replace(`.html`, ``);

//finding the nav elements that is active with if statements

let activeLink;

if (pageName === `index`) {

    activeLink = document.querySelector(`nav a[href="#"]`);

} else {

    activeLink = document.querySelector(`nav a[href="${currentPage}"]`);

}

// adding active class if the page exists
if (activeLink) {
    activeLink.classList.add(`active`);
} else {
    console.warn(`No nav link found for ${currentPage}`)
}

// hamburgerMenu design

let hamburger = document.querySelector(`.menu`);
let navigate = document.querySelector(`.navigation`);

hamburger.addEventListener(`click`, () => {
    navigate.classList.toggle(`open`);
    hamburger.classList.toggle(`open`);
});



// writing a script code to dynamically populate the footer area of all the webpages

document.addEventListener(`DOMContentLoaded`, function () {

    //for the current year
    let theYearElement = document.querySelector(`#year`);

    if (theYearElement) {
        theYearElement.textContent = new Date().getFullYear();
    }


    // for the last modified

    let timeModifiedElement = document.querySelector(`#modified`);
    if (timeModifiedElement) {
        timeModifiedElement.textContent = `Last Modified: ${new Date().toLocaleString()}`
    }

});

