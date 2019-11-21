var express = require('express');
var router = express.Router({ mergeParams: true });
var crud = require('../models/CRUD')
var reviewModel = require('../models/review')
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request'
    }
};

router.get('/', function (req, res, next) {
    const { userId } = req.query
    console.log(userId)
    reviewModel.getProductByUserId(userId, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});

router.post('/', function (req, res, next) {
    reviewModel.insertReview(req.body, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            if (result.insertId != null) {
                const reviewId = result.insertId
                reviewModel.updateTransaction(reviewId, req.body, (err, result) => {
                    if (err) {
                        res.json(err);
                    }
                    else {
                        console.log(result)
                    }
                })
                res.json({ success: true, reviewId });
            } else {
                res.json({ success: false })
            }
        }
    })

});

module.exports = router;