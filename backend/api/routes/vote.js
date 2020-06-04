const express = require('express');
const router = express.Router();

//Image
router.get('/',(req,res, next) => {
    const request = {
        id:req.body.id
    }

    res.status(201).json({
        message: 'A rando user id' ,
        id: id
    })

})


//Send vote
router.post('/',(req,res,next) => {
    const request = {
        id: req.body.id,
        pic: req.body.pic,
        verdict: req.body.verdict
    }


})



module.exports = router;