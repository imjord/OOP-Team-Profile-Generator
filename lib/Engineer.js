
const Employee = require('../lib/Employee');


class Engineer extends Employee { 
  
        // this.github = github;

    
    getGithub(){

    }
    getRole(){
        return 'Engineer';

    }
}

// const nameOne = new Employee('jumbo bean');
// console.log(nameOne);


module.exports = Engineer