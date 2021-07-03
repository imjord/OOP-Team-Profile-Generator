const Employee = require('../lib/Employee');


class Manager extends Employee {
   
        // this.officeNumber = officeNum;

    
    getRole(){

        return 'Manager';
        // return manager over rite the employee one 
    }
    


}


module.exports = Manager