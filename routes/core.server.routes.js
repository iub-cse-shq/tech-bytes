'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('./../controllers/core.server.controller');
	app.route('/').get(core.index);
	app.route('/post').get(core.post);
	app.route('/about').get(core.about);
	app.route('/contact').get(core.contact);
	app.route('/post').get(core.post);
	app.route('/contact').get(core.contact);
	app.route('/adminindex').get(core.adminindex);
	app.route('/addcat').get(core.addcat);
	app.route('/addpost').get(core.addpost);
	app.route('/catlist').get(core.catlist);
	app.route('/inbox').get(core.inbox);
	app.route('/postlist').get(core.postlist);
	app.route('/social').get(core.social);
	app.route('/titleslogan').get(core.titleslogan);
};