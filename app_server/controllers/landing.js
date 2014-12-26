/*get landing page*/
exports.landing = function(req, res) {
	res.render('landing', {title: 'P-IIV'});
};