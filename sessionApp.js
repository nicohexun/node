/**
 * Created by hexun on 2015/8/10.
 */

var express = require('express');
var session = require('express-session');
var path = require('path');
var app = express();

app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req, res, next) {
    var sess = req.session;
    if (sess.views) {
        sess.views++;
        res.setHeader('Content-Type', 'text/html');
        res.write('<p>views: ' + sess.views + '</p>');
        res.write('<p>expires in: ' + (sess.cookie.maxAge / 1000) + 's</p>');
        res.end();
    } else {
        sess.views = 1;
        res.end('welcome to the session demo. refresh!');
    }
});

module.exports = app;