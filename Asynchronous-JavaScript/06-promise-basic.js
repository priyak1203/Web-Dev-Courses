// Promises - Basics

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck found
    // pending --> fulfilled
    resolve();
  }, 5000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck not found
    // pending --> rejected
    reject();
  }, 5000);
});

// Callback functions
const onFulfillment = () => {
  // resolve was called
  console.log('Set up the table to eat tacos');
};

const onRejection = () => {
  // reject was called
  console.log('Start cooking pasta');
};

pr1.then(onFulfillment).catch(onRejection);
pr2.then(onFulfillment).catch(onRejection);
