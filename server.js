const express = require('express')
const app = express()
const winston = require('winston')


require('./startup/logging')()
require('./startup/session')(app)
require('./startup/flashMessaging')(app)
require('./startup/routes')(app)
require('./startup/views')(app)
require('./startup/db')()



const port = process.env.PORT || 5000

const server = app.listen(port, () => {
    winston.info(`Listening on port ${port}...`)
})

module.exports = server