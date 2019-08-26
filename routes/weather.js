const express = require('express');
const router = express.Router();

require('dotenv').config();
const path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.resolve('public/html/index.html'));
});

module.exports = router;