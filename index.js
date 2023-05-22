const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {type: 'input', name: 'initials', message: 'Please enter up to three letters'},
    {type: 'input', name: 'text-color', message: 'Please enter a color choice or hexidecimal color code'},
    {type: 'list', name: 'shape-selector', message: 'Please choose one of the available shapes', choices: ['Square', 'Triangle', 'Circle'] },
    {type: 'input', name: 'shape-color', message: 'Please enter a color choice or hexidecimal color code'}
    ];

function init() {
    inquirer.prompt(questions).then((answers) => {
        
    })
}