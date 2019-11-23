var db = require('../dbconnection');

const addSendingRound = (Invoice_ID, Sending_round_ID, callback) => {
    console.log('update sending round in invoice')
    return db.query(`UPDATE Member_invoice SET Sending_round_ID=? WHERE ID=?`, [Sending_round_ID, Invoice_ID], callback);
}

module.exports = { addSendingRound };