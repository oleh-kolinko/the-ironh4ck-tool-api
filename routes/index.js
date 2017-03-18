const express = require('express');
const router  = express.Router();
const Student = require('../models/student');

/* GET home page. */
router.get('/students', (req, res, next) => {

  Student.find({}, (err,result)=>{
    if(err) return next(err);
      res.send({
        students: result
      });
  });
});

module.exports = router;
