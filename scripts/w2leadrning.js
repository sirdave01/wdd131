const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// write some loops to iterate over the array and print the following to the console:

// 1. Write a for loop that will iterate through the studentReport array
// and print to the console the current array value if it is below 30.

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}




// 2. Repeat the previous programming snippet by using a while loop.

let j = 0;
while (j < studentReport.length) {
    if (studentReport[j] < 30) {
        console.log(studentReport[j]);
    }
    j++;
}



// 3. Repeat the previous programming snippet by using a forEach loop

studentReport.forEach(function (score) {
    if (score < 30) {
        console.log(score);
    }
});


// 4. Repeat the previous programming snippet by using a for...in loop.

for (let index in studentReport) {
    if (studentReport[index] < 30) {
        console.log(studentReport[index]);
    }
}



// 5. Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.)
// of the next number of DAYS from today's date.

let today = new Date();
let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
for (let k = 0; k < DAYS; k++) {
    let futureDay = new Date();
    futureDay.setDate(today.getDate() + k);
    console.log(dayNames[futureDay.getDay()]);
}

//creating some dom events like click, addEventListener, mouseover, mouseout, change, keyup, keydown

//creating a button and adding a click event listener to it
const button = document.createElement('button');
button.innerHTML = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', function () {
    alert('Button Clicked!');
});
//creating a div and adding mouseover and mouseout event listeners to it
const div = document.createElement('div');
div.innerHTML = 'Hover over me';
div.style.width = '200px';
div.style.height = '100px';
div.style.backgroundColor = 'lightblue';
document.body.appendChild(div);
div.addEventListener('mouseover', function () {
    div.style.backgroundColor = 'lightgreen';
});
div.addEventListener('mouseout', function () {
    div.style.backgroundColor = 'lightblue';
});
//creating an input field and adding keyup and keydown event listeners to it
const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Type something...';
document.body.appendChild(input);
input.addEventListener('keydown', function (event) {
    console.log(`Key Down: ${event.key}`);
});
input.addEventListener('keyup', function (event) {
    console.log(`Key Up: ${event.key}`);
});
//creating a select dropdown and adding a change event listener to it
const select = document.createElement('select');
const option1 = document.createElement('option');
option1.value = 'option1';
option1.text = 'Option 1';
const option2 = document.createElement('option');
option2.value = 'option2';
option2.text = 'Option 2';
select.appendChild(option1);
select.appendChild(option2);
document.body.appendChild(select);
select.addEventListener('change', function () {
    console.log(`Selected: ${select.value}`);
});

