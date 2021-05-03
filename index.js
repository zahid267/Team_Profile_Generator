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
const ManagerCard = (manager) =>{
return `<div>
<span class="member">
<h3>${manager.name}</h3>
<h4><i class="fas fa-mug-hot mr-2"></i>Manager</h4>
</span>
  <p>ID: ${manager.id}</p>
  <p>Email: <a href="mailto:${manager.email}">${manager.email}</a>
  </p>
  <p>Office Number: ${manager.officeNumber}</p>
</div>`
};
const EngineerCard = (engineer) =>{
  return `<div>
  <span class="member">
  <h3>${engineer.name}</h3>
  <h4><i class="fa fa-glasses"></i> Engineer</h4>
  </span>
    <p>ID: ${engineer.id}</p>
    <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
    <p>Github: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
</div>`
};
const InternCard = (intern) =>{
  return `<div>
  <span class="member">
  <h3>${intern.name}</h3>
  <h4><i class="fa fa-user"></i> Intern</h4>
  </span>
    <p>ID: ${intern.id}</p>
    <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
    <p>School: ${intern.school}</p>
</div>`
};
const generateHTML = (team) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="style.css" />
      <title>Team Profile</title>
    </head>
  
    <body>
      <header>
        <h1>Team Profile</h1>
      </header>
      <main class="container">
        <section class="team">
          
             ${team} 
             
        </section>
      </main>
    </body>
  </html>`;
var team = "";
const init = (tp) => {
  questions = eval(tp+"_questions");
  promptUser()
    .then((answers) =>{
      //console.log(answers);
      switch (tp){
        case 'Manager':
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        // console.log(manager.getName()+", "+manager.getId()+", "+manager.getEmail()+", "+manager.officeNumber+", "+manager.getRole());
        team += ManagerCard(manager);  
        init('Type');
          break;
        case 'Engineer':
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        // console.log(engineer.getName()+", "+engineer.getId()+", "+engineer.getEmail()+", "+engineer.github+", "+engineer.getRole());
        team += '\n'+EngineerCard(engineer);  
        init('Type');
          break;
        case 'Intern':
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
        // console.log(intern.getName()+", "+intern.getId()+", "+intern.getEmail()+", "+intern.school+", "+intern.getRole());
        team += '\n'+InternCard(intern);  
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
      if(tp===''){writeFileAsync('./dist/team.html', generateHTML(team))}
    })
    .then(() => {if(tp===''){console.log('Successfully created team.html page in output folder.');}})
    .catch((err) => console.error(err));
};

init('Manager');
