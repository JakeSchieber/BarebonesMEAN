// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// custom
var sockets = require('./app/dist/sockets');

// configuration ===========================================
var db = require('./app/dist/config/db');

var port = process.env.PORT || 8086; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/dist/routes/main')(app); // pass our application into our routes

// start app, enabled with socket.io ===============================================
var server = require('http').Server(app);
// var io = require('socket.io')(server);
server.listen(port);

// socket.io routes
// initialize the socket.io connections.
// sockets.socketInit(io);


console.log('Magic happens on port ' + port); 			// shoutout to the user
exports = module.exports = app; 						// expose app

