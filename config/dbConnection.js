var mysql = require('mysql');

module.exports = function(app) {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database: 'portal_noticias'
    });
}