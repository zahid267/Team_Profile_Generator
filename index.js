const inquirer = require("inquirer");
const fs = require("fs");
const util = require('util');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
/*const manager = new Manager();
const engineer = new Engineer();
const intern = new Intern();*/

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
let questions = [];
const Type_questions = {
  type: 'list',
  name: 'memberType',
  message: 'Which type of team member would you like to add?',
  choices:['Engineer', 'Intern', 'I do\'t want to add any more team member'],
};

const Manager_questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the team Manager\'s name?',
  },
  {
    type: 'input', 
    name: 'id',
    message: 'What is the team manager\'s id?',
  },
  {
    type: 'email',
    name: 'email',
    message: 'What is the team manager\'s email?',
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the team manager\'s office number?',
  },
];
const Engineer_questions = [
 /* {
    type: 'list',
    name: 'memberType',
    message: 'Which type of team member would you like to add?',
    choices:['Engineer', 'Intern'],
  },*/
  {
    type: 'input',
    name: 'name',
    message: 'What is the your Engineer\'s name?',
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the your Engineer\'s id?',
  },
  {
    type: 'email',
    name: 'email',
    message: 'What is you engineer\'s email?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your engineer\'s Github username?',
  },  
];
const Intern_questions = [
  /* {
     type: 'list',
     name: 'memberType',
     message: 'Which type of team member would you like to add?',
     choices:['Engineer', 'Intern', 'I do\'t want to add any more team member'],
   },*/
   {
     type: 'input',
     name: 'name',
     message: 'What is the your Intern\'s name?',
   },
   {
     type: 'input',
     name: 'id',
     message: 'What is the your Intern\'s id?',
   },
   {
     type: 'email',
     name: 'email',
     message: 'What is you Intern\'s email?',
   },
   {
     type: 'input',
     name: 'school',
     message: 'What is your Intern\'s school/university name?',
   },  
 ];
 
const promptUser = () => {
  return inquirer.prompt(questions);
};

const generateREADME = (answers) =>
  `# ${answers.title}
  ${answers.badge}

  ## Description
  ${answers.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${answers.installation}

  ## Usage
  ${answers.usage}
  
  ## License
  ${answers.license}
  
  ## Contributing
  ${answers.contribution}

  ## Tests
  ${answers.test}

  ## Questions
  Github link :[${answers.github}](https://github.com/${answers.github})

  Reach me with additional questions at: ${answers.email}
 `

const init = (tp) => {
  questions = eval(tp+"_questions");
  promptUser()
    .then((answers) =>{
      //console.log(answers);
      switch (tp){
        case 'Manager':
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // console.log(manager.getName()+", "+manager.getId()+", "+manager.getEmail()+", "+manager.officeNumber+", "+manager.getRole());
          init('Type');
          break;
        case 'Engineer':
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // console.log(engineer.getName()+", "+engineer.getId()+", "+engineer.getEmail()+", "+engineer.github+", "+engineer.getRole());
          init('Type');
          break;
        case 'Intern':
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        // console.log(intern.getName()+", "+intern.getId()+", "+intern.getEmail()+", "+intern.school+", "+intern.getRole());
          init('Type');
          break;
        case 'Type':
          if(answers.memberType === 'Engineer' || answers.memberType==='Intern'){
            init(answers.memberType);
            break;
          }else{
            tp = "";
          }
      }
      //writeFileAsync('genREADME.md', generateREADME(answers))
    })
    .then(() => {if(tp===''){console.log('Successfully got answers');}})
    .catch((err) => console.error(err));
};

init('Manager');
