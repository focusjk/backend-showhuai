var db = require('../dbconnection'); //reference of dbconnection.js

const getAll = (callback) => {
    console.log('get all product')
    return db.query(`SELECT * FROM Product`, callback);
}
// cosnt login: function (table, callback) {
//         return db.query("SELECT * FROM " + table, callback);
//     },
//     getById: function (id, table, callback) {
//         return db.query("SELECT * FROM " + table + " WHERE Id=?", [id], callback);
//     },
//     insert: function (values, table, callback) {
//         return db.query("INSERT INTO " + table + " SET ?", [values], callback);
//     },
//     delete: function (id, table, callback) {
//         return db.query("DELETE FROM " + table + " WHERE Id=?", [id], callback);
//     },
//     update: function (id, table, values, callback) {
//         return db.query("UPDATE " + table + " SET ? WHERE Id=?", [values, id], callback);
//     }
// };
module.exports = { getAll };