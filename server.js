var serverSocket = require('socket.io').listen(process.env.npm_package_config_port);

serverSocket.on('connection', function(clientSocket) {
  console.log("Client connected");
  setInterval(function() {
    clientSocket.emit('lightsOn');
    setTimeout(function() {
      clientSocket.emit('lightsOff');
    }, 1000);
  }, 10000);
});

console.log("Waiting for connections...");
