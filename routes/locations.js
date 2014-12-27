var ctrl = require('../app_server/controllers/locations');

module.exports = function(app) {
	app.get('/', ctrl.home);
	app.get('/home', ctrl.home);
	app.get('/location', ctrl.locationInfo);
	app.get('/location/review/new', ctrl.addReview);
}; 