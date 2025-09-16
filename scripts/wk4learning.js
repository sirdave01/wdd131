// learning how to write Object literals in Javascript

let aCourse = {
    code: 'WDD131',
    title: 'Web Development and Design I',
    credits: 3,

    //  add a sections property to the object. Since the course may have more than one section,
    // make this sections an array of at least two (2) objects with the following properties:
    // section
    // enrolled
    // instructor
    sections: [{
        section: `001`, enrolled: 25, instructor: `Osigwe Uchechukwu Davidcaleb`
    },
    {
        section: `002`, enrolled: 30, instructor: `Jane Doe`
    }]
};

// Create a function to set the name and number of the course in HTML.Pass the course object into your function.
// Use dot notation to access the parts of the object that you need.

function displayCourse(course) {
    document.querySelector('course-name').textContent = course.title;
    document.querySelector('course-number').textContent = course.code;
    document.querySelector('course-credits').textContent = course.credits;
    document.querySelector('course-section-1').textContent = course.sections[0].section;
    document.querySelector('course-instructor-1').textContent = course.sections[0].instructor;
    document.querySelector('course-enrolled-1').textContent = course.sections[0].enrolled;
    document.querySelector('course-section-2').textContent = course.sections[1].section;
    document.querySelector('course-instructor-2').textContent = course.sections[1].instructor;
    document.querySelector('course-enrolled-2').textContent = course.sections[1].enrolled;
}

// Create another function that will output the sections into a table with an id of sections-table.

function displaySections(course) {
    let table = document.querySelector('sections-table');
    course.sections.forEach(section => {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.textContent = section.section;
        cell2.textContent = section.instructor;
        cell3.textContent = section.enrolled;
    });
}

// Create rows in an existing HTML table with an id of sections for each existing section
// This code separates the rendering using a map function from the template that builds a row.

function renderSectionRow(section) {
    return `
        <tr>
            <td>${section.section}</td>
            <td>${section.instructor}</td>
            <td>${section.enrolled}</td>
        </tr>
    `;
}
function displaySectionsWithTemplate(course) {
    let table = document.querySelector('sections-table');
    table.innerHTML = course.sections.map(renderSectionRow).join('');
}
// to initialize it on pageload

document.addEventListener('DOMContentLoaded', () => {
    displayCourse(aCourse);
    displaySections(aCourse);
    displaySectionsWithTemplate(aCourse);
});
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
        <p>Object Literals | Last Modified ${lastModified}</p>
    `;
}