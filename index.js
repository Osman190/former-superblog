require('dotenv').config();

var uuidv4 = require('uuid/v4');
var express = require('express');
var app = express();
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

mongoose.connect(process.env.MONGOURL);

app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var postsRouts = require('./routes/posts');
var indexRouts = require('./routes/index');
app.use('/posts', postsRouts);
app.use('/', indexRouts);

app.listen(process.env.PORT);
