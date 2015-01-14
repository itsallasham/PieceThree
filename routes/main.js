var ctrl = require('../app_server/controllers/main');

function isLoggedIn(req, res, next) {
	if(req.isAuthenticated())
		return next();
	res.redirect('/');
};

module.exports = function(app, passport) {
	app.get('/about', ctrl.about);
	
	app.get('/signin', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signin'); 
    });
	app.post('/signin', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/signin',
		failureFlash: true
	})
);
	
	app.get('/signup', ctrl.signup);
	
	app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
	
	app.get('/signout', ctrl.signout);
	
	app.get('/profile', isLoggedIn, ctrl.profile);
};


console.log('in main.js');