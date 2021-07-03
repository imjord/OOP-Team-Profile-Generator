const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');





test('Expect to return manager for getRole', ( )=> {
    const m = new Manager();

    expect(m.getRole()).toBe('Manager');

})





// test getRole() should return manager 

