const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    
  }
  getRole(){
      this.role = 'Manager';
      return this.role;
  }
}


/*const emp = new Manager('Todd', 3, 'todd@todd.com','toddzzz');
console.log(emp.getName() + " ---" + emp.getId() +" ----" + emp.getEmail());
console.log(emp.officeNumber);
console.log(emp.getRole());*/
module.exports = Manager;