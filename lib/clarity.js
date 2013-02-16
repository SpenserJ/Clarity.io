var conf = require('./config')
  , webapp = require('./webserver').webapp
  , webserver = require('./webserver').webserver
  , sockethandler = require('./socket')
  , io = require('socket.io');

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});

var Clarity = function() {
  this.webapp = webapp;
  this.webserver = webserver;
}

Clarity.prototype.start = function start() {
  var self = this;

  self.io = io.listen(webserver);
  self.io.sockets.on('connection', function(socket) {
    socket.emit('initialize', { hello: 'world' });
    sockethandler(socket, connections);
  });

  console.log('Clarity started on port ' + conf.get('port'));
}

module.exports = Clarity;
