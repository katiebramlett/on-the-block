var config = require('../config');
var mysql = require('mysql2/promise');

var pool = mysql.createPool({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD
});

module.exports = {
    pool
}