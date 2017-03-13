const mongoose = require('mongoose');
mongoose.Promise = Promise;
const Schema = mongoose.Schema;

const schema = new Schema({
  text: {type: String},
  author: {type: String}
});

module.exports = mongoose.model('Message', schema);