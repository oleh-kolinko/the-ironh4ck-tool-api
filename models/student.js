const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: String,
});
studentSchema.set('timestamps', true);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
