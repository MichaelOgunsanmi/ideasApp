module.exports = function (router, Idea) {
    router.get('/delete/:id', async (req, res) => {
        try {
            await Idea.findByIdAndRemove(req.params.id)
            req.flash("successMessage", "Idea removed successfully")
            res.redirect('/ideas')

        } catch (error) {
            for (const field in error.errors) {
                console.log(error.errors[field].message);
                res.send(error.errors[field].message)
            }
        }
    })
}