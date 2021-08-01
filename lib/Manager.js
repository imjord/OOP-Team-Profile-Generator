const Employee = require('../lib/Employee');


class Manager extends Employee {
    constructor(name,id,email,officeNum){
        super(name,id,email);
        this.office = officeNum;
    }
   
        // this.officeNumber = officeNum;

    
    getRole(){

        return 'Manager';
        // return manager over rite the employee one 
    }

    getRoom(){
        return this.office = officeNum;
    }
    


}


module.exports = Manager;