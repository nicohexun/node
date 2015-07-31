/**
 * Created by hexun on 2015/7/30.
 */

var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback) {

    var files = [];

    fs.readdir(dir,function(err, list){
        if(err) return callback(err, list);
        list.forEach(function(file) {
            if(path.extname(file) === '.'+ext)
                files.push(file);
        });
        callback(null, files);
    });

};