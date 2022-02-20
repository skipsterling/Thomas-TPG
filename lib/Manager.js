const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        if (isNaN(this.officeNumber) || this.officeNumber < 0) {
            throw new Error('The parameter officeNumber should not be a negative number');
        }
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;