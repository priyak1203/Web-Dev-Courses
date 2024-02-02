// Promise - with data passed

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck found
    // pending --> fulfilled
    resolve('Bringing tacos');
  }, 5000);
});

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Food truck not found
    // pending --> rejected
    reject('Not Bringing tacos. Food truck not there');
  }, 5000);
});

// Callback functions
const onFulfillment = (result) => {
  // resolve was called
  console.log(result);
  console.log('Set up the table to eat tacos');
};

const onRejection = (error) => {
  // reject was called
  console.log(error);
  console.log('Start cooking pasta');
};

pr1.then(onFulfillment).catch(onRejection);
pr2.then(onFulfillment).catch(onRejection);
