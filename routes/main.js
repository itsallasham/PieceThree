var ctrl = require('../app_server/controllers/landing');

module.exports = function(app) {
	app.get('/', ctrl.landing);
};


console.log('in main.js');