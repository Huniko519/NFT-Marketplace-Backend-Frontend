const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
  name: {
    type: String,
  },
  cid: {
    type: Number
  }
},
  {
    timestamps: true
  });

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category;
