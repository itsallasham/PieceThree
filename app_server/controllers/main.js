var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local');
var request = require('request'); 
var Luser = mongoose.model('User');

var renderSignup= function (req, res) {
	res.render('signup', {
		message: req.flash('signupMessage')
	});
};

var renderSignin = function (req, res) {
	res.render('signin', {
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
	passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    });
};

/*get signin page*/
module.exports.signin = function(req,res) {
	renderSignin(req, res);
};
 
/*POST signin page*/
module.exports.postSignin = function(req, res, next) {
	passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	});
};

/*get signout page*/
module.exports.signout = function(req, res, next) {
	req.logout();
	res.redirect('/');
};

/*get profile page*/
module.exports.profile = function(req, res) {
	renderProfile(req, res);
}
