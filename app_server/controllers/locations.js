/*get home page*/
module.exports.home = function(req,res) {
	res.render('locations-list', {
		title: 'Piece-IIV - Drop and Go',
		pageHeader: {
			title: 'Piece-IIV',
			strapline: 'Drop and Go!'
		},
		sidebar: "Come help us with your mom!",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m'
		},{
			name: 'Cafe Hero',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'Burger Queen',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 2,
			facilities: ['Food', 'Premium wifi'],
			distance: '250m'
		}]

		
	});
};

/*get location info page*/
module.exports.locationInfo = function(req,res) {
	


	res.render('location', {
		title: 'Location Info - Does it blow?',
		pageHeader: {
			title: 'Not THIS ONE',
			strapline: 'Does it suck?'
		},
		sidebar: "We can help take it to your friends mom!",
		locations: [{
			name: 'Starcups',
			address: '125 High Street, Reading, RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '100m',
			hours: [
				'Monday - Friday: 7:00am - 7:00pm',
				'Saturday: 8:00am - 5:00pm',
				'Sunday: Closed'
			]
		}]
	});

};	

 
/*get add review page*/
module.exports.addReview = function(req, res) {
	res.render('addReview', {
		title: 'Add Review',
		pageHeader: {
			title: 'Add review',
			strapline: 'Share your experience with the world'
		}
	});
};