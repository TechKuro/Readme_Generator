const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: `What is the title of your project?`
    },
    {
        type: `input`,
        name: `description`,
        message: `Please provide a description of your project`
    },
    {
        type: `input`,
        name: `installation`,
        message: `What are the install instructions for your project?`
    },
    {
        type: `input`,
        name: `usage`,
        message: `How do you use your project? Please provide some examples`
    },
    {
        type: `list`,
        name: `license`,
        message: `Which license would you like to use for your project?`,
        choices: [`MIT`, `GPL`, `Apache`, `GNU`, `cc`, `isc`, `ms-pl`]
    },

    {
        type: `input`,
        name:`contributing`,
        message: `How can other developers contribute to the project?`,
    },
    {
        type: `input`,
        name: `tests`,
        message: `What are the test instructions for this project?`
    },

    {
        type: `input`,
        name: `questions`,
        message: `Do you have any questions?`
    },
    {
        type:`input`,
        name:`github`,
        message: `what is your GitHub username?`
    },
    {
        type: `input`,
        name: `email`,
        message: `What is your email address?`
    }
];
console.log(questions);
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
