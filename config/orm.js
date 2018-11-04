// Requiring the connection.js file
const connection = require('./connection.js')

// Creating methods to send and pull data to the database
const orm = {
    // Selecting all of the information in the table
    selectAll: function (tableInput, cb) {
        let queryString = 'SELECT * FROM ??'

        console.log(queryString)

        connection.query(queryString, tableInput, cb)
    },
    // Inserting one new set of data into the table
    insertOne: function (icecreamuser_name, user_devoured, cb) {
        let queryString = 'INSERT INTO icecream (icecream_name, devoured) VALUES (??, ??)'

        console.log(queryString)

        connection.query(queryString, [icecreamuser_name, user_devoured], cb)
    },
    // Updating one data set in the table
    updateOne: function (colVal, value, id, cb) {
        let queryString = 'UPDATE icecream SET ?? = ? WHERE id = ?'

        console.log(queryString)

        connection.query(queryString, [colVal, value, id], cb)
    }
}
// Exporting the orm module
module.exports = orm