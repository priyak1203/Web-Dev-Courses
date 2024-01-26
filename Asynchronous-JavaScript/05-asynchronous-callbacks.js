// Asynchronous Callbacks

function calculateSum(a, b) {
  console.log(a + b);
}

// Fn calculateSum is called after 2000ms
setTimeout(calculateSum, 2000, 5, 4);

// Data Fetching

// fetch('https://course-api.com/react-tours-project').then((res) =>
//   res.json().then((data) => console.log(data))
// );

async function getData() {
  const response = await fetch('https://course-api.com/react-tours-project');
  const data = await response.json();
  console.log(data);
}

getData();
