const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.engine('handlebars', require('express-handlebars').engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, '../../static')));
app.use('/', require(path.join(__dirname, '../../routes/blog.js')));

module.exports.handler = serverless(app);