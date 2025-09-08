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
