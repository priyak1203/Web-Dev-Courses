// Parallel Execution

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

async function fn1() {
  const hello = await resolveHello();
  console.log(hello);
}
async function fn2() {
  const world = await resolveWorld();
  console.log(world);
}

// parallel execution
function parallel() {
  Promise.all([fn1(), fn2()]);
}

// parallel();

function parallelAlt() {
  Promise.all([
    (async () => console.log(await resolveHello()))(), // logs after 5 seconds
    (async () => console.log(await resolveWorld()))(), // logs after 2 seconds
  ]);
}

// parallelAlt();

// Pause the execution at promise.all
async function parallelStart() {
  await Promise.all([
    (async () => console.log(await resolveHello()))(), // logs after 5 seconds
    (async () => console.log(await resolveWorld()))(), // logs after 2 seconds
  ]);

  console.log('Finally'); // logs after World Hello
}

parallelStart();
