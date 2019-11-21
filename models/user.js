var db = require('../dbconnection'); //reference of dbconnection.js

const login = ({ Username, Password }, callback) => {
    console.log('login')
    return db.query(`SELECT * FROM User WHERE Username=? && Password=?`, [Username, Password], callback);
}

const getByID = (ID, callback)=> {
    console.log('get all user profile with id = ', ID)
    //return db.query(`SELECT * FROM User WHERE ID=?`,[ID], callback);
    return db.query(`SELECT User.ID, User.Username, User.Password, User.Firstname, User.Lastname, User.Email, User.Phone_number, Member.Address_number, Member.Street, Member.Zipcode, Member.Province, Admin.SSN, Admin.Position
    FROM User
                    LEFT JOIN Member ON Member.ID = User.ID
                    LEFT JOIN Admin ON Admin.ID = User.ID Where ID =?`, [ID],callback);

    //ID, Username, Password, Firstname, Lastname, Email, Phone_number,Address_number, Street, Zipcode, Province, SSN, Position
}


/*
SELECT * FROM tumbol 
	LEFT JOIN amphur ON (tumbol.amphur_id=amphur.amphur_id)
	LEFT JOIN province ON (amphur.province_id=province.province_id)
*/

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

const updateProfileByID = (ID,data, callback) => {
    console.log('update user profile by id = ', ID);
    console.log('data',data)
    //return db.query(`UPDATE User SET ? WHERE ID = ?`, [data, ID], callback);
    return db.query(`UPDATE showhuai.User LEFT JOIN showhuai.Member ON User.ID = Member.ID SET ? where User.ID = ?` ,[data, ID], callback);
}

module.exports = { login, getByID, updateProfileByID };