var conf = require('./config')
  , http = require('http')
  , express = require('express')
  , lessMiddleware = require('less-middleware')
  , fs = require('fs');

var app = exports.webapp = express()
  , server = exports.webserver = http.createServer(app);

app.configure(function() {
  app.use(lessMiddleware({
    src: conf.get('app_path') + '/public',
    compress: true
  }));

  app.use(express.static(conf.get('app_path') + '/public'));
});

app.get('/', function(req, res) {
  res.send(fs.readFileSync(conf.get('app_path') + '/public/index.html'));
});

server.listen(conf.get('port'));
