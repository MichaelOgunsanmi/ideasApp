const mongoose = require('mongoose')


module.exports = function (router, validate, Idea) {
    router.get('/edit/:id', async(req, res) => {
        const idea = await Idea.findOne({
            _id: req.params.id
        })

        res.render('ideas/editIdea', {
            title: "Ideas | Edit Idea",
            idea
        })
    })

    router.put('/:id', async(req, res) => {   
        const { error } = validate(req.body)
        if (error) return res.status(400).render('ideas/editIdea', {
            title: "Ideas | Edit Idea",
            error: {
                key: error.details[0].context.key,
                value:req.body,
                message: error.details[0].message
            }      
        })

        const { title, details } = req.body

        let idea 
        
        const updatedIdea = {
            title: title.trim(),
            details: details.trim()
        }

        idea = await Idea.findOneAndUpdate({_id: mongoose.Types.ObjectId(req.params.id)}, updatedIdea, {
            new: true
         })


        try {
            idea = await idea.save()
            req.flash("successMessage", "Idea updated successfully")
            res.redirect('/ideas')
        } catch (error) {
            for (const field in error.errors) {
                console.log(error.errors[field].message);
                res.send(error.errors[field].message)
             } 
        }
    })
    
}