const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Will create a new object with the name, id and email if the arguments are valid.', () => {
        const employee = new Employee('Gus', 1, 'gusthebus@gmail.com');
        expect(employee.name).toEqual('Gus');
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual('gusthebus@gmail.com');
    });

    it('An error will be thrown if no arguments are presented.', () => {
        const callBack = () => new Employee();
        expect(callBack).toThrow();
    });

    it('An error will be thrown if id and email are not presented.', () => {
        const callBack = () => new Employee('Gus');
        expect(callBack).toThrow();
    });

    it('An error will be thrown if email is not presented.', () => {
        const callBack = () => new Employee('Gus', 1,);
        expect(callBack).toThrow();
    });

    it('An error will be thrown if name is not a string.', () => {
        const callBack = () => new Employee(2, 3, 'gusthebus@gmail.com');
        const err = new Error('The parameter name should not be an empty string.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if the email is not a string', () => {
        const callBack = new Employee('Gus', 4, 5);
        const err = new Error('The parameter email should not be an empty string.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if the id is not a number', () => {
        const callBack = new Employee('gusthebus@gmail.com', 'Gus');
        const err = new Error('The parameter email should not be an empty string.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if the id is less than 0', () => {
        const callBack = new Employee('gusthebus@gmail.com', 'Gus', -20);
        const err = new Error('The parameter id should not be a negative number.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if the email does not have the @ symbol', () => {
        const callBack = new Employee('gusthebusgmail.com', 'Gus', 1);
        const err = new Error('The parameter id should not be a negative number.');
        expect(callBack).toThrowError(err);
    });
});