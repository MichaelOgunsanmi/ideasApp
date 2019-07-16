module.exports = function (router, Idea) {
    router.get('/', async (req, res) => {
        let ideas = await Idea.find({}).sort("-date")

        res.render('ideas/displayIdeas', {
            title: "Ideas | All Ideas",
            ideas
        })
    })

}