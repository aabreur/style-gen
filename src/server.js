var express = require('express');
var app = express();
const path = require('path');

app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(require('./routes'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;