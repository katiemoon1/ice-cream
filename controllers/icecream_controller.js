// Require orm file
const orm = require('../config/orm')
// Requiring express
const express = require('express')
const router = express.Router()

// Creating routes to handle all of the requests
router.get('/', function (req, res) {
        orm.selectAll('icecream', function (error, result) {
            if (error) {
                throw error
            }
            res.render('index', { icecream: result })
        })
    })

router.post('/api/icecream', function (req, res) {
        orm.insertOne(req.body.name, req.body.devoured, function (error, result) {
            if (error) {
                throw error
            }
            res.render('index', { icecream: result })
        })
    })

router.update('/api/icecream', function (req, res) {
        orm.updateOne()
    })