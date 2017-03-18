const mongoose = require('mongoose');//get mongoose
mongoose.connect(process.env.MONGODB_URI);//connect to DB on production
// mongoose.connect('mongodb://localhost/the-ironh4ck-tech-tool-api');//connect to DB

const Student = require('../models/student');

const students= [
  {
    name: 'Oleh'
  },
  {
    name: 'Kevin'
  },
  {
    name: 'JP'
  },
  {
    name: 'Walter'
  },
  {
    name: 'Alina'
  },
  {
    name: 'Jeremy'
  },
  {
    name: 'Steven'
  },
  {
    name: 'Oscar'
  },
  {
    name: 'Dan'
  },
  {
    name: 'Kristy'
  },
  {
    name: 'Doyen'
  },
  {
    name: 'Javier'
  },
  {
    name: 'Marlon'
  },
];

Student.create(students, (err, docs)=>{
  if(err) throw err;

    mongoose.disconnect();

});
