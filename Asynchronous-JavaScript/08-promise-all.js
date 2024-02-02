// Promise Static Methods - Promise.all()

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) =>
  console.log(values)
);

const promise4 = new Promise((resolve, reject) => {
  setTimeout(reject, 5000, 'Invalid request');
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'New Data');
});

Promise.all([promise1, promise2, promise3, promise4])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

Promise.all([promise1, promise2, promise3, promise4, promise5])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));

Promise.all([promise1, promise2, promise3, promise5])
  .then((values) => console.log(values))
  .catch((error) => console.log(error));
