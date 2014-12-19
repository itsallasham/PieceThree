var querystring = require('querystring'),
	fs = require('fs'),
	formidable = require('formidable'),
	util = require('util');

	function start(req,res) {

		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('start');
		res.end();
	
	};

	function upload(req, res) {
		util.log('req handler "upload" was called');

		fs.readFile('./index.html', function (err, data) {
			if(err) {throw err;}
			var body = data;
		
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(body);
		res.end();
		});
	};


	function view(req, res) {
		util.log('in the file uploader/view');

		var form = new formidable.IncomingForm();
		util.log('about to parse');

		form.parse(req, function(err, fields, files) {
			if(err) {throw err;}

			util.log('parsing done');

			fs.createReadStream(files.upload.path).pipe(fs.createWriteStream(__dirname + '/tmp/test.png'));
		
			res.writeHead(200, {"Content-Type": "text/html"});
			res.write("received image: <br/>");
			res.write("<img src='/uploadFile' />");
			res.end();

		});

		
	};


	function uploadFile(req, res) {

		res.writeHead(200, {'Content-Type': 'image/png'});
				
		util.log('writing in view')
		fs.createReadStream(__dirname + '/tmp/test.png').pipe(res);

	};


	function login(req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end('Hello, This is login.');
	};

	exports.start = start;
	exports.upload = upload;
	exports.view = view;
	exports.login = login;
	exports.uploadFile = uploadFile;

