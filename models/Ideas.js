const mongoose = require('mongoose')
const Joi = require('@hapi/joi')


const properties = {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
}

const ideaSchema = new mongoose.Schema({
    title: properties,
    details: {
        ...properties,
        maxlength: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    _method: {
        ...properties,
        required: false
    }
})

const Ideas = mongoose.model('idea', ideaSchema)

const validateIdea = (idea) => {
    const schema = {
        title: Joi.string().min(2).max(50).required(),
        details: Joi.string().min(2).max(1024).required(),
        date: Joi.date(),
        _method: Joi.string().min(2).max(50)
    }

    return Joi.validate(idea, schema)
}


module.exports.Idea = Ideas
module.exports.validate = validateIdea