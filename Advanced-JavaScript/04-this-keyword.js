// this keyword

// Implicit Binding
console.log('Implicit Binding');
const person = {
  firstName: 'Peter',
  lastName: 'Willams',

  getFullName: function () {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
  },
};

person.getFullName();
console.log('===========================================');

// ============================================================================================================ //

// Explicit Binding
console.log('Explicit Binding');

// function is defined outside the object
function getFullName() {
  console.log(`My name is ${this.firstName} ${this.lastName}`);
}

function getAge() {
  console.log(`My age is ${this.age}`);
}

const employee = {
  firstName: 'Vivek',
  lastName: 'Kumar',
  age: 38,
};

// In this scenario we have te explicitly specify the context when the function is called
// this can be done using call method

getFullName.call(person);
getAge.call(person);
getFullName.call(employee);
getAge.call(employee);

console.log('===========================================');

// ============================================================================================================ //

// new Keyword Binding
console.log('new Keyword Binding');

function Person(name) {
  this.name = name;
  this.message = `Hello There - ${name}`;
}

const p1 = new Person('Vivek');
const p2 = new Person('Rohan');

console.log(p1.name, p2.name);
console.log(p2.message);

console.log('===========================================');

// ============================================================================================================ //

// Default Binding
console.log('Default Binding');

// Global scope for the browser
// const firstName = 'Reyansh';
// const secondName = 'Mehra';

globalThis.firstName = 'Rahul';
globalThis.lastName = 'Dravid';
getFullName();
