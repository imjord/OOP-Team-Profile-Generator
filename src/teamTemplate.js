const Manager = require("../lib/Manager");
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const teamIndexHtml = (data) => { return `

   

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team </title>
    </head>
    <body>
    Manager Name ${Manager.managerName}
    MAnager ID ${Manager.managerID}
    answers Email ${Manager.managerEmail}
    answers Office number ${Manager.managerOffice}

    </body>
    </html>
`






}









module.exports = teamIndexHtml;