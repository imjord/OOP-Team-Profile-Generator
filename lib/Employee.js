class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;

        // return 'Chris';
        // // console.log(this.name + '');
        

    }
    getId(){
        return this.id;
       
    }
    getEmail(){
        return this.email;
    }
    getRole(){


        return 'Employee';


        // return Employee.
    }
}

module.exports = Employee