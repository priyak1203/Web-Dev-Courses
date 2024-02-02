// Promise Static Methods - Promise.race()

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, 'Data One');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'Data Two');
});

Promise.race([promise1, promise2]).then((value) => console.log(value));
