// write a function declaration/definition named "fullname" that take two parameters: first and last

function fullName(first, last) {
    return `${first} ${last}`;
}

// Use an anonymous function expression to do the same thing
// where the function is assigned to a variable named fullName.

let fullName = function (first, last) {
    return `${first} ${last}`;
}

// Use an arrow function expression to do the same
// thing where the function is assigned to a variable named fullName

let fullName = (first, last) => `${first} ${last}`;

// Call the function and pass in your first and last name
// Store the return value in a variable named "name"
let name = fullName("Uchechukwu", "DavidCaleb");

// Log the value of the variable "name" to the console
console.log(name);