'use strict';

/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('./../public/views/index.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.post = function(req, res) {
	res.render('./../public/views/post.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.about = function(req, res) {
	res.render('./../public/views/about.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.contact = function(req, res) {
	res.render('./../public/views/contact.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.adminindex = function(req, res) {
	res.render('./../public/views/adminindex.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.addcat = function(req, res) {
	res.render('./../public/views/addcat.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.addpost = function(req, res) {
	res.render('./../public/views/addpost.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.catlist = function(req, res) {
	res.render('./../public/views/catlist.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.inbox = function(req, res) {
	res.render('./../public/views/inbox.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.postlist = function(req, res) {
	res.render('./../public/views/postlist.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.social = function(req, res) {
	res.render('./../public/views/social.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.titleslogan = function(req, res) {
	res.render('./../public/views/titleslogan.ejs', {
		user: req.user || null,
		request: req
	});
};
