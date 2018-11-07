// Requiring mysql
const mysql = require('mysql')

//Creating database connection
const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: Null,
    database: 'icecream_db'
})

// Checking the connection
connection.connect(function (error) {
    if (error) {
        console.log('Error connection: ' + error.stack)
    }
    console.log("Connected as ID " + connection.threadId)
})

// Exporting the connection module
module.exports = connection