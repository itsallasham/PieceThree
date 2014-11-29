var http = require("http");
var url = require("url");


function start(route, handle) {
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
			route(handle, pathname, response, request);
		}
	


		http.createServer(onRequest).listen(process.env.PORT || 5000);
		console.log("Broadcasting on port 5000!");

}

exports.start = start;
