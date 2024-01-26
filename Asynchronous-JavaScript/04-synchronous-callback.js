// Synchronous Callbacks
// A callback that is executed immediately is a synchronous callback

let numbers = [1, 2, 4, 7, 3, 5, 6];

const sortedNumbers = numbers.sort((a, b) => a - b);
const doubledNumbers = numbers.map((n) => n * 2);
const evenNumbers = numbers.filter((n) => n % 2 === 0);

// The functions passed to the above sort, map and filter functions
// are Synchronous callback functions

console.log(sortedNumbers);
console.log(doubledNumbers);
console.log(evenNumbers);
