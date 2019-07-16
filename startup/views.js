const express = require('express')
const exphbs = require('express-handlebars');



const compare = require('../views/helpers/compare')


const hbs = exphbs.create({
    helpers: {
        compare
    }
})


module.exports = function (app) {
    app.use(express.static('public')),
    app.engine('handlebars', hbs.engine),
    app.set('view engine', 'handlebars')
}