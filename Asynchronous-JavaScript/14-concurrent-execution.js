// Concurrent Execution

// async function 1
function resolveHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Hello');
    }, 5000);
  });
}

// async function 2
function resolveWorld() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('World');
    }, 2000);
  });
}

// concurrent execution
async function concurrentStart() {
  const hello = resolveHello();
  const world = resolveWorld();

  console.log(await hello); // logs after 5 seconds
  console.log(await world); // logs after 5 seconds
}

concurrentStart();
