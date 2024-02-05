// Asynchronous code with promise

console.log('First');

const promise = fetch('https://course-api.com/react-useReducer-cart-project');
promise.then((value) => value.json().then((data) => console.log(data)));

console.log('Second');

// Executed as follows

// Output is
// First
// Third
// data from api           --  after the data is fetched from api
