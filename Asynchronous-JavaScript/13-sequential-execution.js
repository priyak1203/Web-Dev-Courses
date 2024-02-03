// Sequential Execution

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

// sequential execution
async function sequentialStart() {
  const hello = await resolveHello();
  console.log(hello); // logs after 5 seconds

  const world = await resolveWorld();
  console.log(world); // logs after 5 + 2 = 7 seconds
}

sequentialStart();
