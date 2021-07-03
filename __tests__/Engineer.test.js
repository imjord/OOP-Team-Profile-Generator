const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');




test('getRole should return Engineer', () => {

    const En = new Engineer();

    expect(En.getRole()).toBe('Engineer');
})


// test getRole() should return engineer 