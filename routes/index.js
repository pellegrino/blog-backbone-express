
/*
 * GET home page.
 */

var models = require(".././lib/models"),
    Post   = models.Post;

exports.index = function(req, res){

  Post.find(function(err, _posts) {
    return res.render('index', {
      title: 'Backbone Blog Express',
      posts: _posts
    });
  });

};


