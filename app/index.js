const express = require('express');
const app = express();
const channelRoutes = require('./channel/routes');

app.use(express.json());
const cors = (req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'POST');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	next();
};
app.use(cors);
app.use('/', channelRoutes);

module.exports = app;
