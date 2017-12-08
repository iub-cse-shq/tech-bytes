module.exports = function(app){

 var blogposts = require('./../controllers/blogposts.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
    
 
 app.route('/blogposts/adminindex')
    .get(blogposts.adminindex);
	
 app.route('/blogposts/addcat')
    	.get(blogposts.addcat);
    	
 app.route('/blogposts/catlist')
     .get(blogposts.catlist);
     
 app.route('/blogposts/categoryEdit/:blogpostId')
    .get(blogposts.categoryEdit);
     
 app.route('/blogposts/addpost')
     .get(blogposts.addpost);
     
 app.route('/blogposts/inbox')
     .get(blogposts.inbox);
     
 app.route('/blogposts/postlist')
      .get(blogposts.postlist);
      
 app.route('/blogposts/social')
      .get(blogposts.social);
      
 app.route('/blogposts/titleslogan')
      .get(blogposts.titleslogan);
 
 app.route('/api/blogposts')
	.get(blogposts.list)
	.post(users.requiresLogin, blogposts.create);

 app.route('/api/blogposts/:blogpostId')
	.get(blogposts.read)
    .delete(users.requiresLogin, blogposts.delete);

 app.route('/api/blogposts/edit/:blogpostId')
	.get(blogposts.read)
	.put(users.requiresLogin, blogposts.update);


app.param('blogpostId', blogposts.blogpostByID);

};