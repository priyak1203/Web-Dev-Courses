// Asynchronous Code with setTimeout - 0ms

console.log('First');

setTimeout(() => {
  console.log('Second');
}, 0);

console.log('Third');

// Executed as follows

// Output is
// First
// Third
// Second            --  immediately after 'Third'
