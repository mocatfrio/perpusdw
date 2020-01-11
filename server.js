const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 5000;

var connection = require('./api/models/db');

// using bodyparser
app.use(bodyParser.urlencoded({ 
  extended: true 
}));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server API running on port ' + port)
});

// importing route
var routes = require('./api/routes/bookRoute');
// register thr route
routes(app);
