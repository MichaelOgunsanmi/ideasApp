const index = require('../routes/index')
const about = require('../routes/about')



module.exports = function (app) {
    app.use('/', index)
    app.use('/about', about)
    
}