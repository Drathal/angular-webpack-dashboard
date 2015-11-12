var path = require('path');
var express = require('express');
var compression = require('compression');
var httpProxy = require('http-proxy');

var port = 8888;
var publicPath = path.resolve(__dirname, 'build');
var app = express();

var proxy = httpProxy.createProxyServer({
    changeOrigin: true,
    ws: true,
    ignorePath: true
});

app
    .use(compression({
        filter: function shouldCompress(req, res) {
            if (req.headers['x-no-compression']) {
                return false;
            }
            return compression.filter(req, res);
        }
    }))
    .use(function (req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    })
    .use(express.static(publicPath))
    .listen(port, function () {
        console.log('Server running on port ' + port);
    });
