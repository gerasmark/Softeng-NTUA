const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdminSchema = new Schema({
    name: String
}, {
      versionKey: false
  });
  module.exports = mongoose.model('Admin', AdminSchema);
  