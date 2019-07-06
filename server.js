const express = require('express')
const app = express()
const winston = require('winston')

require('./startup/logging')()
require('./startup/db')()





const port = process.env.PORT || 5000 || 8080

const server = app.listen(port, () => {
    winston.info(`Listening on port ${port}...`)
})

module.exports = server