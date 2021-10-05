// modules
const inquirer = require('inquirer');
const fs = require('fs');

// prompts
inquirer.prompt(
    [
        {
            type: 'input',
            message: "What's the project title?",
            name: 'title',
            // check for user input
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'How do you install your app?',
            name: 'installation',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'What are the instructions to follow?',
            name: 'instructions',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'Test instructions: ',
            name: 'tests',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'Usage',
            name: 'usage',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'Contributions: ',
            name: 'contributions',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'who should be credited?',
            name: 'credits',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            // list of licenses
            type: 'list',
            message: 'Licenses used:',
            name: 'licenses',
            choices: ['MIT', 'GPL', 'Apache', 'GNU', 'N/A'],
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}},
        },
        {
            type: 'input',
            message: 'GitHub username:',
            name: 'github',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'How can someone contact you with additional questions?',
            name: 'questions',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        },
        {
            type: 'input',
            message: 'email:',
            name: 'email',
            validate: (value) => {
                if (value)
                    {return true}
                else {
                    return 'Please enter a value to continue'}}
        }
    ]).then(({
        title,
        installation,
        instructions,
        usage,
        contributions,
        tests,
        credits,
        licenses,
        github,
        questions,
        email
    }) => {
        // template
        const template = `
        # ${title}

        * [Installation](#installation)
        * [Instructions](#instructions)
        * [Usage](#usage)
        * [Tests] (#tests)
        * [Credits](#credits)
        * [License](#licenses)
        # Installation
        ${installation}
        ## Instructions
        ${instructions}
        ## Usage
        ${usage}
        ## Contributing
        ${contributions}
        ## Tests
        ${tests}
        ## Credits
        ${credits}
        ## License
        ${licenses}

        ## Questions
        * GitHub: https://github.com/${github}
        * ${questions}
        * email: ${email}
        `;
        // function to create README
        createNewFile(title, template);
    });

    // createNewFile function
    function createNewFile(fileName, data){
        // fs
        fs.writeFile('./README.md', data, (err) => {
            if (err){
                console.log(err)
            }
            console.log("Your README is complete!");
        })
    };
