var path = require('path');
var express = require('express');
var compression = require('compression');

var port = 8888;
var publicPath = path.resolve(__dirname, 'build');
var app = express();

app
    .use(compression({
        filter: function shouldCompress(req, res) {

            if (req.headers['x-no-compression']) {
                return false;
            }

            return compression.filter(req, res);
        }
    }))
    .use(express.static(publicPath))
    .listen(port, function() {
        console.log('Server running on port ' + port);
    });

/*
 var httpProxy = require('http-proxy');

 var proxy = httpProxy.createProxyServer({
    changeOrigin: true,
    ws: true
 });

 app.all('/db/*', function (req, res) {
    proxy.web(req, res, {
        target: 'https://path-to-db.com/'
    });
 });

*/
