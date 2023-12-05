// Iterables and Iterators

// From Definition
const iterableObj = {
  [Symbol.iterator]: function () {
    const iterator = {
      next: function () {
        if ('condition 1') {
          return { value: 'value 1', done: false };
        } else if ('condition 2') {
          return { value: 'value 2', done: false };
        } else if ('condition n') {
          return { value: 'value n', done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

// Example - obj is an iterable object
const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;

        if (step === 1) {
          return { value: 'Hello', done: false };
        } else if (step === 2) {
          return { value: 'World', done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}
