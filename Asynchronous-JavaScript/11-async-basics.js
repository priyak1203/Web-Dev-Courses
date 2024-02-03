// Async functions - basics

// normal function
function greeting() {
  return 'Hello';
}

console.log(greeting());

// async function
async function greet() {
  return 'Hello';
}

console.log(greet());

async function sayHello() {
  return Promise.resolve('Hello World');
}

sayHello().then((value) => console.log(value));
