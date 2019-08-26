const express = require('express');
const router = express.Router();

const request = require('request');

require('dotenv').config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/weather', function(req, res){

    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;

});

module.exports = router;