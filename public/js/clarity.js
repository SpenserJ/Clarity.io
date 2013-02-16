var socket = io.connect();

socket.on('initialize', function (data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
