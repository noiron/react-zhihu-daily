var express = require('express');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('./webpack.config');
var request = require('request');

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    // hot: true,
}));

app.use(require('webpack-hot-middleware')(compiler));


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get("/api/*", function (req, res) {
    var newUrl = 'http://localhost:3001' + req.url;
    request(newUrl).pipe(res);
});


app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        // open('http://localhost:' + port);
    }
});