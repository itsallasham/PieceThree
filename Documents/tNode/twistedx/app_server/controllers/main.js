

/* GET home page */
exports.home = function(req, res){
res.render('home', { title: 'Twisted-X Boots' });
};

/*GET catalog page*/
exports.catalog = function(req, res) {
	res.render('index', { title: 'Catalog'});
};

/*GET sponsorships page*/
exports.sponsorships = function(req, res) {
	res.render('sponsorships', { title: 'sponsorships'});
};