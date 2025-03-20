const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

app.engine('handlebars', require('express-handlebars').engine());
app.set('view engine', 'handlebars');

// Serve static files
app.use(express.static(path.resolve(__dirname, '../../static')));

// Route handling
try {
  app.use('/', require(path.resolve(__dirname, '../../routes/blog')));
} catch (error) {
  console.error('Error loading routes:', error);
}

module.exports.handler = serverless(app);