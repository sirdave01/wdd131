// Weather functionality
const temperature = 32; // °F
const windSpeed = 10; // mph
const conditions = "Sunny"; // Static, as no API data provided

function calculateWindChill(temp, speed) {
    return (35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16))).toFixed(1);
}

function displayWeather() {
    const tempElement = document.querySelector('.weather .data-list li:nth-child(1) span:last-child');
    const conditionsElement = document.querySelector('.weather .data-list li:nth-child(2) span:last-child');
    const windElement = document.querySelector('.weather .data-list li:nth-child(3) span:last-child');
    const windChillElement = document.querySelector('.weather .data-list li:nth-child(4) span:last-child');

    tempElement.textContent = `${temperature} °F`;
    conditionsElement.textContent = conditions;
    windElement.textContent = `${windSpeed} mph`;

    if (temperature <= 50 && windSpeed > 3) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °F`;
    } else {
        windChillElement.textContent = 'N/A';
    }
}

// get the date of the webpage creation and last modified date and use it to populate the footer
// get the current year and override it into the html file on the footer

function updateFooter() {
    const currentYearElement = document.querySelector("#currentyear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
    const lastModifiedElement = document.querySelector("#lastModified");
    const lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = `Last Modified: ${lastModifiedDate}`;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    displayWeather();
    updateFooter();
});