BlogApplication.Collections.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: BlogApplication.Models.Post
});
