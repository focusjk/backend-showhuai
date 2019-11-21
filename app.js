var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var up = require('./routes/up');
var user = require('./routes/user');
var product = require('./routes/product');
var crud = require('./routes/crud');
var send = require('./routes/sendinground');
var review = require('./routes/review');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/up', up);
app.use('/user', user);
app.use('/product', product);
app.use('/review', review);

app.use('/api/v1/crud', crud);
app.use('/sendinground', send);

module.exports = app;
