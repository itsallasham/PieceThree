//var passport = require('passport');
var mongoose = require('mongoose');
var request = require('request'); 
var Luser = mongoose.model('User');
require('../../routes');
var renderSignup= function (req, res) {
	res.render('signup', {
		message: req.flash('signupMessage')
	});
};

var renderLogin = function (req, res) {
	res.render('login', {
		message: req.flash('loginMessage'),
		user: req.user,
		title: 'Sign In',
		pageHeader: {
			title: 'Sign in',
			strapline: 'yes...just log yourself...as in'
		}
	});
};

var renderProfile = function(req, res) {
	res.render('profile', {
		user: req.user
	});
};

var isAuthenticated = function(req, res) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
};

/*get about us page*/
module.exports.about = function(req, res) {
	res.render('about', {
		title: 'About us',
		pageHeader: {
			title: "About us",
			strapline: "gear or crank"
		}
	});
};
/*get signup page*/
module.exports.signup = function(req, res) {
	renderSignup(req, res);
};

/*POST signup page*/
module.exports.postSignup = function(req, res, next) {
	console.log('in postSignup');
	passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    });
};




/*get login page*/
module.exports.login = function(req,res) {
	renderLogin(req, res);
};
 
/*POST signin page*/


/*get signout page*/
module.exports.signout = function(req, res, next) {
	req.logout();
	res.redirect('/');
};

/*get profile page*/
module.exports.profile = function(req, res) {
	renderProfile(req, res);
}
