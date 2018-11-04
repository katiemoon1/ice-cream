// Bringing in all of our dependencies
const express = require('express')
const exphbs = require('express-handlebars')
const PORT = process.env.PORT || 3030
const app = express()
const routes = require('./controllers/icecream_controller')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('assets'))
app.use(routes)

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.listen(PORT, function () {
    console.log('Server listening on PORT: ' + PORT)
})