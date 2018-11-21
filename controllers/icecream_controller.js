// Require orm file
const orm = require('../config/orm')
// Requiring express
const express = require('express')
const router = express.Router()

// Creating routes to handle all of the requests
router.get('/', function (req, res) {
        orm.selectAll('icecream', function (data) {

            console.log(data)

            res.render('index', { icecream: data })
        })
    })

router.post('/api/icecream', function (req, res) {
        orm.insertOne(req.body.icecream_name, req.body.devoured, function (result) {

            res.json({ id: result.insertId })
        })
    })

router.put('/api/icecream/:id', function (req, res) {
        orm.updateOne('devoured', 1, req.params.id, function (result) {

            // res.status(200)
            res.json({
                success: true,
                something: 'idk'
            })
        })
    })

// Exporting the router
module.exports = router