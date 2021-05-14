const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, unique: true, require: true },
});

module.exports.Article = mongoose.model('Article', schema);
