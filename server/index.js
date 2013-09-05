var express = require('express');

exports.start = function(PORT, STATIC_DIR) {
  var app = express();

  app.use(express.compress());

  // serve static files for demo client
  app.use(express.static(STATIC_DIR));

  // parse body into req.body
  app.use(express.bodyParser());

  app.listen(process.env.PORT || 3000);

};