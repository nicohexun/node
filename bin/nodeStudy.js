/**
 * Created by hexun on 2015/7/30.
 */

//### 1
//console.log('HELLO WORLD');

//### 2
//var myArgv = process.argv;
//
//var sum = 0;
//for (var i = 2; i < myArgv.length; ++i) {
//    sum += Number(myArgv[i]);
//}
//console.log(sum);

//### 3
//var path = process.argv[2];
//var fs = require('fs');
//var buffer = fs.readFileSync(path);
//var contents = buffer.toString();
//console.log(contents.split('\n').length - 1);

//### 4
//var fs = require('fs');
//fs.readFile(process.argv[2],'utf8',function(error, data) {
//    if(error) console.error(error);
//    console.log(data.split('\n').length - 1);
//});

//### 5
//var fs = require('fs');
//var path = require('path');
//fs.readdir(process.argv[2],function(err, list){
//    if(err) console.log(err);
//    list.forEach(function(file) {
//        if(path.extname(file) === '.'+process.argv[3])
//            console.log(file)
//    });
//});

//### 6
//var myModule = require('./myModule');
//
//function callback(err, data) {
//    if(err)
//        console.log(err);
//    else {
//        data.forEach(function (file) {
//            console.log(file);
//        })
//    }
//}
//
//myModule(process.argv[2], process.argv[3], callback);

//### 7
//var http = require('http');
//http.get(process.argv[2], function (response) {
//    response.setEncoding('utf8');
//
//    response.on('error', function (err) {
//        console.log(err);
//    });
//
//    response.on('data', function (data) {
//        console.log(data);
//    });
//
//    response.on('end', function () {
//    });
//});

//### 8
//var http = require('http');
//http.get(process.argv[2], function (response) {
//    var datas = '';
//    response.setEncoding('utf8');
//
//    response.on('error', function (err) {
//        console.log(err);
//    });
//    response.on('data', function (data) {
//        datas += data;
//    });
//    response.on('end', function () {
//        console.log(datas.length);
//        console.log(datas)
//    });
//var http = require('http');
//var bl = require('bl');
//
//http.get(process.argv[2], function (response) {
//    response.pipe(bl(function(error, data) {
//        if(error)
//            return console.error(error);
//        data = data.toString();
//        console.log(data.length);
//        console.log(data);
//    }));
//});

//### 9
//var http = require('http');
//var bl = require('bl');
//var urls = process.argv.slice(2);
//var dict = [];
//var count = 0;
//
//function callback(url,index) {
//    http.get(url, function (response) {
//        response.pipe(bl(function (error, data) {
//            if(error) return console.error(error);
//            dict[index] = data.toString();
//            count++;
//
//            if(count == 3) {
//                console.log(dict[0]);
//                console.log(dict[1]);
//                console.log(dict[2]);
//            }
//
//        }));
//    });
//}
//
//(function doWork(urls) {
//
//    for (var index = 0; index < 3; index ++) {
//        callback(urls[index],index);
//    }
//
//}(urls));


//### 10
//var net = require('net');
//var strftime = require('strftime');
//
//net.create Server(function (socket) {
//
//    socket.write(strftime('%F %H:%M'));
//    socket.end();
//
//    //socket.end(strftime('YYYY-MM-DD hh:mm', new Date()));
//
//}).listen(process.argv[2]);

//### 11
//var http = require('http');
//var fs = require('fs');
//var bl = require('bl');
//
//http.createServer(function (req, res) {
//    res.writeHead(200, {'Content-type':'text/plain'});
//
//    fs.createReadStream(process.argv[3]).pipe(res);
//
//}).listen(process.argv[2]);

//### 12
//var http = require('http');
//var map = require('through2-map');
//
//http.createServer(function (req, res) {
//
//    //res.writeHead(200, {'content-type': 'text/plain'});
//
//    if(req.method != 'POST')
//        return res.end('Send me a POST\n!');
//
//    req.pipe(map(function (chunk) {
//        return chunk.toString().toLocaleUpperCase();
//    })).pipe(res);
//
//}).listen(process.argv[2]);


//### 13
//var http = require('http');
//var url = require('url');
//
//http.createServer(function (req, res) {
//
//    if(req.method != 'GET')
//        return console.error('Give me a GET!\n');
//    var paths = url.parse(req.url, true);
//    if(paths.pathname == '/api/parsetime') {
//
//        var date = new Date(paths.query.iso);
//        console.log(paths.query.iso);
//        var json = {
//            hour: date.getHours(),
//            minute: date.getMinutes(),
//            second: date.getSeconds()
//        };
//        res.end(JSON.stringify(json));
//
//    } else if(paths.pathname == '/api/unixtime') {
//
//        var unixtime = new Date(paths.query.iso).getTime();
//        var unixJson = {
//            unixtime: unixtime
//        };
//        res.end(JSON.stringify(unixJson));
//    }
//}).listen(process.argv[2]);