var request = require('request');
var apiOptions = {
	server: "http://localhost:4000"
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = "http://www.piecethree.com"
};

var _showError = function (req, res, status) {
	var title, content;
	if(status === 404) {
		title = "404, page not found"
		content = "The page you seek may exist somewhere within the twisting nether, but it is not here.";
	} else {
		title = status + ", something's gone wrong";
		content = "Something, somewhere, has gone just a little bit wrong.";
	}
	res.status(status);
	res.render('generic-text', {
		title: title,
		content: content
	});
};

var renderDetailPage = function(req, res, locDetail) {
	res.render('location', {
		title: locDetail.name,
		pageHeader: {
			title: locDetail.name,
			strapline: ''
		},
		sidebar: {
			context: 'is on here because the serve sushi',
			callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
		},
		location: locDetail
	});
}

var renderHomepage = function(req, res, responseBody) {
	var message;
	if(!(responseBody instanceof Array)) {
		message = "API lookup error";
		responseBody = [];
	} else {
		if(!responseBody.length) {
			message = "No places found nearby";
		}
	}
	res.render('locations-list', {
		title: 'Piece-IIV',
		pageHeader: {
			title: 'Piece-IIV',
			strapline: ''
		},
		sidebar: "Of all of these locations, at least one must serve something edible.",
		locations: responseBody,	
		message: message
	});
};

var _formatDistance = function (distance) {
	var numDistance, unit;
	if (distance > 1) {
		numDistance = parseFloat(distance).toFixed(1);
		unit = 'm'
	}
	return numDistance + unit;
}
/*get home page*/
module.exports.home = function(req,res) {
	var requestOptions, path;
	path = '/api/locations';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {
			lng : -97.1016460,
			lat : 33.1640220, 
			maxDistance: 30
		}

	};
	request (
		requestOptions,
		function(err, response, body) {
			var i , data;
			data = body;
			if(response.statusCode === 200 && data.length) {
				for (i=0; i < data.length; i++) {
					data[i].distance = _formatDistance(data[i].distance);
				}
			}
			renderHomepage(req, res, data);
		});
	
};

/*get location info page*/
module.exports.locationInfo = function(req,res) {
	var requestOptions, path;
	path = '/api/locations/' + req.params.locationid;
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {}
	};
	request(
		requestOptions,
		function(err, response, body) {
			var data = body;
			if(response.statusCode === 200) {
				data.coords = {
					lng : body.coords[0],
					lat : body.coords[1]
				};
				renderDetailPage(req, res, data);
			} else {
			_showError(req, res, response.statusCode);
			}
		});
};

 
/*get add review page*/
module.exports.addReview = function(req, res) {
	res.render('addReview', {
		title: 'Add Review',
		pageHeader: {
			title: 'Add review',
			strapline: 'Tell has how it went down'
		},
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		}]
	});
};