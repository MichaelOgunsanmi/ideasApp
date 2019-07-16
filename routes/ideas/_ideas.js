const express = require('express')
const router = express.Router()

const { validate, Idea } = require('../../models/Ideas')



const addIdea = require('./addIdea')
const editIdea = require('./editIdea')
const deleteIdea = require('./deleteIdea')
const displayIdeas = require('./displayIdeas')




addIdea(router, validate, Idea)
editIdea(router, validate, Idea)
deleteIdea(router, Idea)
displayIdeas(router, Idea)




module.exports = router