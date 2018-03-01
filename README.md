# Remote Blinker

This is a simple red-push-button-triggers-light script. We use it to allow our remotes to chime in on discussions, and give them a bit more of a real world presence.

## Setup

There is a server that hosts a website. On this website you can smash a red button. Other people can also smash the button. In either case the button on your screen will light up and play a sound. (This part is yet to be built.)

Alternatively you can install a script on a Raspberry Pi and add a random USB light to it. When the button is smashed on the website, the USB light in the real world will change in sync with the virtual button.

## Installation of the website

Clone this repo on a machine that acts as the server. Make sure you install node and npm on this machine, which I'll leave as an exercise for the reader. Change the port numbers in `package.json` as needed. Then run:

```bash
$ npm run server
```

## Installation on the Pi

Get yourself a Raspberry Pi. Install Raspbian Stretch Lite on it. Boot it up and log in, the default username is "pi" and the default password is "raspberry". You will probably want to connect it to your WiFi through `raspi-config` and maybe enable the SSH server while you're at it.

Then, git clone this repo onto your Pi and run the installer:

```bash
$ sudo apt-get install git
$ git clone git@github.com:Timendus/remote-blinker.git
$ cd remote-blinker
$ ./installOnRaspberryPi.sh
```

Modify the server and port number in `package.json` as needed. Then run:

```bash
$ npm run client
```
