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


module.exports = router;