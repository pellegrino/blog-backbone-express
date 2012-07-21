BlogApplication.Views.PostItem = Backbone.View.extend({
  tagName: 'li',
  template: _.template($('#template-post').html()), 

  initialize: function() {
    _.bindAll(this, "render");
    this.model.on('change', this.render);
  }, 

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});


BlogApplication.Views.PostsIndex = Backbone.View.extend({
  template: _.template($('#template-posts').html()),

  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.on('reset', this.render);
    this.collection.on('add'  , this.render);
    this.collection.on('remove', this.render);
  }, 

  render: function() {
    this.$el.html(this.template({}));
    var posts = this.$('ul');

    console.log(posts);

    this.collection.each(function(post){
      var view = new BlogApplication.Views.PostItem({model: post});
      posts.append(view.render().el);
    });

    return this; 
  } 
});
