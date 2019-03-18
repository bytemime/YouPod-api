const express = require('express');
const router = express.Router();
const axios = require('axios');
// declare constants
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.API_KEY || require('../config').youtube.api_key;
const ACTION = 'search';

// fetch latest videos depending upon the number of videos
// requested by the client
async function getLatestVideos(req, res) {
	const URL = `${BASE_URL}/${ACTION}?part=snippet&channelId=${
		req.body.channelId
	}&maxResults=${req.body.maxResults}&order=date&type=video&key=${API_KEY}`;
	let response = await axios.get(URL);
	// map over the response and select only the needed parts
	// and create the response to be sent
	let responseArray = response.data.items.map(i => {
		return {
			title: i.snippet.title,
			publishDate: i.snippet.publishedAt,
			channelId: i.snippet.channelId,
			videoId: i.id.videoId,
			description: i.snippet.description
		};
	});
	res.json(responseArray);
}
// latest video route
router.post('/api/get-channel-details', getLatestVideos);
module.exports = router;
