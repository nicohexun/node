var connection = require("../db/mysql").connection;
var pool = require("../db/mysql").pool;

exports.getUsers = function() {
    connection.connect();

    connection.query('SELECT * from t_user', function(err, rows, fields) {
        if (err) throw err;

        console.log('Row count is:', rows.length);
        rows.forEach(function(row) {
            console.log('Data is:\n ', row);
        });
        fields.forEach(function(field) {
            console.log('Field name is: ', field.name);
        });

    });

    connection.end();
};

exports.getUsersByPool = function() {
    pool.getConnection(function(err, conn) {
        // Use the connection
        conn.query( 'SELECT * FROM t_user', function(err, rows, fields) {

            if(err) {
                console.log('err: ', err);
            }

            console.log('Row count is:', rows.length);
            rows.forEach(function(row) {
                console.log('Data is:\n ', row);
            });
            fields.forEach(function(field) {
                console.log('Field name is: ', field.name);
            });

            // And done with the connection.
            conn.release();

            // Don't use the connection here, it has been returned to the pool.
        });
    });

};