var express = require('express');
var path = require('path');
var axios = require('axios');
var http = require('http')

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': '*'
    });
    next();
});

// api start
var getListAPI = require('./config/proxyApi').getListAPI;
var getDetailAPI = require('./config/proxyApi').getDetailAPI;
var getBeforeStoryAPI = require('./config/proxyApi').getBeforeStoryAPI;
var getThemesAPI = require('./config/proxyApi').getThemesAPI;


app.get('/api/topStory', getListAPI);
app.get('/api/detail/*', getDetailAPI);
app.get('/api/before/*', getBeforeStoryAPI);
app.get('/api/themes', getThemesAPI);

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(3001, function() {
    console.log('App is running on port 3001.')
});