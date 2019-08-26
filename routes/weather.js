const express = require('express');
const router = express.Router();

require('dotenv').config();

router.get('/', function(req, res){
    res.sendfile('./public/html/index.html')
});

module.exports = router;