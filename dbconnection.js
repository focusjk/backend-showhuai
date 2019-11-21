var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  // port: '3306',
  user: 'root',
  password: 'ming',
  database: 'showhuai',
  insecureAuth: true
});
module.exports = connection;