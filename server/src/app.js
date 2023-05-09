const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/index.js')
const bodyParser = require('body-parser')

require('./db.js')

const app  = express()

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb'}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(routes)

app.use((err, req, res) => {
    const status = err.status || 500
    const message = err.message || err

    res.status(status).send(message)
})

module.exports = app