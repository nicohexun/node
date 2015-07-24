var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

var small = new Tank({ size: 'small' ,name:'a',aa:'c'});
small.save(function (err) {
    if (err) return console.log(err);
});
//
//Tank.create({ size: 'small' }, function (err, small) {
//    if (err) return console.log(err);
//});