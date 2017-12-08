var mongoose = require('mongoose');
var Blogpost = require('./../models/Blogpost.js');
var errorHandler = require('./errors.server.controller');
var _ = require('lodash');


exports.adminindex = function(req, res) {
	res.render('./../public/views/blogpost/adminindex.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.addcat = function(req, res) {
	res.render('./../public/views/blogpost/addcat.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.catlist = function(req, res){
  Blogpost.find(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      console.log("api called");

       res.render('./../public/views/blogpost/catlist.ejs', {
          user: req.user || null,
          request: req,
          blogposts: data
        });
    }
  });
};

exports.categoryEdit = function(req, res){
  res.render('./../public/views/admin/categoryEdit.ejs', {
    user: req.user || null,
    request: req
  });
};

exports.addpost = function(req, res) {
	res.render('./../public/views/blogpost/addpost.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.inbox = function(req, res) {
	res.render('./../public/views/blogpost/inbox.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.postlist = function(req, res) {
	res.render('./../public/views/blogpost/postlist.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.social = function(req, res) {
	res.render('./../public/views/blogpost/social.ejs', {
		user: req.user || null,
		request: req
	});
};

exports.titleslogan = function(req, res) {
	res.render('./../public/views/blogpost/titleslogan.ejs', {
		user: req.user || null,
		request: req
	});
};

module.exports.list = function(req, res) {
  Blogpost.find(function(err, data) {
    if (err) {
      return res.status(400).send({
            message: errorHandler.getErrorMessage(err)
  		});
    } else {
      console.log("api called");

      res.status(200).send(data);
    }
  });
};

module.exports.create = function(req, res) {
  var blogpost = new Blogpost(req.body);
  blogpost.user = req.user;
  blogpost.save(function(err, data) {
    if (err) {
      return res.status(400).send({

  				message: errorHandler.getErrorMessage(err)
  			});
    } else {
      res.status(200).send(data);
    }
  });
};

module.exports.read = function(req, res) {
  res.json(req.blogpost);
};


exports.delete = function(req, res) {
	var blogpost = req.blogpost;
	blogpost.remove(function(err) {
		if (err) {
			return res.status(400).send();
		} else {
			res.json(blogpost);
		}
	});
};


module.exports.update = function(req, res) {
  var blogpost = req.blogpost;

  	blogpost = _.extend(blogpost, req.body);

  	blogpost.save(function(err) {
  		if (err) {
  			return res.status(400).send();
  		} else {
  			res.json(blogpost);
  		}
  	});
};

exports.blogpostByID = function(req, res, next, id) {
	Blogpost.findById(id).populate('user', 'email').exec(function(err, blogpost) {
		if (err) return next(err);
		if (!blogpost) return next(new Error('Failed to load blogpost ' + id));
		req.blogpost = blogpost;
		next();
	});
};