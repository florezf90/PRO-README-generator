const inquirer = require('inquirer');
const fs = require('fs');

let template = `

<p><h1 align= "center">${project.name}</h1></p>


  # About

${project.description}

![Placeholder Image](${screenshot.placeholder}/400/400)



# Built With 

 List of any major frameworks/libraries used to design the project: 


* [![NODE.JS](https://img.shields.io/badge/NODE.JS-green?style=flat&logo=node.js&logoColor=white&logoWidth=21&link=https://nodejs.org/en)](https://nodejs.org/en)

* [![JavaScript](https://img.shields.io/badge/JavaScript-white?style=flat&logo=JavaScript&logoColor=yellow&logoWidth=21&link=https://www.w3schools.com/js/)](https://www.w3schools.com/js/)

*  [![NPM INQUIRER](https://img.shields.io/badge/NPM%20INQUIRER-red?style=flat&logo=npm&logoColor=white&link=https://www.npmjs.com/package/inquirer)](https://www.npmjs.com/package/inquirer)



`

/// pseudociding

// TODO: Install the inquirer package------------------------done 

// TODO: import the inquirer and the FS methods---------------------done.

// TODO: Create a variable that will hold the template for the professional readme file.---------------------done.

// TODO: look for a good template and based on that create the template for your project.-----------

// TODO: in order to make the templade customizable, create the variable containing a literal by using the `` wrappers

// TODO: use inquirer prompt([]) in order to get the user all the options you want them to be able to personalize.

// TODO: Look again for tthe inquirer doc in order to refresh the questions types that we can prompt the user and based on that, see how m
// many do you want to prompt.

// TODO: once done, come back to the template and add each user prompt to it's corresponding location by using ${unitname}.

// TODO:Then, with the template and the questions ready, use .then((response) =>  {}) in order to be able to generate a file qith the user prompts

// TODO: create a var that will hold the user responses and use it within the .then function we will create.

