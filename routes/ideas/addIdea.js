module.exports = function (router, validate, Idea) {
    router.get('/add', (req, res) => {
        res.render('ideas/addIdea', {
            title: "Ideas | Add Idea"
        })
    })

    router.post('/', async (req, res) => {    
        const { error } = validate(req.body)

        if (error) return res.status(400).render('ideas/addIdea', {
            title: "Ideas | Add Idea",
            error: {
                key: error.details[0].context.key,
                value:req.body,
                message: error.details[0].message
            }      
        })

        const { title, details } = req.body

        let idea = {
            title: title.trim(),
            details: details.trim()
        }

        idea = new Idea(idea)

        try {
            await idea.save()
            req.flash("successMessage", "Idea Added successfully")
            res.redirect('/ideas')
            
        } catch (error) {
            for (const field in error.errors) {
                console.log(error.errors[field].message);
       
                res.send(error.errors[field].message)
             }  
        }

    })

}


