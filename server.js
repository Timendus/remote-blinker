const serverSocket = require('socket.io').listen(process.env.npm_package_config_port);

serverSocket.on('connection', function(clientSocket) {

  const pattern = function(pattern) {
    pattern.forEach(function(line) {
      setTimeout(function() {clientSocket.emit(line[0])}, line[1])
    });
  };

  // A rapid flicker that draws the attention
  const flicker = function() {
    pattern([
      ['lightsOn', 0],
      ['lightsOff', 200],
      ['lightsOn', 250],
      ['lightsOff', 450],
      ['lightsOn', 500],
      ['lightsOff', 700],
      ['lightsOn', 750],
      ['lightsOff', 950],
      ['lightsOn', 1000],
      ['lightsOff', 1200]
    ]);
  };

  // A slower pattern that blinks more patiently
  const blink = function() {
    pattern([
      ['lightsOn', 0],
      ['lightsOff', 1000],
      ['lightsOn', 2000],
      ['lightsOff', 3000],
      ['lightsOn', 4000],
      ['lightsOff', 5000]
    ]);
  }

  console.log("Client connected");
  flicker();

  setInterval(flicker, 10000);
  setTimeout(function() {
    setInterval(blink, 10000);
  }, 3000);

});

console.log("Waiting for connections on port "+process.env.npm_package_config_port+"...");
