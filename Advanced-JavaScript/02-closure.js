// Closure

// Case 1: Nested Function
function outerNested() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outerNested();
outerNested();

// The output of the above code is
// 1
// 1
// With every new invocation of the function, a temporary memory is established, we have a new counter
// variable initialized to zero and then incremented.
// Hence every outer function call will always print 1 to the console

console.log('==============================================');

// Case 2: Closure
function outer() {
  let counter = 0;
  let sum = 100;
  function inner() {
    counter++;
    sum += 5;
    console.log(counter);
    console.log(sum);
  }
  return inner;
}

outer()();
outer()();

const Fn = outer(); // ---- Point A
console.log(Fn);
Fn();
Fn();

// The output of the last two Fn() function calls is
// 1, 105, 2, 110

// In the above example, the function outer is returning another function named inner
// In this scenario, the JavaScript doesnt just return the inner function, but it returns
// the inner function as well as its scope
// In this example, function scope has counter and sum variables initilized to 0 and 100 respectively
// Therefore the function inner, bundled together with the variable  counter and sum,
// which is togeter termed as a closure
// In such situation, the function will persist or remember the values of counter and sum variables

// The key point is
// With closures the inner function has access to variables in the outer function scope even
// after the outer function has finished execution.

// Outer function has finised execution when called in the line 40 or Point A
// But inner function still has access to variables counter and sum which are defined inside outer function
// The variable Fn remembers values of counter and sum variables
