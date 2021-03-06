require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

// set up some configs for express.
const config = {
  name: 'sample-express-app',
  port: 8000,
  host: '0.0.0.0',
};

// create the express.js object
const app = express();

// create a logger object.  Using logger is preferable to simply writing to the console.
const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));
app.use(ExpressAPILogMiddleware(logger, { request: true }));

const user = require('./routes/user')
const assignment = require('./routes/assignment')
const classes = require('./routes/classes')
const comment = require('./routes/comment')

user(app, logger);
assignment(app, logger);
classes(app, logger);
comment(app,comment);

app.get('/', (req, res) => {
  res.status(200).send('Go to 0.0.0.0:3000.');
});

// connecting the express object to listen on a particular port as defined in the config object.
app.listen(config.port, config.host, (e) => {
  if (e)
    throw new Error('Internal Server Error');
  logger.info(`${config.name} running on ${config.host}:${config.port}`);
});