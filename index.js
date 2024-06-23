// TODO: Include packages needed for this application
// DEPENDENCIES 
const inquirer = require('inquirer'); 
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: ('What would you like the project title for your README to be?'),
      name: 'title',
    },
    {
        type: 'input',
        message: ('Input a description of your project.'),
        name: 'description',
    },
    {
        type: 'input',
        message: ('Input any steps required to install your project.'),
        name: 'installation',
    },
    {
        type: 'input',
        message: ('Input instructions for usage of your project.'),
        name: 'usage',
    },
    {
        type: 'input',
        message: ('Input any collaborators or other parties that should be credited for your project.'),
        name: 'credits',
    },
    {
        type: 'input',
        message: ('Input instructions for a test that can be run on your project.'),
        name: 'test',
    },
  ])
  .then((response) => {
    const htmlString = formattedResponse(response);
    writeToLog(htmlString);
    }
);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
