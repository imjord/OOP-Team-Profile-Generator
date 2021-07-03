const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');



test('should return employee for getRole()', () => {

    const e = new Employee("Fred", 1, "test@gmail.com")


    expect(e.getRole()).toBe('Employee');
    

    
})