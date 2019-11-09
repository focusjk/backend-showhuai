var mysql = require('mysql');
var connection = mysql.createPool({
  host: 'localhost',
  // port: '3306',
  user: 'root',
  password: 'root',
  database: 'showhuai',
  insecureAuth: true
});
module.exports = connection;