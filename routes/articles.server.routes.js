module.exports = function(app){

 var articles = require('./../controllers/articles.server.controller.js');
 var users = require('./../controllers/users.server.controller.js');
 
 app.route('/').get(articles.index);
 app.route('/post').get(articles.post);
 app.route('/about').get(articles.about);
 app.route('/contact').get(articles.contact);

 app.route('/api/articles')
	.get(articles.list)
	.post(users.requiresLogin, articles.create);

  app.route('/api/articles/:articleId')
	.get(articles.read)
   .delete(users.requiresLogin, articles.delete);

	app.route('/api/articles/edit/:articleId')
	.get(articles.read)
	.put(users.requiresLogin, articles.update);


app.param('articleId', articles.articleByID);


};