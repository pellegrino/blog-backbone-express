var Models, Post;

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

module.exports = Models = {};

Models.Post = mongoose.model('Post', new Schema({
  thread: ObjectId,
  created_at: {type: Date, default: Date.now},
  author: {type: String, default: 'Anon'},
  title: String,
  post: String
})); 
