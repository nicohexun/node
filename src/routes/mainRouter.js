/**
 * Created by hexun on 2015/8/4.
 */
var express = require('express');
var eventproxy = require('eventproxy');
var userDao = require('../dao/userDao');
var router = express.Router();

/* GET home page. */
router.param('a', function(req, res, next) {
    console.log('render a parameter');
    next();
});
router.get('/name', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/name/:a/:b/c/d/', function(req, res, next) {
    console.log('get a parameter');
    res.render('index', { title: req.params.a + ' @ ' + req.params.b });
});
router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    if(!username || !password) {
        res.render('error', {message: '用户名或密码为空!'});
    }

    var ep = new eventproxy();
    ep.fail(next);

    userDao.findUser(username, password, ep);

    ep.all('done', function (data) {
            if (data) {
                res.render('success', {
                    message: '成功登录!',
                    title: 'mysql 使用成功'
                });
            } else {
                res.render('error', {
                    message: '用户名或密码不正确!'
                });
            }
    });

});

module.exports = router;