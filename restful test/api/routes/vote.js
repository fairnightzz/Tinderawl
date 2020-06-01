const express = require('express');

const router = express.Router();

router.get('/', (req,res, next) => {
    res.status(201).json({
        message: 'Handinling get requests'
    })
});

//For a specific word
router.get('/:userID', (req, res, next) => {
    const id = req.params.userID;
    if (id == "Zhehai"){
        res.status(201).json({
            message: "You are da admin"
        })
    }
    else{
        res.status(201).json({
            message: 'A rando user id' ,
            id: id
        })
    }
})

router.post('/', (req,res, next) => {

    const request = {
        id: req.body.id,
        pic: req.body.pic

    }


    res.status(201).json({
        message: 'Handinling post requests',
        othermessage: request
    })
});
module.exports = router;

//There is stuff like patch, delete, etc