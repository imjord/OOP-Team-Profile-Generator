const inquirer = require('inquirer');


// manager function 
const userQuestion = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is your managers name?'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is your team managers id'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is your team managers email?'
        // validate
    },
    {
        type: 'input',
        name: 'managerOffice',
        message: 'what is your managers office number'

    }
];




// team member role if 
// new function with intern engineer 



return inquirer.prompt ([

    {
        type: 'list',
        name: 'pickTeam',
        message: 'Would you like to add a team member?',
        choices: ['Engineer', 'Intern']

    }
]

)

