

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  rating: {
    type:Number,
    required: true,
    enum :[1,2,3,4,5]
  },
  isDeleted:{
    type:Boolean
  },

});

module.exports = mongoose.model('User', userSchema);