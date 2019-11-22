var express = require('express');
var router = express.Router({ mergeParams: true });
var crud = require('../models/CRUD')
var sendingModel = require('../models/sendinground')
var db = require('../dbconnection');
var messageError = {
    error: {
        code: '400',
        message: 'Invalid request'
    }
};

router.get('/', function (req, res, next) {
    sendingModel.getAllRound((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});

router.get('/messenger', function (req, res, next) {
    sendingModel.getMessenger((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});

router.get('/car', function (req, res, next) {
    sendingModel.getCar((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            carList = result.map(i => i.License_plate)
            console.log(carList)
            res.json(carList);
        }
    })
});

router.get('/invoice', function (req, res, next) {
    sendingModel.getInvoice((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            console.log(result)
            res.json(result);
        }
    })
});


router.delete('/del', function (req, res, next) {
    const { ID } = req.body
    console.log(ID)
    const newID = ID ? ID : ''
    sendingModel.deleteByID(newID, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);

        }

    });
});

router.put('/add', function (req, res, next) {
    const { ID, Depart_time, Arrive_time, Messenger_SSN, License_plate } = req.body
    //console.log(ID,Depart_time,Arrive_time,Messenger_SSN,License_plate)

    sendingModel.addRound(ID, Depart_time, Arrive_time, Messenger_SSN, License_plate, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);
        }

    });
});

module.exports = router;