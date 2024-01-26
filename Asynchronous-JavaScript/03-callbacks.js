// Callbacks

function greet(name) {
  console.log(`Hello ${name}`);
}

function greetPeter(greetFn) {
  const name = 'Peter';
  greetFn(name);
}

greetPeter(greet);

// The function that accepts a function as an argument
// or returns a function is called a Higher Order Function

// Any function that is passed as an argument to another
// function is called a callback function
function higherOrderFunction(callback) {
  const name = 'Gracy';
  callback(name);
}
higherOrderFunction(greet);
