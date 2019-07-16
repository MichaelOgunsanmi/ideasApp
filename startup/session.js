const session = require('express-session')
const config = require('config')


module.exports = function (app) {
    app.use(session({
        secret: config.get('sessionSecret'),
        resave: true,
        saveUninitialized: true
    }))
}