var server = require('./server');
var router = require('./router');
var handler = require('./handler');


//define an associative array for hanlding
var handle = {}

handle["/"] = handler.start;
handle["/start"] = handler.start;
handle['/upload'] = handler.upload;
handle['/view'] = handler.view;
handle['/uploadFile'] = handler.uploadFile;



server.start(router.route, handle);