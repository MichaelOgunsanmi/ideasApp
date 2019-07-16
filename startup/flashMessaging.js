const flash = require('connect-flash')

module.exports = function (app) {
    app.use(flash()),
    app.use( (req, res, next) => {
        res.locals.successMessage = req.flash('successMessage')
        res.locals.errorMessage = req.flash('errorMessage')
        res.locals.error = req.flash('error')

        next()
    })
}