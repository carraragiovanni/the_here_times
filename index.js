var axios = require('axios');
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 4600);
