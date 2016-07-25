var express = require('express')

//Create our app
var app = express();

app.use(express.static('public'));//lets you add functionality

app.listen(1234, function() {
  console.log('Express server is up on port 1234');

});
