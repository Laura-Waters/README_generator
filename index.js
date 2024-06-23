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
        type: "list",
        message: "What license did you select for your project?",
        name: "license",
        choices: ["MIT License", "GNU General Public License", "GNU Lesser General Public License", "Apache License 2.0", "Mozilla Public License 2.0", "BSD License", "Creative Commons License"],
    }, 
    {
        type: 'input',
        message: ('Input any collaborators or other parties that should be credited for your project.'),
        name: 'credits',
    },
    {
        type: 'input',
        message: ('Input instructions for any tests that can be run on your project.'),
        name: 'tests',
    },
    {
        type: 'input',
        message: ('What is your GitHub username?'),
        name: 'github',
    },
    {
        type: 'input',
        message: ('What is your email address?'),
        name: 'email',
    },
  ])
  .then((response) => {
    const htmlString = formattedResponse(response);
    writeToLog(htmlString);
    }
);

const formattedResponse = function(response) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./css/style.css"></link>
        <title>${response.name}</title>
    </head>
    <body>
        <header>
         <h1>${response.name}</h1>
        </header>
        <section>
            <h2>About Me</h2>
            <p class="about-me-section">Hi, my name is ${response.name}.<br>I'm a ${response.profession} based in ${response.location}.<br>To view some of my recent work, checkout my GitHub: <a href="https://github.com/${response.github}" target="_blank">${response.github}</a> or my LinkedIn: <a href="https://${response.linkedin}" target="_blank">${response.linkedin}.</a></p>
        </section>
    </body>
    </html>`;
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
