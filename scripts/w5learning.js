// The fetchData function simulates fetching data from a server by using the setTimeout function to create a 2-second delay.
// After the delay, it calls the provided callback function, passing the string
// 'Data has been fetched' as an argument. In this context,
// the processData function is passed as the callback to fetchData,
// and it logs the received data to the console when called.

// A common use of a callback functions in JavaScript is for asynchronous operations,
// such as handling events or making asyncchronous requests.
// Here is a simulated example:

function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 2000); // This simulates a 2-second delay from a service.
}

// function that processes the data
function processData(data) {
    console.log("Data received:", data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData);

