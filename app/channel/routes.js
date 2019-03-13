const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
	res.status(200).json('access not allowed');
});
module.exports = router;
