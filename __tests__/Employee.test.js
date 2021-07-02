const { expect } = require('@jest/globals')
const Employee = require('../lib/Employee')


test('should return employee for getRole()', () => {
    expect(getRole()).toBe('Employee');
    
})