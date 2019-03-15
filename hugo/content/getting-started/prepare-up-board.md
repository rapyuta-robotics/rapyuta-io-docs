---
title: "Preparing Up Board"
description:
type: getting-started
date: 2018-11-26T15:03:30+05:30
pre: "j. "
weight: 230
---
## Prerequisites
- [UP board](https://up-board.org/up/specifications/)
- DC power supply rated 5V/4A
- USB flash drive
- Monitor screen
- HDMI cable
- USB keyboard
- USB mouse
- Internet connection for UP board over ethernet

## Procedure
To prepare the UP board device, follow the instructions in sequence:

1. Download [rapyuta.io reference Board Support Package (BSP) image](https://storage.googleapis.com/io-reference-bsp-images/up/ubuntu/2018-08-23-rapyuta-robotics-xenial-ros-up-board-amd64.iso) (amd64 CPU architecture).  
The custom rapyuta.io image comes with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/)
OS and [ROS kinetic](http://wiki.ros.org/kinetic) software installed on it.
Moreover, the [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials)
are also installed on the custom image.
2. Burn the downloaded image on a USB disk using [Etcher](https://etcher.io/) tool.
3. Insert the USB installer disk into an empty USB port on the device, and proceed
with the normal Ubuntu installation.
4. Reboot the device after successful installation of Ubuntu.
5. Connect the ethernet port of the device to a router.

You may use `nmap` to determine the device IP:

```bash
nmap -sn 1.2.3.0/24     # replace 1.2.3.0/24 for your local IP address
```
To ensure that everything is OK, SSH into the device. Both the default username
and password for the custom image is `rapyuta`. You are required to change the
password as soon as you sign in.

```bash
ssh rapyuta@<device IP>
```
