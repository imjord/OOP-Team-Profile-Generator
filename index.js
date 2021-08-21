
const fs = require("fs");
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamTemplate = require('./src/teamTemplate');
const { writeFile } = require('./utils/generate-site');
const path = require("path");


const teamInfo = [];

const engineerQuestions = ()=> {
    inquirer.prompt([
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
    
        }
       
    ]).then((answers) => {
        const engineerAnswers = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGithub)
        teamInfo.push(engineerAnswers);
        addTeamMember();
    })


} 




const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
                name: 'managerName',
                message: 'What is your managers name?',
                validate: managerNameValidate => {
                    if(managerNameValidate){
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
                    if(managerIDValidate){
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
                    if(managerEmailValidate){
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
                    if(managerOfficeValidate){
                        return true;
                    } else {
                        return "Please provide a manager office number!"
                    }
                }
        
            }

    ]).then((answers) => {
        const managerAnswers = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOffice)
        teamInfo.push(managerAnswers);
        console.log(managerAnswers);
        addTeamMember();
    })

} 

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
                name: 'internName',
                message: 'What is your interns name?',
                validate: internNameValidate => {
                    if(internNameValidate){
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
                    if(internIDValidate){
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
                    if(internEmailValidate){
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
                    if(internSchoolValidate){
                        return true;
                    } else {
                        return "Please provide a intern School!"
                    }
                }
        
            }.then((answers) => {
                const internAnswers = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internEmail)
                teamInfo.push(internAnswers);
                console.log(answers);
                addTeamMember();

            })
    ])
} 

const addTeamMember = () => {
    inquirer.prompt([ {
        type: "list", 
        name: "employeeType",
        message: "Which type of an employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"],
        default: "Manager"

    }]).then((answers) => {
        if (answers.employeeType==="Engineer"){
            engineerQuestions();
        } else if (answers.employeeType==="Intern") {
            internQuestions();
        } else if (answers.employeeType ==="Manager") {
            managerQuestions();
        } else {
            return writeFile(teamInfo);
        }
    })
}

addTeamMember();