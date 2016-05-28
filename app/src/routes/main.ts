/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

var co = require('co');

module.exports = function(app) {
  
  /**
   * test
   */
  app.get('/api/test', function(req, res) {
    res.send("API is up...");
  });
  
  /**
   * Frontend angular app.
   */
  app.get('*', function(req, res) {
    // route all other requests to the frontend angular app.
    res.sendfile('./public/index.html');
	});
};