const express = require('express')
const exphbs  = require('express-handlebars');

const hbs = exphbs.create()


module.exports = function (app) {
    app.use(express.static('public'))
    app.engine('handlebars', hbs.engine)
    app.set('view engine', 'handlebars')   
}