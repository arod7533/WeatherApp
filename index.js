if (process.env.NODE_ENV !== 'Production') {
    require('dotenv').config()
}

const DARKSKY_API_KEY = process.env.DARKSKY_API_KEY

const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use('/css',express.static(path.join(__dirname, 'public/css')));
app.use('/js',express.static(path.join(__dirname, 'public/js')));
app.use('/img',express.static(path.join(__dirname, 'public/img')));


app.post('/weather', (req,res) => {
    
})


var server = app.listen(8000, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Server is running at http://%s:%s", host, port)
})