const winston = require('winston')
require('express-async-errors')

const winstonSetting = (filename) => {
    return {
        filename,
        format: winston.format.combine(
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple()
        )
    }
}

module.exports = function () {
    winston.exceptions.handle(
        new winston.transports.File(
            winstonSetting('uncaughtExceptions.log')
        )
    )

    process.on('unhandledRejections', (ex) => {
        throw(ex)
    })

    winston.add(
        new winston.transports.File(
            winstonSetting('logfile.log')
        )
    )

    winston.add(
        new winston.transports.Console({ 
            format: winston.format.simple()
        })
    )
}