var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BlogpostSchema = {

  title: {
    type: String,
    default: '',
    trim: true,
    required: 'Title required!'
  },
  
   category: {
    type: String,
    default: '',
    trim: true,
    required: 'Category required!'
  },
  
  date: {
    type: String,
    default: '',
    trim: true,
    required: 'Date required!'
  },
  
  image: {
    type: String,
    default: '',
    trim:true,
    required:'Image required!'
    
  },
  
  content: {
    type: String,
    default: '',
    trim: true,
    required:'Content required!'
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