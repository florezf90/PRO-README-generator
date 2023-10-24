const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMD');

const frameworkschoices = [
  'HTML',
  'CSS', 
  'boostrap', 
  'bulma',
  'JavaScript', 
  'JQuery',
  'Day.js',
  'APIS', 
  'React', 
  'Angular',
 'Vue.js', 
  'Node.js', 
  'Express.js', 
  'Ruby on Rails', 
  'Django', 
  'Python', 
  'PHP',
]

const licenses = [
  'Apache-2.0', 
  'GNU-General-Public-v3.0', 
  'MIT', 
  'BSD-2-Clause-Simplified', 
  'BSD-3-Clause-New-or-Revised', 
  'BoostSoftware-1.0', 
  'Creative-Commons-Zero-V1.0-Universal', 
  'Eclispse-Public-2.0', 
  'GNU-General-Public-v2.0', 
  'Mozilla-Public-2.0', 
  'The-Unlicense', 
]



console.log("  !!!WELCOME!!! before start, please keep in mind that every question that is not answered properly, will result in either a  text/links/images placeholder or typo error.  ")
inquirer
       .prompt([
        {
         type: 'input',
         message: "What is the project name? ",
         name: "projectname",
        },     
        {
        type: 'editor',
        message: "What is your project about? (please provide the most complete description possible)",
        name: "projectabout",
        },
        {
        type: 'checkbox',
        message: 'What are the main libraries and tecnologies used to create this project?',
        choices: frameworkschoices,
        name: "frameworks",
        },
        {
          type: 'editor',
          message: 'What is the installation process for your project ? (please provide a step by step process)',
          name: 'installation',
        },
        {
        type: 'editor',
        message: 'What is the functionality of the Application? (provide instructions to get more clarity and code examples)',
        name: 'usage',
        },
        {
        type: 'expand',
        message: 'please select the syntax you prefer to let other developers know how can they contribute to your project "D": default, "A": alternative.',
        name: 'contributing',
        choices: [
         {
          key: 'D',
          name: 'default',
          value: "default",
         },
         {
       key: 'A',
       name: 'alternative',
        value: 'alternative solution'
         }
        ]
        },
        {
        type: "editor", 
        message: 'please provide all meaningful resources that helped to make this project a reality',
        name: "resources"
        },
        {
        type: 'list',
        message: 'please select the license for your project',
        name:'license',
        choices: licenses,
        default: 'None'
        },
        {
         type: "confirm",
        message: "Is the project deployed already?",
        name: "projectstatus",
         default: true, 
        },
       ])
       .then((response) => {
        if (response.projectstatus) {
          inquirer
            .prompt([
              {
                type: 'input',
                message: 'What is the application deployment link?',
                name: 'link',
              },
              {
                type: 'input',
                message: 'Please provide a screenshot/gif/demo URL',
                name: 'media',
              },
              {
                type: 'input',
                message: 'What is your LinkedIn profile URL?',
                name: 'linkedinlink',
              },
              {
                type: 'input',
                message: 'What is your email?',
                name: 'emailink',
              },
            ])
            .then((deploymentResponse) => {
              const readmeContent = generateMD({ ...response, ...deploymentResponse }); // Merge both sets of responses
              writeReadme(readmeContent);
            });
        } else {
          const readmeContent = generateMD(response);
          writeReadme(readmeContent);
        }
      });
    
    function writeReadme(content) {
      // Write the content to README.md
      fs.writeFile('ExampleREADME.md', content, (err) => {
        if (err) {
          console.error('Error writing README.md:', err);
        } else {
          console.log('README.md has been successfully created!');
        }
      });
    }

