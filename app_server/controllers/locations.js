/*get home page*/
module.exports.home = function(req,res) {
	res.render('locations-list', {
		title: 'Piece-IIV - Drop and Go',
		pageHeader: {
			title: 'Piece-IIV',
			strapline: 'Drop and Go!'
		}
	});
};

/*get location info page*/
module.exports.locationInfo = function(req,res) {
	res.render('index', {title: 'Location Info'});
};
 
/*get add review page*/
module.exports.addReview = function(req, res) {
	res.render('index', {title: 'Add Review'});
};