// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description of your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter installation instructions for your project.'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage instructions for your project.'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines for your project.'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please enter testing instructions for your project.'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please choose a license for your project.',
            choices: 
            [
                'GNU AGPLv3',
                'GNU GPLv3',
                'GNU LGPLv3',
                'Mozilla Public License 2.0',
                'Apache License 2.0',
                'MIT License',
                'Boost Software License 1.0',
                'The Unlicense'
            ]
        }
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
