var Clarity = function Clarity() {
  var self = this;

  self.torrents = ko.observableArray([
    new Torrent({ index: 1, name: 'Example Torrent', size: '124.5MB', progress: { status: 'Seeding', percent: 100.0 } })
  ]);
};

var Torrent = function Torrent(data) {
  this.data = data;
}

var clarity = new Clarity();
ko.applyBindings(clarity);

var socket = io.connect();

socket.on('initialize', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
