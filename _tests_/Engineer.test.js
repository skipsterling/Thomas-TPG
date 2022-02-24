const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


describe ('Engineer', () => {
    it('A new engineer will be entered if all the arguments are given correctly.', () => {
        const engineer = new Engineer('Gus', 1, 'gusthebus@gmail.com', 'GusBus');
expect(engineer.name).toEqual('Gus');
expect(engineer.id).toEqual(1);
expect(engineer.email).toEqual('gusthebus@gmail.com');
expect(engineer.github).toEqual('GusBus')
    });

    it('An error will be thrown if a github account is not provided.', () => {
        const callBack = () => new Engineer('Gus', 1, 'gusthebus@gmail.com');
        const err = new Error('The github parameter should not be an empty string.');
        expect(callBack).toThrowError(err);
    });

    it('An error will be thrown if a github is not a string', () => {
        const callBack = () => new Engineer('Gus', 2, 'gusthebus@gmail.com', 10);
        const err = new Error('The github parameter should not be an empty string.');
        expect(callBack).toThrowError(err);
    });
});