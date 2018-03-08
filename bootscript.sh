#!/bin/bash

# Allow the "pi" user to control the usb devices
sudo chmod 222 /sys/bus/usb/drivers/usb/unbind
sudo chmod 222 /sys/bus/usb/drivers/usb/bind

# Run the client as the "pi" user
cd /home/pi/remote-blinker
su pi -c npm run client

