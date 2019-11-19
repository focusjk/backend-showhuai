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

router.get('/type', function (req, res, next) {
    productModel.getTypeProduct((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});

router.get('/', function (req, res, next) {
    const { keyword, type } = req.query
    console.log(keyword, type)
    const newKeyword = keyword ? keyword : ''
    if (type) {
        productModel.getByType(newKeyword, type, (err, result) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        })
    } else {
        productModel.getAll(newKeyword, (err, result) => {
            if (err) {
                res.json(err);
            }
            else {
                res.json(result);
            }
        })
    }
});


module.exports = router;