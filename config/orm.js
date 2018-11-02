// Requiring the connection.js file
const connection = require('./connection.js')

// Creating methods to send and pull data to the database
const orm = {
    selectAll: function (tableInput, cb) {
        let queryString = 'SELECT * FROM ??'

        console.log(queryString)

        connection.query(queryString, [tableInput], function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    },
    insertOne: function (table, name, devoured, user_name, user_devoured, cb) {
        let queryString = 'INSERT INTO ?? (??, ??) VALUES (??, ??)'

        console.log(queryString)

        connection.query(queryString, [table, name, devoured, user_name, user_devoured], function (error, result) {
            if (error) {
                throw error
            }
            cb(result)
        })
    }
}

module.exports = orm