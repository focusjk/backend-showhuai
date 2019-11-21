var express = require('express');
var router = express.Router({ mergeParams: true });
var crud = require('../models/CRUD')
var userModel = require('../models/user')
var db = require('../dbconnection');
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request'
    }
};

router.post('/login', function (req, res, next) {
    userModel.login(req.body, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            if (result.length > 0) {
                const { Password, ...data } = result[0]
                res.json({ success: true, ...data });
            } else {
                res.json({ success: false })
            }
        }
    })
});

router.get('/profile', function (req, res, next){
    userModel.getByID(req.body, (err, result)=> {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});

router.post('/profile/edit', function (req, res, next){
    userModel.updateProfileByID(req.body.ID, req.body, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({sucess: true});
        }
    });
});



module.exports = router;