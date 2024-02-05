// Asynchronous Code with setTimeout -2000ms

console.log('First');

setTimeout(() => {
  console.log('Second');
}, 2000);

console.log('Third');

// Executed as follows

// Output is
// First
// Third
// Second            -- after 2000ms
