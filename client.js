const exec = require('child_process').exec;
const socket = require('socket.io-client')('http://'+process.env.npm_package_config_server+':'+process.env.npm_package_config_port);

const lightsOff = function() {
  console.log("Turning the lights off");
  exec("echo '1-1' > /sys/bus/usb/drivers/usb/unbind");
}

const lightsOn = function() {
  console.log("Turning the lights back on!");
  exec("echo '1-1' > /sys/bus/usb/drivers/usb/bind");
}

socket.on('connect', function () {
  console.log('Connected to server, waiting for some button smashing!');
  socket.on('lightsOff', lightsOff);
  socket.on('lightsOn',  lightsOn );
});

lightsOff();
console.log("Waiting for server...");

