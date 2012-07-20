var Models, Post;

module.exports = Models = {};

Models.Post = (function() {

  function Post() {}

  Post.fetch = function() {
    return {
      title: 'Sample title'
    };
  };

  return Post;

})();
