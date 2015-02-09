var express = require('express');
var app = express();

	

app.use('/public', express.static('public'));



// Start the server.
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log("Listening on " + port);
});




