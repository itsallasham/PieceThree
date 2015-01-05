var ctrl = require('../app_server/controllers/main');

module.exports = function(app) {
	app.get('/', ctrl.home);
	app.get('/catalog', ctrl.catalog);
	app.get('/sponsorships', ctrl.sponsorships);

};