var db = require('../dbconnection'); //reference of dbconnection.js

const getAll = (keyword, callback) => {
    console.log('get all product with keyword = ', keyword)
    return db.query(`SELECT * FROM Product WHERE Name LIKE '%` + keyword + `%' OR Detail LIKE '%` + keyword + `%'`, callback);
}

const getByType = (keyword, type, callback) => {
    console.log('get all product with typeID = ', type, ' with keyword = ', keyword)
    return db.query(`SELECT * FROM Product INNER JOIN Is_member_of ON Is_member_of.Product_ID=Product.ID WHERE Name LIKE '%` + keyword + `%' OR Detail LIKE '%` + keyword + `%'`, callback);
}

const getTypeProduct = callback => {
    console.log('get type of product')
    return db.query(`SELECT * FROM Type_product`, callback);
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
module.exports = { getAll, getByType, getTypeProduct };