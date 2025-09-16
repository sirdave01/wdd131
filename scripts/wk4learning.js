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
    document.getElementById('course-name').textContent = course.title;
    document.getElementById('course-number').textContent = course.code;
    document.getElementById('course-credits').textContent = course.credits;
    document.getElementById('course-section-1').textContent = course.sections[0].section;
    document.getElementById('course-instructor-1').textContent = course.sections[0].instructor;
    document.getElementById('course-enrolled-1').textContent = course.sections[0].enrolled;
    document.getElementById('course-section-2').textContent = course.sections[1].section;
    document.getElementById('course-instructor-2').textContent = course.sections[1].instructor;
    document.getElementById('course-enrolled-2').textContent = course.sections[1].enrolled;
}

// Create another function that will output the sections into a table with an id of sections-table.

function displaySections(course) {
    let table = document.getElementById('sections-table');
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
