const bodyParser = require('body-parser');
const express = require('express');
const appConfig = require('./appConfig.js');
const allowCors = require('./cors');
const queryParse = require('express-query-int');
const server = express();

const PORT = appConfig.server.port;

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParse());

server.listen(PORT, () => {
    console.log(`BACKEND ONLINE ON PORT - ${PORT}`);
});

module.exports = server;