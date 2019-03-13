const express = require('express');
const app = express();
const channelRoutes = require('./channel/routes');

app.use(express.json());

app.use('/', channelRoutes);

module.exports = app;
