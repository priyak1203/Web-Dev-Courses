// Class

class Employee {
  constructor(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const emp1 = new Employee('Nithin', 'Arora');

console.log(emp1.firstName);
console.log(emp1.lastName);
console.log(emp1.getFullName());

class Manager extends Employee {
  constructor(fName, lName) {
    super(fName, lName);
    this.isManager = true;
  }

  handleProject() {
    console.log(`Manager handles all the Projects and People!`);
  }
}

const mngr = new Manager('Shruti', 'Jain');

console.log('*******************************************');
console.log(mngr);
console.log(mngr.isManager);
mngr.handleProject();
console.log(mngr.firstName);
console.log(mngr.lastName);
console.log(mngr.getFullName());
