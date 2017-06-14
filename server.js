var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./src/server/routes.js')
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

routes(app);
 
app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(PORT, function() {
    console.log("Server running at " + PORT);
})