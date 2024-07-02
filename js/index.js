// DEPENDENCIES 
const inquirer = require('inquirer'); 
const fs = require('fs'); 
const path = './README.md'; 

const writeToFile = function(filePath, mdString) {
    fs.writeFile(filePath, mdString, (err) =>
    err ? console.log(err) : console.log('Success!'))
}; 

const formattedResponse = function(response, licenseLink) {
const readme= `
# ${response.title} ${licenseLink}

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
        choices: ["MIT License", "GNU General Public License", "Apache License 2.0", "Mozilla Public License 2.0", "BSD License", "Creative Commons License"],
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
    const license = response.license; 
    const licenseLink = getLicenseLink(license); 
    const mdString = formattedResponse(response, licenseLink); 
    writeToFile(path,mdString);
    }
);   

  function getLicenseLink(license) { 
    if (license === "MIT License") {
     return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT);`
    } else if (license === "GNU General Public License") {
     return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === "Apache License 2.0") {
     return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
    } else if (license === "Mozilla Public License 2.0") {
     return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    } else if (license === "BSD License") {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license === "Creative Commons License") {
        return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    }; 
 }; 





