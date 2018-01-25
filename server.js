var express = require('express');
var path = require('path');
var app = express();
var server = app.listen(process.env.PORT || 3000);

app.use(express.static('dist'));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
});