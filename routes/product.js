var express = require('express');
var router = express.Router({ mergeParams: true });
var crud = require('../models/CRUD')
var productModel = require('../models/product')
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request'
    }
};

router.get('/', function (req, res, next) {
    productModel.getAll((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }
    })
});


module.exports = router;