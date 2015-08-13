/**
 * Created by hexun on 2015/8/4.
 */

var Sequelize = require('sequelize');
var sequelize = require('../db/sequelize').sequelize;
var Authorization = require('./authorization').Authorization;

var User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
    //,
    //fullId: {
    //    type: Sequelize.STRING,
    //    get: function () {
    //        return this.getDataValue('username') + '_' + this.getDataValue('password');
    //    },
    //    set: function(value) {
    //        return this.setDataValue('fullId',value);
    //    }
    //}
}, {
    timestamps: true,
    //paranoid: true,
    //underscored: true,
    //freezeTableName: true,
    tableName: 't_user',

    instanceMethods: {

    },
    classMethods: {

    },
    //getterMethods: {
    //    fullId: function () {
    //        return this.username + '*' + this.password;
    //    }
    //},
    //setterMethods: {
    //    fullId: function (value) {
    //        this.setDataValue('fullId','*'+value+'*');
    //    }
    //},
    defaultScope: {

    },
    scopes: {

    }
});

User.hasMany(Authorization, { foreignKey: 'userId'});
Authorization.belongsTo(User, { foreignKey: 'userId'});

exports.User = User;