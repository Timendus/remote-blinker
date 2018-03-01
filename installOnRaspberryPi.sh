#!/bin/bash

# Run this as the normal "pi" user, it will escalate where necessary

echo "Please enter the root password when asked, default is 'raspberry'"

# Make sure the PI is up to date
sudo apt-get update
sudo apt-get upgrade

# Allow the "pi" user to control the usb devices
sudo chmod 222 /sys/bus/usb/drivers/usb/unbind
sudo chmod 222 /sys/bus/usb/drivers/usb/bind

# Install nvm, node and npm
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

nvm install node

# Install the package dependencies
npm install
