const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe ('Intern', () => {
    it('A new Intern will be entered if all the arguments are given correctly.', () => {
        const Intern = new Intern('Gus', 1, 'gusthebus@gmail.com', 'University of Adelaide');
expect(Intern.name).toEqual('Gus');
expect(Intern.id).toEqual(1);
expect(Intern.email).toEqual('gusthebus@gmail.com');
expect(Intern.school).toEqual('University of Adelaide')
    });

    it('An error will be thrown if a school is not provided.', () => {
        const callBack = () => new Intern('Gus', 1, 'gusthebus@gmail.com');
        const err = new Error('The parameter school should not be an empty string.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if a school is not a string', () => {
        const callBack = () => new Intern('Gus', 2, 'gusthebus@gmail.com', 10);
        const err = new Error('The parameter school should not be an empty string.');
        expect(callBack).toThrowError(err);
    });
});