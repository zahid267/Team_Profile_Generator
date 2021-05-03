# Team_Profile_Generator
 10 Object-Oriented Programming: Team Profile Generator

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
This is a command-line application that accepts user input
The user is prompted for his/her team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
When the user clicks on an email address in the HTML
THEN the default email program opens and populates the TO field of the email with the address
WHEN GitHub username is clicked
THEN that GitHub profile opens in a new tab
WHEN the application is atrated
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```


## Getting Started

The application is invoked as below:

```bash
node index.js
```

Here is the directory structure:

```md
test/			// jest tests
  Employee.test.js
  Engineer.test.js
  Intern.test.js
  Manager.test.js
dist/               // rendered output (HTML) and CSS style sheet
lib/				// classes
src/				// template helper code
Assest/   // for generated HTML page
index.js			// runs the application
```

The application include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes are in 'test' directory.


## Review

Here are the contents for review:

* Class test successfull demonstration : https://drive.google.com/file/d/1u3j0zQBKOzIdy9tdmlXUidV4Vdi4Baoh/view?usp=sharing

* Team Profile Generation demonstration is at Google drive : https://drive.google.com/file/d/1ktZP8x8IULZwzgntQgQ4Bb5dZqi2eE8_/view?usp=sharing

* A sample HTML file generated using my application is at: (Assets/Team.html).

* The URL of the GitHub repository: https://github.com/zahid267/Team_Profile_Generator

---
© Created by Muhammad Zahid, May 02, 2021.