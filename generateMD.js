const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'confirm', // This sets up a yes/no question
      name: 'continue',
      message: 'Do you want to continue?',
      default: true, // You can set the default value (true for "yes", false for "no")
    },
  ])
  .then(answers => {
    if (answers.continue) {
      // User wants to continue, so prompt another question
      inquirer
        .prompt([
          {
            type: 'input',
            name: 'additionalInfo',
            message: 'Please provide additional information:',
          },
        ])
        .then(response => {
          console.log('User wants to continue, and provided the following information:', response.additionalInfo);
        });
    } else {
      console.log('User chose not to continue.');
    }
  });
