var serverSocket = require('socket.io').listen(3003);

serverSocket.on('connection', function(clientSocket) {
  console.log("Client connected");
  setInterval(function() {
    clientSocket.emit('blink');
  }, 1000);
});

console.log("Waiting for connections...");
