// Prototypal Inheritance

function Employee(fName, lName) {
  this.firstName = fName;
  this.lastName = lName;
}

Employee.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const emp1 = new Employee('Vivek', 'Kumar');
const emp2 = new Employee('Sweta', 'Garg');

console.log(emp1.getFullName());
console.log(emp2.firstName);

function Manager() {
  this.isManager = true;
}

Manager.prototype.handleProject = function () {
  console.log(`Manager handles all the projects!!!`);
};

const mngr = new Manager();

console.log(mngr.isManager);
mngr.handleProject();

// Currently mngr has access to isManager and handleProject
// we want mngr to have access to the properties and methods of Employee
// To achieve this we can interit the properties and methods

// let us modify the Manager function to meet the above requirement

// steps are
// fName and lName need to be passed to Employee function
// Emloyee function should be invoked with this keyword -
// pointing to this object from NewManager function i.e., Explicit Binding
// function can be called by specifying what this keyword should point to using call method

function NewManager(fName, lName) {
  Employee.call(this, fName, lName);
  this.isManager = true;
}

// to inherit getFullName method we use a method Object.create
// which is a method that will delegate to another object on failed lookups
NewManager.prototype = Object.create(Employee.prototype);

// This clean up step is required otherwise JavaScript will assume that
// NewManager is created from Employee - which is incorrect
NewManager.prototype.constructor = NewManager;

NewManager.prototype.handleProject = function () {
  console.log(`Manager handles all the People!!!`);
};

const newMngr = new NewManager('Ritesh', 'Agarwal');

console.log('**************************************************');
console.log(newMngr);
console.log('// ------- Own properties and methods ------- // ');
console.log(newMngr.isManager);
newMngr.handleProject();
console.log('// ------- Inherited from Employee ------- // ');
console.log(newMngr.firstName);
console.log(newMngr.lastName);
console.log(newMngr.getFullName());
