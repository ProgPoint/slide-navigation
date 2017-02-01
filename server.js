'use strict';
var express = require('express');
// Setup server
var app = express();
var server = require('http').createServer(app);
app.use('/', express.static('app'));

// Start server
server.listen(9090, '0.0.0.0', function () {
  console.log('Express server listening on %d', 9090);
});

// Expose app
exports = module.exports = app;