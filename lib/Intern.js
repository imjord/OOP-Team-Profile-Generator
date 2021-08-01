const Employee = require('../lib/Employee');


class Intern extends Employee{
        constructor(name,id,email,school){
            super(name,id,email);
            this.school = school;
        }
        // this.school = school;
    

        // super params for parent 

        
    getSchool(){
        return this.school;

    }
    getRole(){

        return 'Intern'

        // over ride to return intern 
    }
}


module.exports = Intern