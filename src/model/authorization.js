/**
 * Created by hexun on 2015/8/6.
 */

var Sequelize = require('sequelize');
var sequelize = require('../db/sequelize').sequelize;

var Authorization = sequelize.define('authorization', {

        name: {
            type : Sequelize.STRING,
            field: 'name'
        },
        level: {
            type: Sequelize.INTEGER
        }

    }, {
        timestamps: false,
        tableName: 't_authorization'
    }
);

exports.Authorization = Authorization;
