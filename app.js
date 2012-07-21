
/**
 * Module dependencies.
 */

var express         = require('express')
  , routes          = require('./routes')
  , path            = require('path')
  , http            = require('http')
  , models          = {}
  , mongoose        = require("mongoose")
  , connectAssets   = require("connect-assets")()
  , applicationRoot = __dirname;

mongoose.connect(process.env.MONGOHQ_URL || "mongodb://localhost/blogexpress");

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(applicationRoot, '/views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(connectAssets);
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(applicationRoot, '/public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/',       routes.index);

app.get('/posts',       require('./resources/posts').index);
app.post('/posts',      require('./resources/posts').create);

app.get('/posts/:post', require('./resources/posts').show);
app.put('/posts/:post', require('./resources/posts').update);
app.delete('/posts/:post', require('./resources/posts').destroy);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
