/**
 * Created by hexun on 2015/8/4.
 */
var Sequelize = require('sequelize');
//var sequelize = new Sequelize('node', 'root', 'root', {host : '175.17.100.210', port : '3306', dialect : 'mysql'});
var sequelize = new Sequelize('mysql://root:root@175.17.100.210:3306/node', {
    define: {
        timestamps: false // true by default
    }
});

exports.sequelize = sequelize;