// Prototype

function Person(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

const person1 = new Person('John', 'Smith');
const person2 = new Person('Kelly', 'Clarke');

person1.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(person1.getFullName());
// console.log(person2.getFullName()); // throws an error

// the above getFullName function is specific to person1 instance of Person
// to attach the function to all the instances of Person we can use prototype

Person.prototype.displayFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

console.log(person1.displayFullName());
console.log(person2.displayFullName());
