const express = require('express')
const bodyParser = require('body-parser')

global.books = [];
const core = require('./core');
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', core.HealthCheck)
app.get('/books', core.BooksGet)
app.post('/books', core.BooksPost)

app.listen(3000, () => console.log('Books API listening on port 3000'))