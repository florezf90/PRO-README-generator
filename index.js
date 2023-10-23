const inquirer = require('inquirer');
const fs = require('fs');
const defaultContribution = "sapos"

console.log("  !!!WELCOME!!! before start, please keep in mind that every question that is not answered properly, will result in either a  text/links/images placeholder or typo error.  ")
inquirer
       .prompt([
        {
         type: 'input',
         message: "What is the project name? ",
         name: "project-name",
        },     
        {
        type: 'input',
        message: "What is your project about? (please provide the most complete description possible)",
        name: "project-about",
        },
        {
        type: 'checkbox',
        message: 'What are the main libraries and tecnologies used to create this project?',
        choices: [ 'HTML','CSS', 'boostrap', 'bulma', 'JavaScript', 'JQuery', 'Day.js', 'APIS',  'React', 'Angular', 'Vue.js', 'Node.js', 'Express.js', 'Ruby on Rails', 'Django', 'Python', 'PHP',],
        name: "frameworks",
        },
        {
          type: 'input',
          message: 'What is the installation process for your project ? (please provide a step by step process)',
          name: 'installation',
        },
        {
        type: 'input',
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
          value: "sapos",
         },
         {
       key: 'A',
       name: 'alternative',
        value: 'alternative solution'
         }
        ]
        },
        {
        type: "input", 
        message: 'please provide all meaningful resources that helped to make this project a reality',
        name: "resources"
        },
        {
         type: "confirm",
        message: "Is the project deployed already?",
        name: "projectstatus",
         default: true, 
        },
        {
          type: "confirm",
          message: "Do you want the Readme to include incons/badges?",
        name: "mediareadme",
         default: true, 
         },
         {
         type: "confirm",
         message: "Do you want to include professional contact info?",
         name: "contact",
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
            name: "link",
           },
           {
            type: 'input',
            message: 'please provide a screenshot/gif/demo url',
            name: 'media',
           },              
          ])
        };
        if (response.contact) {

              inquirer
              .prompt([
               {
                type: 'input',
                message: 'What is your linkedin profile url?',
                name: "-linkedinlink",
               },
               {
                type: 'input',
                message: 'What is your email',
                name: 'emailink',
               },              
              ])
            };

       
      });
    
/// pseudociding

// TODO: Install the inquirer package------------------------done 

// TODO: import the inquirer and the FS methods---------------------done.

// TODO: Create a variable that will hold the template for the professional readme file.---------------------done.

// TODO: look for a good template and based on that create the template for your project.-----------done

// TODO: use inquirer prompt([]) in order to get the user all the options you want them to be able to personalize.---------done.


// TODO: in order to make the templade customizable, create the variable containing a literal by using the `` wrappers


// TODO: once done, come back to the template and add each user prompt to it's corresponding location by using ${unitname}.

// TODO:Then, with the template and the questions ready, use .then((response) =>  {}) in order to be able to generate a file qith the user prompts

// TODO: create a var that will hold the user responses and use it within the .then function we will create.

