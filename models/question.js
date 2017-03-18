const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  name: String,
  message: String,
  author: String,
});
questionSchema.set('timestamps', true);

const Question = mongoose.model('Question', questionSchema);

module.exports = Exercise;
