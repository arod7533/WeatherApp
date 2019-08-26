const express = require('express');
const router = express.Router();

const request = require('request');
const geoip = require('geoip-lite');

require('dotenv').config();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/weather', function(req, res){

    let ip = '73.245.148.98';
    let geo = geoip.lookup(ip);
    let lat = geo.ll[0]
    let lon = geo.ll[1]

    const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`;

    request(api, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); }
    //console.log('body', body);
    let json = body;
    res.json(json);
    });
});

module.exports = router;