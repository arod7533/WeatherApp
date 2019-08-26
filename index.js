if (process.env.NODE_ENV !== 'Production') {
    require('dotenv').config()
}

const express = require('express');
const app = express();

const path = require('path');
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use('/img', express.static(path.join(__dirname, 'public/img')));
app.use('/html', express.static(path.join(__dirname, 'public/html')));

const weather = require('./routes/weather');
app.use('/weather', weather);

const api = require('./routes/api');
app.use('/api/v1/', api);

var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server is running at http://%s:%s", host, port)
})