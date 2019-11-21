var db = require('../dbconnection'); //reference of dbconnection.js

const login = ({ Username, Password }, callback) => {
    console.log('login')
    return db.query(`SELECT * FROM User WHERE Username=? && Password=?`, [Username, Password], callback);
}

const getByID = (ID, callback) => {
    console.log('get all user profile with id = ', ID)
    return db.query(`SELECT User.ID, User.Username, User.Password, User.Firstname, User.Lastname, User.Email, User.Phone_number,Member.Address_number, Member.Street, Member.Zipcode, Member.Province,Admin.SSN, Admin.Position FROM showhuai.User left join showhuai.Member on User.ID = Member.ID left join showhuai.Admin on Admin.ID = User.ID Where User.ID =?`, [ID], callback);
}

const updateProfileByID = (ID, data, callback) => {
    console.log('update user profile by id = ', ID);
    console.log('data', data)
    return db.query(`UPDATE showhuai.User LEFT JOIN showhuai.Member ON User.ID = Member.ID SET ? where User.ID = ?`, [data, ID], callback);
}

module.exports = { login, getByID, updateProfileByID };