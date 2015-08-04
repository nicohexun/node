/**
 * Created by hexun on 2015/8/4.
 */
var Sequelize = require('sequelize');
//var sequelize = new Sequelize('node', 'root', 'root', {host : '175.17.100.210', port : '3306', dialect : 'mysql'});
var sequelize = new Sequelize('mysql://root:root@175.17.100.210:3306/node');

var User = sequelize.define('User', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
}, {
    tableName: 't_user'
});

sequelize.sync({force: true}).then(function() {
    return User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    });
}).then(function(jane) {
    console.log(jane.get({
        plain: true
    }))
});