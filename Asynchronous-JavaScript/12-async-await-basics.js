// async-await basics

async function greet() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Hello There!'), 5000);
  });

  let result = await promise; // Wait until the promise resolves

  console.log(result); // Hello There!
}

greet();

async function greetings() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Not valid'), 2000);
  });

  try {
    let response = await promise;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
greetings();
