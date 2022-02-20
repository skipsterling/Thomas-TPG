class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

        if (isNaN(this.id) || this.id < 0) {
            throw new Error('The id parameter should not be a negative number');
        }
    if (typeof this.name !== 'string' || !this.name) {
        throw new Error('The name parameter should not be an empty string');
    }
    if (typeof this.email !== 'string' || !this.email) {
        throw new Error ('The email parameter should not be an empty string');
    }
    }
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return 'Employee';
}
}
module.exports = Employee