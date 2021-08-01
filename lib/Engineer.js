
const Employee = require('../lib/Employee');


class Engineer extends Employee { 
        constructor(name,id,email,github){
            super(name,id,email)
            this.github = github;
        }
       

    
    getGithub(){
        return this.github;

    }
    getRole(){
        return 'Engineer';

    }
}

// const nameOne = new Employee('jumbo bean');
// console.log(nameOne);


module.exports = Engineer;