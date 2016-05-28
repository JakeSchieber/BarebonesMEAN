"use strict";
var co = require('co');
module.exports = function (app) {
    app.get('/api/test', function (req, res) {
        res.send("API is up...");
    });
    app.get('*', function (req, res) {
        res.sendfile('./public/index.html');
    });
};
