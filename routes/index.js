const express = require('express');
const router  = express.Router();
const Student = require('../models/student');
const Question = require('../models/question');

/* GET list of students. */
router.get('/students', (req, res, next) => {

  Student.find({}, (err,result)=>{
    if(err) return next(err);
      res.send({
        students: result
      });
  });
});


/* GET list of questions. */
router.get('/questions', (req, res, next) => {

  Question.find({}, (err,result)=>{
    if(err) return next(err);
      res.send({
        questions: result
      });
  });
});

/* Create new question. */
router.post('/questions', (req,res,next)=>{
  let newQuestion= new Question({
    message: req.body.message,
    author: req.body.author,
  });
  newQuestion.save((err, result)=>{
    if(err) return next(err);
    res.send(result);
  });
});

/* Delete question. */
router.post('/questions/delete/:id', (req,res,next)=>{
  const id = req.params.id;
  Question.findByIdAndRemove(id, (err, result)=>{
    if(err) return next(err);
    res.send(result);
  });
});

router.get('/', (req,res,next)=>{
  res.render('index');
});

module.exports = router;
