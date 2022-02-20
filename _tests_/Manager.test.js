const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe ('Manager', () => {
    it('A new Manager will be entered if all the arguments are given correctly.', () => {
        const Manager = new Manager('Gus', 1, 'gusthebus@gmail.com', 1);
expect(Manager.name).toEqual('Gus');
expect(Manager.id).toEqual(1);
expect(Manager.email).toEqual('gusthebus@gmail.com');
expect(Manager.officeNumber).toEqual(1)
    });

    it('An error will be thrown if an officeNumber is not a number.', () => {
        const callBack = () => new Manager('Gus', 1, 'gusthebus@gmail.com', 'green');
        const err = new Error('The parameter officeNumber should not be a negative number.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if a officeNumber is a negative', () => {
        const callBack = () => new Manager('Gus', 1, 'gusthebus@gmail.com', -10);
        const err = new Error('The parameter officeNumber should not be a negative number.');
        expect(callBack).toThrowError(err);
    });
});