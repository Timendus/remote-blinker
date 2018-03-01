const exec = require('child_process').exec;
const socket = require('./node_modules/socket.io/node_modules/socket.io-client')('http://192.168.175.103:3003');

const lightsOff = function() {
  console.log("Turning the lights off");
  exec("echo '1-1' > /sys/bus/usb/drivers/usb/unbind");  
}

const lightsOn = function() {
  console.log("Turning the lights back on!");
  exec("echo '1-1' > /sys/bus/usb/drivers/usb/bind");  
}

socket.on('connect', function () {
	console.log('Connected to server, waiting for buttonsmashing');
	socket.on('blink', function() {
		console.log('Button was smashed!');

		// Do a little dance
		lightsOn();
		setTimeout(lightsOff, 1000);
		setTimeout(lightsOn, 2000);
		setTimeout(lightsOff, 3000);
	});
});

lightsOff();
console.log("Waiting for server...");

