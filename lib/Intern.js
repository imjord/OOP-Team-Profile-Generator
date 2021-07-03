const Employee = require('../lib/Employee');


class Intern extends Employee{
   
        // this.school = school;
    
    getSchool(){

    }
    getRole(){

        return 'Intern'

        // over ride to return intern 
    }
}


module.exports = Intern