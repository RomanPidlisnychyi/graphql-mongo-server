const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
  name: { type: String, unique: true, require: true },
  sectionId: { type: String, require: true },
});

module.exports.Theme = mongoose.model('Theme', schema);
