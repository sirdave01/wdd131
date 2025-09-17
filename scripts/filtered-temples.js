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

//populating the HTML figure area with Javascript and make them dynamically responsive
//populating the Image via JavaScript for the temples

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },

    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    // Add more temple objects here...

    {
        templeName: "Abidjan Ivory Coast",
        location: "Abidjan, Ivory Coast",
        dedicated: "25 May 2025",
        area: 17362,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/abidjan-ivory-coast-temple/abidjan-ivory-coast-temple-58993-main.jpg"
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "11 January 2004",
        area: 17500,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
    },

    {
        templeName: "Apia Samoa",
        location: "Apia, Samoa",
        dedicated: "4 September 2005",
        area: 18691,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg"
    },

    {
        templeName: "Bangkok Thailand",
        location: "Bangkok, Thailand",
        dedicated: "22 October 2023",
        area: 48525,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-40037-main.jpg"
    },

    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "27-30 June 2002",
        area: 54000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
    },


];

// Parse dedication year for filtering
function parseDedicationYear(dedicated) {
    const dateParts = dedicated.replace(/[,–-]/g, " ").trim().split(/\s+/);
    const year = dateParts.find(part => /^\d{4}$/.test(part));
    return year ? parseInt(year) : NaN;
}

// looping through the array of temples to do the following:
// The name of the temple.,
// The location of the temple.,
// The date the temple was dedicated.,
// The total area of the temple in square feet.,
// The provided image of the temple (an absolute address),
// making sure to include an appropriate alt value such as the name of the temple.,
// Use native lazy loading for each temple image.

//create Templecard function

createTempleCard(temples);

// Create temple cards and update title

function createTempleCard(filteredTemples, filterName) {
    const gallery = document.querySelector(".gallery");
    const title = document.querySelector(".title");
    gallery.innerHTML = "";
    title.textContent = filterName;

    filteredTemples.forEach((temple) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        let p3 = document.createElement("p");
        let img = document.createElement("img");
        let hr = document.createElement("hr");

        h2.textContent = temple.templeName;
        p1.textContent = `Location: ${temple.location}`;
        p2.textContent = `Dedicated: ${temple.dedicated}`;
        p3.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `Image of ${temple.templeName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");
        img.classList.add("lazy-load"); // Class for animation

        card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(img);
        card.appendChild(hr);

        gallery.appendChild(card);
    });

    // Set up Intersection Observer for lazy-load animations
    const images = document.querySelectorAll(".gallery img.lazy-load");
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of image is visible
    });

    images.forEach(image => observer.observe(image));

}

// Respond to the main navigation menu items by filtering and displaying the temples as follows:
// Old – temples built before 1900
// New – temples built after 2000
// Large – temples larger than 90,000 square feet
// Small – temples smaller than 10,000 square feet
// Home – displays all the temples stored in the array.

// Navigation links
const links = {
    home: document.querySelector("#home"),
    old: document.querySelector("#old"),
    new: document.querySelector("#new"),
    large: document.querySelector("#large"),
    small: document.querySelector("#small")
};

// Reset link styles
function resetLinkStyles() {
    Object.values(links).forEach(link => link.classList.remove("active"));
}

// Event listeners for navigation links
links.home.addEventListener("click", (e) => {
    e.preventDefault();
    resetLinkStyles();
    links.home.classList.add("active");
    createTempleCard(temples, "Home");
});

links.old.addEventListener("click", (e) => {
    e.preventDefault();
    resetLinkStyles();
    links.old.classList.add("active");
    const oldTemples = temples.filter((temple) => {
        const dedicatedYear = parseDedicationYear(temple.dedicated);
        return dedicatedYear < 1900;
    });
    createTempleCard(oldTemples, "Old Temples (Before 1900)");
});

links.new.addEventListener("click", (e) => {
    e.preventDefault();
    resetLinkStyles();
    links.new.classList.add("active");
    const newTemples = temples.filter((temple) => {
        const dedicatedYear = parseDedicationYear(temple.dedicated);
        return dedicatedYear > 2000;
    });
    createTempleCard(newTemples, "New Temples (After 2000)");
});

links.large.addEventListener("click", (e) => {
    e.preventDefault();
    resetLinkStyles();
    links.large.classList.add("active");
    const largeTemples = temples.filter((temple) => temple.area > 90000);
    createTempleCard(largeTemples, "Large Temples (> 90,000 sq ft)");
});

links.small.addEventListener("click", (e) => {
    e.preventDefault();
    resetLinkStyles();
    links.small.classList.add("active");
    const smallTemples = temples.filter((temple) => temple.area < 10000);
    createTempleCard(smallTemples, "Small Temples (< 10,000 sq ft)");
});

//create Templecard function

createTempleCard(temples, "Home");