
const {managerQuestions, internQuestions, engineerQuestions} = require('./src/questions')
const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const answers = [];





const qInit = ()=>{
    return inquirer.prompt(managerQuestions, answers)
}