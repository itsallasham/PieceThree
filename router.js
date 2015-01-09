var util = require('util');

function route(req, res, pathname, handle) {
	util.log('about to route a request for ' + pathname);

	if(typeof handle [pathname] === 'function') {
		handle[pathname](req, res, handle);
	
	} else {

		res.writeHead(404, {'Content-Type': 'text/html'});
		res.end('Page not found');
	}

}



exports.route = route;