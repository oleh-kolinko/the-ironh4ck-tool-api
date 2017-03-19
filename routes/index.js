const express = require('express');
const router  = express.Router();
const Student = require('../models/student');
const Question = require('../models/question');

/* GET home page. */
router.get('/students', (req, res, next) => {

  Student.find({}, (err,result)=>{
    if(err) return next(err);
      res.send({
        students: result
      });
  });
});

router.get('/questions', (req, res, next) => {

  Question.find({}, (err,result)=>{
    if(err) return next(err);
      res.send({
        questions: result
      });
  });
});

router.post('/questions', (req,res,next)=>{

  let newQuestions= new Question({
    message: req.body.message,
    author: req.body.author,
  });

  newQuestions.save((err)=>{
    if(err) return next(err);
  });
});

module.exports = router;
