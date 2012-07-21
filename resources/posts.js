var models = require(".././lib/models"),
    Post   = models.Post;

exports.index = function(req, res){

  Post.find(function(err, _posts) {
    if(!err) {
      res.send(_posts);
    }
  });
};

exports.create = function(req, res){
  var post = new Post(req.body);
  post.save();
  res.send(post);
};

