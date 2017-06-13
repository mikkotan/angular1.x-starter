var express = require('express');
var path = require('path');
var app = express();

var PORT = process.env.PORT || 3000;

app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(PORT, function() {
    console.log("Server running at " + PORT);
})