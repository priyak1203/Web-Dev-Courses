// Currying

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 4));

// Currying means to transform
// sum(a,b,c) to sum(a)(b)(c)
// sum(2,3,5) to sum(2)(3)(5)

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5));

// Breaking down the above syntax - curriedSum(2)(3)(5)

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5);
