var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// creating a schema
var pinSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  URL: {
    type: String
  },
  image: {
      type: String
  },
  category: {
    type: String
  },
  tags: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

pinSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.__v;
  return obj;
};

var pin = mongoose.model('Pin', pinSchema);
module.exports = pin;