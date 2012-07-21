BlogApplication.Routers.Posts = Backbone.Router.extend({
  el: '#container',

  initialize: function() {
    this.posts          = new BlogApplication.Collections.Posts(); 
    this.postsIndexView = new BlogApplication.Views.PostsIndex({collection: this.posts}); 
  },

  routes: {
    "":     "index"
  },

  index: function() {
    this.posts.fetch();
    $('#container').html(this.postsIndexView.render().el);
  }
});
