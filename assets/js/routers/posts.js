BlogApplication.Routers.Posts = Backbone.Router.extend({
  el: '#container',

  routes: {
    "":     "index"
  },

  index: function() {
    var posts = new BlogApplication.Collections.Posts(); 
    posts.fetch();

    var postsIndexView = new BlogApplication.Views.PostsIndex({collection: posts}); 

    $('#container').html(postsIndexView.render().el);
  }
});
