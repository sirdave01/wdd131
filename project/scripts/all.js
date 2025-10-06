//creating the donation as a Global variable

let donations = []; //global array for donation history

//creating a helper function (load and save) for donation (get and set) with arrays, objects and localStorage

function loadDonations() {

    const stored = localStorage.getItem(`donations`);

    if (stored) {

        try {

            donations = JSON.parse(stored); //conditional + objects/arrays

        } catch (e) {

            console.error(`Error loading donations:`, e);

            donations = [];
        }
    }
}

function saveDonations() {
    localStorage.setItem(`donations`, JSON.stringify(donations));
}


// dynamically creating the header nav elements to be unique across all pages as a Global variable

//mark the active nav element/tag
const currentPage = window.location.pathname.split(`/`).pop() || `index.html`;
const pageName = currentPage.replace(`.html`, ``);

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

const hamburger = document.querySelector(`.menu`);
const navigate = document.querySelector(`.navigation`);

hamburger.addEventListener(`click`, () => {
    navigate.classList.toggle(`open`);
    hamburger.classList.toggle(`open`);
});



// writing a script code to dynamically populate the footer area of all the webpages

document.addEventListener(`DOMContentLoaded`, function () {

    //for the current year
    const theYearElement = document.querySelector(`#year`);

    if (theYearElement) {
        theYearElement.textContent = new Date().getFullYear();
    }


    // for the last modified

    const timeModifiedElement = document.querySelector(`#modified`);
    if (timeModifiedElement) {
        timeModifiedElement.textContent = `Last Modified: ${new Date().toLocaleString()}`
    }

});

// populating the donation page with script to dynamically work on the form and donation page

if (window.location.pathname.endsWith(`donation.html`)) {
    window.addEventListener(`load`, function () {
        const form = this.document.querySelector(`#donation-form`);

        if (!form) return;

        form.addEventListener(`submit`, function (event) {
            event.preventDefault();

            //validation (conditional branching and checking radio selection)

            const fullName = document.querySelector(`#fullName`).value.trim();
            const amount = parseFloat(document.querySelector(`#amount`).value);
            const selectedCardType = document.querySelector(`input[name="card-type"]:checked`);
            const cardType = selectedCardType ? selectedCardType.value : ``;
            const cardNumber = document.querySelector(`#card-number`).value.replace(/\s/g, ``);
            const expiry = document.querySelector(`#expiry`).value;
            const cvv = document.querySelector(`#cvv`).value;

            // check if the informations are entered correctly using an if statement condition

            if (!fullName || amount <= 0 || !cardType || cardNumber.length !== 16 || !expiry || cvv.length !== 3) {
                alert(`Please fill all fields correctly (select one card type, e.g., Visa).`);
                return;
            }

            // popup confirmation including the card type saved in confirmMsg variable

            const confirmMsg = `Confirm $${amount} donation with ${cardType.toUpperCase()} card, ${fullName}? (Demo)`;

            // checking if the user confirms the donation with an if statement conditions

            if (confirm(confirmMsg)) {
                // Save donation (objects, arrays, localStorage - add cardType)
                loadDonations();
                donations.push({
                    fullName,
                    amount,
                    cardType,
                    cardNumber: cardNumber.subString(0, 4) + `**** **** ****` + cardNumber.slice(-4),
                    date: new Date().toISOString()
                });

                saveDonations();

                window.location.href(`thanks.html`) //redirect to thanks page
            }

        });
    });
}
