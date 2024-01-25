// Recursive setTimout vs setInterval

setTimeout(function run() {
  console.log(`Hello Timeout`);
  setTimeout(run, 1000);
}, 1000);

setInterval(function run() {
  console.log('Hello Interval');
}, 1000);

// Running the same code for different time intervals
// Using Recursive setTimeout
let count = 1;

setTimeout(function run() {
  console.log(`Hello There - ${count}`);
  setTimeout(run, count * 1000);
  count++;
}, 1000);
