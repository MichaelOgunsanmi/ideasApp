const express = require('express')
const methodOverride = require('method-override')


const index = require('../routes/index')
const about = require('../routes/about')
const ideas = require('../routes/ideas/_ideas')
const test = require('../routes/test')



module.exports = function (app) {
    app.use(express.json()),
    app.use(express.urlencoded({extended: false})),
    app.use(methodOverride('_method')),
    app.use('/', index),
    app.use('/about', about),
    app.use('/ideas', ideas),
    app.use('/test', test)
}