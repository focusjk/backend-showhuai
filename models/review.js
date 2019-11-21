var db = require('../dbconnection'); //reference of dbconnection.js

const getProductByUserId = (userId, callback) => {
    console.log('get product to review by userId = ',userId)
    return db.query("SELECT * FROM Transaction INNER JOIN Product ON Transaction.Product_ID=Product.ID INNER JOIN Review ON Transaction.Review_ID=Review.ID WHERE Member_ID=?",[userId], callback);
}
const insertReview = ({Rating,Detail,Member_ID},callback) => {
    return db.query("INSERT INTO " + "Review" + " (Rating,Detail,Member_ID) "+"VALUES (?,?,?)", [Rating,Detail,Member_ID], callback);
}
const updateTransaction = (Review_ID,{Product_ID,Invoice_ID},callback) =>{
    console.log(Review_ID, Product_ID,Invoice_ID)
    return db.query("UPDATE Transaction SET Review_ID =? WHERE Product_ID = ? AND Invoice_ID =?",[Review_ID,Product_ID,Invoice_ID],callback);
 
}
module.exports = { getProductByUserId,insertReview,updateTransaction};