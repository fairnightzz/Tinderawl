const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

//Image
router.get('/',checkAuth,(req,res, next) => {
    const request = {
        id:req.userData.id
    }

    res.status(201).json({
        message: 'A rando user id' ,
        id: request.id
    })

})


//Send vote
router.post('/',checkAuth,(req,res,next) => {
    const request = {
        id: req.body.id,
        pic: req.body.pic,
        verdict: req.body.verdict
    }


})



module.exports = router;