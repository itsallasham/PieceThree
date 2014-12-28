

/*get about us page*/
module.exports.about = function(req, res) {
	res.render('index', {title: 'About us'});
};
 
/*get signin page*/
module.exports.signin = function(req,res) {
	res.render('index', {title: 'Sign In'});
};
