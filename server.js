var http = require('http');
var util = require('util');
var fs = require('fs');
var path = require('path');
var url = require('url');


function start(route, handle) {

var server = http.createServer(function onReqest(req, res) {

	//returns the pathname as parsed out by the url.parse method, applied to the req url
	var pathname = url.parse(req.url).pathname;

	util.log('request for ' + pathname + ' recieved.');

	route(req, res, pathname, handle);

});

server.listen(5000, function() {
	util.log('Server Listening on port 8888');
});
}

exports.start = start;
