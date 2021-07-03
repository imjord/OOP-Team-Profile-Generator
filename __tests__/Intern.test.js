const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');




test('should return intern', () => {
    const inI = new Intern();

    expect(inI.getRole()).toBe('Intern');


})
// test getRole() should return intern



