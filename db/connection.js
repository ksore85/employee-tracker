  
const mysql = require('mysql2');

// Connecting to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'kendale1',
        database: 'employee_db'
    },
    console.log('Connected to the employee_db database.')
)

module.exports = db