var express = require('express');
var router = express.Router({ mergeParams: true });
var crud = require('../models/CRUD')
var sendingModel = require('../models/sendinground')
var memberInvoiceModel = require('../models/member_invoice')
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
            let noDup = {}
            console.log(result)
            result.forEach(({ ID, Invoice_ID, ...data }) => {
                if (noDup[ID]) { noDup[ID].Invoice_ID.push(Invoice_ID) }
                else { noDup[ID] = { ID, ...data, Invoice_ID: [Invoice_ID] } }
            })
            res.json(Object.values(noDup));
        }
    })
});

router.get('/messenger', function (req, res, next) {
    sendingModel.getMessenger((err, result) => {
        if (err) {
            res.json(err);
        }
        else {
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
            carList = result.map(i => i.License_plate)
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

            res.json(result);
        }
    })
});


router.delete('/del', function (req, res, next) {
    const { ID } = req.body
    sendingModel.deleteByID(ID, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(result);

        }

    });
});

router.post('/add', function (req, res, next) {
    const { Invoice_ID, Depart_time, Arrive_time, Messenger_SSN, License_plate } = req.body
    let ID
    //console.log(ID,Depart_time,Arrive_time,Messenger_SSN,License_plate)
    sendingModel.addRound({ Depart_time, Arrive_time, Messenger_SSN, License_plate }, (err, result) => {
        if (err) {
            res.json(err);
        }
        else {
            ID = result.insertId
            Invoice_ID.map(i => {
                memberInvoiceModel.addSendingRound(i, ID, (err, result) => {
                    if (err) {
                        res.json(err);
                    }
                })
            })
            res.json(ID);
        }
    });
});

module.exports = router;