class Engineer extends Employee { 
    constructor(github){
        this.github = github;

    }
    getGithub(){

    }
    getRole(){
        return 'Engineer';

    }
}

const nameOne = new Employee('jumbo bean');
console.log(nameOne);