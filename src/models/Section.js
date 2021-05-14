const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, require: true },
  articleId: { type: String, require: true },
});

module.exports.Section = mongoose.model('Section', schema);
