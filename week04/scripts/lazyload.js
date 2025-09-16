// creating a script for the footer
function updateFooter() {
    // this line of code selects the footer element from the HTML document
    const footer = document.querySelector(`footer`);
    // this line of code gets the current year and assigns it to the variable 'year'
    const year = new Date().getFullYear();
    // line of code that shows last modified/edited
    const lastModified = document.lastModified;

    footer.innerHTML = `
        <p>&copy; ${year} 🚀 Osigwe Uchechukwu Davidcaleb 🚀</p>
        <p>Lazy Load Image | Last Modified ${lastModified}</p>
    `;
}

// to initialize it on pageload

document.addEventListener('DOMContentLoaded', () => {
    updateFooter();
});




