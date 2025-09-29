//creating a responsive hamburger menu for small screens

let hamButton = document.querySelector(`.menu`);
let navigation = document.querySelector(`.navigation`);

//add a click event listener for responsiveness

hamButton.addEventListener(`click`, () => {
    navigation.classList.toggle(`open`);
    hamButton.classList.toggle(`open`);
});


document.addEventListener('DOMContentLoaded', () => {
    // Initialize DOM elements
    const visitsDisplay = document.querySelector('#visits');
    const currentYear = document.querySelector('#currentYear');
    const lastModified = document.querySelector('#lastModified');

    // Check if elements exist to avoid null errors
    if (!visitsDisplay || !currentYear || !lastModified) {
        console.error('One or more DOM elements not found. Check IDs: visits, currentYear, lastModified');
        return;
    }

    // Set the current year
    currentYear.textContent = new Date().getFullYear();

    // Set the last modified date
    lastModified.textContent = `Last Modified: ${document.lastModified}`;

    // Get the stored number of visits from localStorage
    let numVisits = Number(localStorage.getItem('numVisits-ls')) || 0;

    // Display the number of visits or a welcome message
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = 'This is your first visit. Welcome! 💕';
    }

    // Increment the number of visits
    numVisits++;

    // Display the visit count in the format "You have visited the page X times"
    visitsDisplay.textContent = `You have visited the page ${numVisits} ${numVisits === 1 ? 'time' : 'times'}`;

    // Store the new visit total in localStorage
    try {
        localStorage.setItem('numVisits-ls', numVisits);
    } catch (e) {
        console.error('Error accessing localStorage:', e);
    }
});