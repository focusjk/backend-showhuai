var db = require('../dbconnection'); //reference of dbconnection.js

const login = ({ Username, Password }, callback) => {
    console.log('login')
    return db.query(`SELECT * FROM User WHERE Username=? && Password=?`, [Username, Password], callback);
}

const getByID = (ID, callback) => {
    console.log('get user profile with id = ', ID)
    return db.query(`SELECT * FROM User WHERE ID=?`, [ID], callback);
}

const updateProfileByID = (ID, data, callback) => {
    console.log('update user profile by id = ', ID);
    return db.query(`UPDATE User SET ? WHERE ID = ?`, [data, ID], callback);
}

module.exports = { login, getByID, updateProfileByID };