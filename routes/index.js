
/*
 * GET home page.
 */

var models = require(".././lib/models"),
    Post   = models.Post;

exports.index = function(req, res){

  var posts = Post.fetch();

  res.render('index', {
    title: 'Backbone Blog Express',
    posts: posts
  });
};
