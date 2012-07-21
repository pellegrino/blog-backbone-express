window.BlogApplication = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(data) {
    new BlogApplication.Routers.Posts();

    if (!Backbone.history.started){ 
      Backbone.history.start({pushState: true} );
    }
  }
};
