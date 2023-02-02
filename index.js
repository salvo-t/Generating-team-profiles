const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { type } = require("os");
const { default: Choices } = require("inquirer/lib/objects/choices");
const { finished } = require("stream");
const finishedTemplate = require("./src/template")

const newTeamMember = [];

const menu = async () => {
  const answers = await inquirer
  .prompt([
      {
          type: "input",
          name: "name",
          message: "What is the team members name?"
        },
        {
          type: "input",
          name: "id",
          message: "What is the team members id?"
        },
        {
          type: "input",
          name: "email",
          message: "What is the team members email?"
        },
        {
          type: "list",
          name: "role",
          message: "What is the team members role?",
          choices: ["Engineer", "Intern", "Manager"]
        }
  ])
  if (answers.role === "Manager") {
    const managerQuestions = await inquirer
    .prompt ([
      {
        type: "input",
        name: "officeNumber",
        message: "What is the managers office number?"
      },
      {
        type: "list",
        name: "role",
        message: "Which new team member would you like to add?",
        choices: ["Engineer", "Intern", "Manager"]
      },
    ])
    const newManager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      managerQuestions.officeNumber
    );
    newTeamMember.push(newManager);
  }
  if (answers.role === "Intern") {
    const internQuestions = await inquirer
    .prompt ([
      {
        type: "input",
        name: "school",
        message: "what school does the intern go to?"
      }
    ])
    const newIntern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      internQuestions.school
    );
    newTeamMember.push(newIntern);
  }
   if (answers.role === "Engineer") {
    const engineerQuestions = await inquirer
    .prompt ([
      {
        type: "input",
        name: "github",
        message: "What is the GitHub for the engineer"
      },
    ])
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      engineerQuestions.github
    )
    newTeamMember.push(newEngineer)
  }
  inquirer.prompt([
    {
      type: "list",
      name: "teamMember",
      message: "Are you finished? Or would you like to add another team member?",
      choices: ["Finished", "Add new team member"]
    }
  ])
  .then((responce) => {
    if (responce.teamMember === "Add new team member") {
      return menu()
    }
    return finishedTeam()
  })
};

function finishedTeam() {
  // finishedTemplate(newTeamMember)

  fs.writeFileSync("index.html", finishedTemplate(newTeamMember))
}

menu()

