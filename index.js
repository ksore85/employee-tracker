const inquirer = require("inquirer");
const mysql = require("mysql2")
require("console.table")
//view all departments, view all roles, view all employees, add a department, add a role and add an employee,

const connection = require("./db/connection") 

connection.connect((err ) => {
    if(err) throw err
    menu()
})

function menu() {
  inquirer
    .prompt({
      type: "list",
      message: "Choose from the following selections",
      name: "Selection",
      choices: [
        "view all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
      ],
    })
    .then((response) => {
      switch (response.Selection) {
        case "view all departments":
          viewDepartment();
          break;
        case "View all roles":
          viewRoles();
          break;
        case "View all employees":
          viewEmployees();
          break;
        case "Add a department":
          addDepartment();
          break;
        case "Add a role":
          addRole();
          break;
        case "Add an employee":
          addEmployee();
          break;
      }
    });
}

function viewDepartment() {
    connection.query("SELECT * FROM departments", (err, data) => {
        console.table(data)
        menu()
    })

}
function viewRoles() {
    connection.query("SELECT * FROM roles", (err, data) => {
        console.table(data)
        menu()
    })
}
function viewEmployees() {
    connection.query("SELECT * FROM employees", (err, data) => {
        console.table(data)
        menu()
    })
}
function addDepartment() {
    inquirer.prompt({
        type: "input",
        message: "What is the new department name?",
        name: "departmentName"
    })
    .then(response => {
        connection.query("INSERT INTO departments (dept_name)  values (?)",response.departmentName, (err, data) => {
            console.log("New department has been added")
            menu()
        })
    }) 
}
function addRole() {

    connection.query("SELECT * FROM departments",(err, departmentData) => {

         const departmentNames  = departmentData.map(department => {
             return {
                 name: department.dept_name,
                 value: department.id
             }
         })

        inquirer.prompt([
            {
            type: "input",
            message: "What is the job title?",
            name: "titleName"
        },{
            type: "input",
            message: "What is the job salary?",
            name: "salary"
        },{
            type: "list",
            message: "Choose a department name",
            name: "departmentId",
            choices: departmentNames 
        }
    
    ])
        .then(response => {
            connection.query("INSERT INTO roles (job_title, salary, department_id)  values (?,?,?)", [response.titleName, response.salary, response.departmentId], (err, data) => {
                console.log("New job role has been added")
                menu()
            })
        }) 
    
    })  
}
function addEmployee() {
    
       inquirer.prompt([
        {
           type: "input",
           message: "What is the new employee's first name?",
           name: "firstName"
       },{
           type: "input",
           message: "What is the new employees last name?",
           name: "lastName"
       },{
           type: "input",
           message: "what is the new employee's job title ID?",
           name: "jobId"
           
       }
   
   ])
       .then(response => {
           connection.query("INSERT INTO employees (first_name, last_name, job_title_id)  values (?,?,?)", [response.firstName, response.lastName, response.jobId], (err, data) => {
               console.log("New employee has been added!")
               menu()
           })
       })    
}

