
const Employee = require('../lib/Employee');




test('', () => {

    const newEmployee = new Employee('Chris', 2, "chris@aol.com");


    expect(newEmployee.name).toBe('Chris');
    expect(newEmployee.id).toEqual(expect.any(Number));
    expect(newEmployee.email).toBe("chris@aol.com");
    
    expect(typeof newEmployee.getName()).toBe('string');

    expect(newEmployee.getId()).toEqual(expect.any(Number));
    expect(newEmployee.getEmail()).toEqual
    (expect.stringContaining(newEmployee.email.toString()
    ));

    expect(newEmployee.getRole()).toEqual('Employee');


    
})
