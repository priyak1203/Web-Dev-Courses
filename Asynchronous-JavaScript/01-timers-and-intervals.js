// Timeouts and Intervals

function greet() {
  console.log('Hello');
}

setTimeout(greet, 2000);

function greetWithName(name) {
  console.log(`Hello, ${name}`);
}

setTimeout(greetWithName, 2000, 'John Doe');

const timeoutId = setTimeout(greet, 1000);
clearTimeout(timeoutId);

// ================================================================================ //

function displayName() {
  console.log('My name is Peter');
}

setInterval(displayName, 2000);

function displayNameDynamic(name) {
  console.log(`My name is ${name}`);
}

setInterval(displayNameDynamic, 1000, 'Susan Williams');

// Calling setInterval for a fixed amount of time
let count = 1;
function callBob() {
  console.log(`Calling Bob - ${count}`);
  count++;
  if (count > 5) clearInterval(intervalId);
}

const intervalId = setInterval(callBob, 2000);

// ================================================================================ //

// Passing arguments to the callback functions in setTimeout
// Same applies for setInterval too

function sum(a, b) {
  console.log(a + b);
}

setTimeout(sum, 1000, 2, 5);

setTimeout(function () {
  sum(2, 8);
}, 3000);
