// Requiring mysql
const mysql = require('mysql')

const connection

//Creating database connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'icecream_db'
})
}

// Checking the connection
connection.connect(function (error) {
    if (error) {
        console.log('Error connection: ' + error.stack)
    }
    console.log("Connected as ID " + connection.threadId)
})

// Exporting the connection module
module.exports = connection