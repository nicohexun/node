var mysql      = require('mysql');
exports.connection =  mysql.createConnection({
        host: '175.17.100.210',
        user: 'root',
        password: 'root',
        database: 'node'
});