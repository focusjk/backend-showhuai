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
    const { id } = req.body
    console.log(id)

    userModel.login(id, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            if (result.length > 0) {
                res.json({ success: true, ...data });
            } else {
                res.json({ success: false })
            }
        }
    })
});

router.get('/profile', function (req, res, next) {
    const { ID } = req.query
    userModel.getByID(ID, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            const data = result[0]
            console.log(data)
            res.json(data);
        }
    })
});

router.post('/profile/edit', function (req, res, next) {
    const {ID, ...data} = req.body
    userModel.updateProfileByID(ID, data, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ sucess: true });
        }
    });
}); 

module.exports = router;