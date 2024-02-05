// Async setTimeout + promise code

setTimeout(() => {
  console.log('First');
}, 0);

const promise = fetch('https://jsonplaceholder.typicode.com/users');
promise.then((value) => value.json().then((data) => console.log(data)));

for (let i = 0; i < 1000000000; i++) {
  // wait here
}

console.log('Second');

// Alt Code

// Async setTimeout + promise code

// setTimeout(() => {
//   console.log('First');
// }, 0);

// setTimeout(() => {
//   console.log('Delayed First');
// }, 3000);

// const promise = fetch('https://jsonplaceholder.typicode.com/users');
// promise.then((value) => value.json().then((data) => console.log(data)));

// for (let i = 0; i < 1000000000; i++) {
//   // wait here
// }

// console.log('Second');
