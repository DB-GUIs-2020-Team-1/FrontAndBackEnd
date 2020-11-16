const router = require('express').Router()
const connection = require('../connection')

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