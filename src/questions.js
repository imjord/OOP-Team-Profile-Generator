const inquirer = require('inquirer');


//  function 
const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'What is your engineers name?',
        validate: engineerNameValidate => {
            if(engineerName){
                return true;
            } else {
                return "Please provide a engineer name"
            }
        }
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'What is your team engineers id',
        validate: engineerIDValidate => {
            if(engineerID){
                return true;
            } else {
                return 'Please provide a engineer ID number!'
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is your team engineers email?',
        validate: engineerEmailValidate => {
            if(engineerEmail){
                return true;
            } else {
                return "Please provide engineer email!"
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: 'what is your engineers github',
        validate: engineerGitHubValidate => {
            if(engineerGithub){
                return true;
            } else {
                return "Please provide a engineer github!"
            }
        }

    },
    {
        type:'confirm',
        name:'addNewEngineer',
        message:'Would you like to add another Engineer?',
        default:'true'
    }
   
];


const managerQuestions = [{
    type: 'input',
        name: 'managerName',
        message: 'What is your managers name?',
        validate: managerNameValidate => {
            if(managerName){
                return true;
            } else {
                return "Please provide a manager name"
            }
        }
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is your team managers id',
        validate: managerIDValidate => {
            if(managerID){
                return true;
            } else {
                return 'Please provide a manager ID number!'
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your team managers email?',
        validate: managerEmailValidate => {
            if(managerEmail){
                return true;
            } else {
                return "Please provide manager email!"
            }
        }
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'what is your managers office number',
        validate: managerOfficeValidate => {
            if(managerOffice){
                return true;
            } else {
                return "Please provide a manager office number!"
            }
        }

    },
]

const internQuestions = [{
    type: 'input',
        name: 'internName',
        message: 'What is your interns name?',
        validate: internNameValidate => {
            if(internName){
                return true;
            } else {
                return "Please provide a intern name"
            }
        }
    },
    {
        type: 'input',
        name: 'internID',
        message: 'What is your team interns id',
        validate: internIDValidate => {
            if(internID){
                return true;
            } else {
                return 'Please provide a intern ID number!'
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'What is your team interns email?',
        validate: internEmailValidate => {
            if(internEmail){
                return true;
            } else {
                return "Please provide intern email!"
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'what is your interns school',
        validate: internSchoolValidate => {
            if(internSchool){
                return true;
            } else {
                return "Please provide a intern School!"
            }
        }

    },
    {
        type:'confirm',
        name:'addNewIntern',
        message:'Would you like to add another intern?',
        default:'true'
    }

]




module.exports = { managerQuestions, engineerQuestions, internQuestions };