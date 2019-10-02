const express = require('express');
const router = express.Router();
const Question = require('../models/question');

router.get('/forms', (req, res, next) => {
  Question.find()
    .then(questions => {
      res.status(200).json(questions);
    })
    .catch(err => {
      // console.log(err);
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
});
router.post('/forms', (req, res, next) => {
  console.log('body', req.body);
  console.log(typeof req.body);
  const question = new Question(req.body);
  delete question._id;
  // if (!question.firstName) {
  //   console.log('here');
  //   // console.log(questions);
  //   const error = new Error('Input Field Is Empty');
  //   error.statusCode = 400;
  //   throw error;
  // }
  console.log('id', req.body.id);
  if (!req.body.id) {
    console.log('here');
    return question
      .save()
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  }
  const obj = { ...req.body };
  delete obj.id;
  console.log('obj', obj);
  Question.findOneAndUpdate(req.body.id, obj)
    .then(result => {
      console.log('after', result);
      if (result) {
        res.status(200).json(result);
      }
    })
    .catch(err => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
});
router.patch('/forms', (req, res, next) => {
  Question.findById(req.params.id).then(question => {
    const updatedQuestion = req.body;
    if (!question || !updatedQuestion.firstName) {
      const error = new Error('Data not found for update');
      error.statusCode = 400;
      throw error;
    }
    question.firstName = updatedQuestion.firstName;
    question.lastName = updatedQuestion.lastName;
    question.screenName = updatedQuestion.screenName;
    question.day = updatedQuestion.day;
    question.month = updatedQuestion.months;
    question.year = updatedQuestion.year;
    question.country = updatedQuestion.country;
    question.gender = updatedQuestion.gender;
    question.email = updatedQuestion.email;
    question.phone = updatedQuestion.phone;
    question.password = updatedQuestion.password;
    question
      .save()
      .then(question => {
        res.status(200).json(question);
      })
      .catch(err => {
        console.log(err);
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  });
});

module.exports = router;
