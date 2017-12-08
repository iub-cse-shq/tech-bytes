var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogpostSchema = {
  
  category: {
    type: String,
    default: '',
    trim: true,
    required: 'Category required!'
  },

  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },

  created: {
    type: Date,
    default: Date.now
  }
};

var Blogpost = mongoose.model('Blogpost', BlogpostSchema, 'blogposts');
module.exports = Blogpost;