const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(201).json({
        message: "This is the code",
        code: 123123
    })
})

module.exports = router;