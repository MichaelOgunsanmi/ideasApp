const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('about', {
        title: "Ideas | About" 
    })
})

module.exports = router