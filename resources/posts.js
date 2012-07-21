var models = require(".././lib/models"),
    Post   = models.Post;

exports.index = function(req, res){

  Post.find(function(err, _posts) {
    if(!err) {
      res.send(_posts);
    }
  });
};

exports.update = function(req, res){
  Post.findById(req.params.post, function(err, _post){
    if(!err) {
      _post.title   = req.body.title;
      _post.author  = req.body.author;
      _post.save();
      res.send(_post);
    }
  }); 
};

exports.show = function(req, res){
  Post.findById(req.params.post, function(err, _post){
    if(!err) {
      res.send(_post);
    }
  }); 
};


exports.destroy = function(req, res){
  Post.findById(req.params.post, function(err, _post){
    if(!err) {
      res.send(_post.remove());
    }
  }); 
};

exports.create = function(req, res){
  var post = new Post(req.body);
  post.save();
  res.send(post);
};

