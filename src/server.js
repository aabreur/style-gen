var express = require('express');
var app = express();
const path = require('path');

app.use(express.json());

app.use(require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../../client/static')));

module.exports = app;