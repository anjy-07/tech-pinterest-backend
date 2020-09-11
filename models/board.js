var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating a schema
var boardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
  },
  tags:{
    type: String
  },
  pins: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pin'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

boardSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

var board = mongoose.model('Board', boardSchema);
module.exports = board;