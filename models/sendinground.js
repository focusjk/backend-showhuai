var db = require('../dbconnection'); //reference of dbconnection.js

const getAllRound = (callback) => {
    console.log('get all sending round')
    return db.query('SELECT * FROM Sending_round', callback);
}

const getCar = (callback) => {
    console.log('get all cars')
    return db.query('SELECT * FROM Car', callback);
}

const getMessenger = (callback) => {
    console.log('get all messenger')
    return db.query('SELECT * FROM Messenger', callback);
}

const getInvoice = (callback) => {
    console.log('get all invoice with null sending round')
    return db.query(`select * from Invoice
    inner join Member_invoice on Invoice.ID =  Member_invoice.ID 
    where Sending_round_ID is null;`, callback);
}

const deleteByID = (srID, callback) => {
    console.log('delete sending round id: = ', srID)
    return db.query('DELETE FROM Sending_round WHERE ID=?', srID, callback);
}

const addRound = (srID, depart, arrive, msg, plate, callback) => {
    console.log('add new round id: = ', srID)
    return db.query("INSERT INTO Sending_round VALUES (" + srID + ',"' + depart + '","' + arrive + '","' + msg + '","' + plate + '")', callback);
}

// "ID": 2,
// "Depart_time": "2019-11-09 09:30:23",
// "Arrive_time": "2019-11-09 09:30:23",
// "Messenger_SSN": "1234512345123",
// "License_plate": "AB1234"

module.exports = { getAllRound, deleteByID, addRound, getCar, getMessenger, getInvoice };