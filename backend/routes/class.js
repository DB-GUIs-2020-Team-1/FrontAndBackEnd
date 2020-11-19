const router = require('express').Router()
const connection = require('../connection')

//GET: /class/
router.get('/', async (req, res) => {
    connection.query('SELECT * from class', function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//GET: /class/:userID
router.get('/:userID', async (req, res) => {
    var userID = req.params.userID;
    connection.query('SELECT * from class JOIN schedule ON schedule.classID = class.classID where userID = ?', [userID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//GET: /class/assignments
router.get('/:classID/assignments', async (req, res) => {
    var classID = req.params.classID;
    connection.query('SELECT * from assignment JOIN class ON class.classID = assignment.classID where classID = ?', [classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//GET: /class/:classID/classDays
router.get('/:classID/classDays', async (req, res) => {
    var classID = req.params.classID;
    connection.query('SELECT * from classDays JOIN class ON class.classDaysID = classDays.classDaysID where classID = ?', [classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//GET: /class/:classID/classTime
  router.get('/:classID/classTime', async (req, res) => {
    var classID = req.params.classID;
    connection.query('SELECT classTimeStart, classTimeEnd from class where classID = ?', [classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//GET: /class/:classID/semester
  router.get('/:classID/semester', async (req, res) => {
    var classID = req.params.classID;
    connection.query('SELECT semesterOffered from class where classID = ?', [classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//POST: /class/
router.post('/', async (req, res) => {
    var classDaysID = req.body.classDaysID;
    var description = req.body.description;
    var semesterOffered = req.body.semesterOffered;
    var classTimeStart = req.body.classTimeStart;
    var classTimeEnd = req.body.classTimeEnd;
    connection.query('INSERT INTO class (classDaysID, description, semesterOffered, classTimeStart, classTimeEnd) VALUES (?, ?, ?, ?, ?)', [classDaysID, description, semesterOffered, classTimeStart, classTimeEnd], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//PUT: /class/:classID/:classDaysID
router.put('/:classID/:classDaysID', async (req, res) => {
    var classID = req.params.classID;
    var classDaysID = req.params.classDaysID;
    connection.query('UPDATE class SET classDaysID = ? where classID = ?', [classDaysID, classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//PUT: /class/:classID/desc
router.put('/:classID/desc', async (req, res) => {
    var classID = req.params.classID;
    var desc = req.body.desc;
    connection.query('UPDATE class SET description = ? where classID = ?', [desc, classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//PUT: /class/:classID/time
router.put('/:classID/time', async (req, res) => {
    var classID = req.params.classID;
    var classTimeStart = req.body.classTimeStart;
    var classTimeEnd = req.body.classTimeEnd;
    connection.query('UPDATE class SET classTimeStart = ?, classTimeEnd = ? where classID = ?', [classTimeStart, classTimeEnd, classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });

//DELETE: /class/:classID
router.delete('/:classID', async (req, res) => {
    connection.query('DELETE * from class where classID = ?', [classID], function (err, result, fields) {
      if (err) throw err;
      res.end(JSON.stringify(result));      // Result in JSON format
      });
  });
