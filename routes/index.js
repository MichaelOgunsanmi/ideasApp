const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: "Ideas | Welcome"
    })
})


module.exports = router