var db = require('../dbconnection');

const getAll = (keyword, callback) => {
    console.log('get all product with keyword = ', keyword)
    return db.query(`SELECT * FROM Product WHERE Name LIKE '%` + keyword + `%' OR Detail LIKE '%` + keyword + `%'`, callback);
}

const getByType = (keyword, type, callback) => {
    console.log('get all product with typeID = ', type, ' with keyword = ', keyword)
    return db.query(`SELECT * FROM Product INNER JOIN Is_member_of ON Is_member_of.Product_ID=Product.ID WHERE (Name LIKE '%` + keyword + `%' OR Detail LIKE '%` + keyword + `%') AND Is_member_of.Type_product_ID=?;`, [type], callback);
}

const getTypeProduct = callback => {
    console.log('get type of product')
    return db.query(`SELECT * FROM Type_product`, callback);
}

module.exports = { getAll, getByType, getTypeProduct };