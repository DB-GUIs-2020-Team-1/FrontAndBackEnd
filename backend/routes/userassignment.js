const router = require('express').Router()
const connection = require('../connection')

//GET: /user-assignment/:userID
router.get('/:userID', async (req, res) => {
  var userID = req.params.userID;
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? order by dueDate', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});

//GET: /user-assignment/:userID/incomplete
router.get('/:userID/incomplete', async (req, res) => {
  var userID = req.params.userID;
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? AND completionStatus = 0 order by dueDate', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});

//GET: /user-assignment/:userID/test
router.get('/:userID/test', async (req, res) => {
  var userID = req.params.userID;
  //Store assignment type "Test" in database as 1
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? and assignmentType = 1', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});

//GET: /user-assignment/:userID/quiz
router.get('/:userID/quiz', async (req, res) => {
  var userID = req.params.userID;
  //Store assignment type "Quiz" in database as 2
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? and assignmentType = 2', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});

//GET: /user-assignment/:userID/paper
router.get('/:userID/paper', async (req, res) => {
  var userID = req.params.userID;
  //Store assignment type "Paper" in database as 3
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? and assignmentType = 3', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});

//GET: /user-assignment/:userID/homework
router.get('/:userID/homework', async (req, res) => {
  var userID = req.params.userID;
  //Store assignment type "Homework" in database as 4
  connection.query('SELECT * from `user-assignment` JOIN assignment ON `user-assignment`.assignmentID = assignment.assignmentID where userID = ? and assignmentType = 4', [userID], function (err, result, fields) {
    if (err) throw err;
    res.end(JSON.stringify(result));      // Result in JSON format
    });
});


//PUT : /user-assignment/:userID/:assignmentID/name
router.put('/:userID/:assignmentID/name', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    var nickname = req.body.nickname;
    connection.query('UPDATE `user-assignment` SET nickname = ? WHERE userID = ? AND assignmentID = ?', [nickname, userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
  
  //PUT : /user-assignment/:userID/:assignmentID/description
  router.put('/:userID/:assignmentID/desc', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    var desc = req.body.newDescription;
    connection.query('UPDATE `user-assignment` SET newDescription = ? WHERE userID = ? AND assignmentID = ?', [desc, userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
  
  //PUT : /user-assignment/:userID/:assignmentID/complete
  router.put('/:userID/:assignmentID/complete', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    connection.query('UPDATE `user-assignment` SET completionStatus = 1 WHERE userID = ? AND assignmentID = ?', [userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
  
  //PUT : /user-assignment/:userID/:assignmentID/incomplete
  router.put('/:userID/:assignmentID/incomplete', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    connection.query('UPDATE `user-assignment` SET completionStatus = 0 WHERE userID = ? AND assignmentID = ?', [userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
  
  //PUT : /user-assignment/:userID/:assignmentID/notificationsON
  router.put('/:userID/:assignmentID/notificationsON', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    connection.query('UPDATE `user-assignment` SET sendNotifications = 1 WHERE userID = ? AND assignmentID = ?', [userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
  
  //PUT : /user-assignment/:userID/:assignmentID/notificationsOFF
  router.put('/:userID/:assignmentID/notificationsOFF', async (req, res) => {
    var userID = req.params.userID;
    var assignmentID = req.params.assignmentID;
    connection.query('UPDATE `user-assignment` SET sendNotifications = 0 WHERE userID = ? AND assignmentID = ?', [userID, assignmentID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });