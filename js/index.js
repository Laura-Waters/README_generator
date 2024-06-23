// DEPENDENCIES 
const inquirer = require('inquirer'); 
const fs = require('fs');

const writeToFile = function(mdString) {
    fs.writeFile('README.md', mdString, (err) =>
    err ? console.log(err) : console.log('Success!'))
}; 

const formattedResponse = function(response) {
const readme= `
# ${response.title} 

## Description
    
${response.description}
    
## Table of Contents 
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license) 
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)  
    
## Installation
    
${response.installation} 
    
## Usage
    
${response.usage} 
    
## License 
    
${response.license}
    
## Contributing 
    
${response.credits} 
    
## Tests 
    
${response.tests} 
    
## Questions 
    
If you have any additional questions, reach out to me via GitHub or Email: <br>
https://github.com/${response.github} <br>
${response.email}

`;

    return readme; 
};



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
    const mdString = formattedResponse(response);
    writeToFile(mdString);
    }
);   