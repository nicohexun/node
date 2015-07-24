var connection = require("../db/mysql").connection;

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

