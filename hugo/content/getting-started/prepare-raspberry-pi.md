---
title: "Preparing Raspberry PI"
description:
type: getting-started
date: 2018-11-26T15:02:22+05:30
pre: "i. "
weight: 225
---
## Prerequisites

1. Raspberry PI 2 or 3
2. Micro SD card of at least 16 GB class 10
3. Internet connection over ethernet

## Procedure
To prepare the device, follow the instructions step-wise:

1. You may download either [rapyuta.io reference Board Support Package (BSP)
image](https://storage.googleapis.com/io-reference-bsp-images/raspberrypi/ubuntu/2018-07-14-rapyuta-robotics-xenial-ros-raspberry-pi-armhf.img.xz) (arm32v7 CPU architecture) for Raspberry PI 2 and 3,
or [rapyuta.io reference BSP image](https://storage.googleapis.com/io-reference-bsp-images/raspberrypi/ubuntu/2018-07-18-rapyuta-robotics-xenial-ros-raspberry-pi-arm64.img.xz) (arm64v8 CPU architecture) for only Raspberry PI 3.  
The custom rapyuta.io images come with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/)
OS and [ROS kinetic](http://wiki.ros.org/kinetic) software installed on them.
Moreover, [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials)
are also installed on these custom images.
2. You can easily flash the SD card using [Etcher](https://etcher.io) or other [options](https://www.raspberrypi.org/documentation/installation/installing-images/).
3. Insert the microSD card into the Raspberry PI microSD slot and power the device.
4. Connect the ethernet port of the Raspberry PI to a router to access internet.  
You may use [nmap](https://nmap.org/) to determine the device IP by
replace 1.2.3.0/24 with your local IP address.

```bash
nmap -sn 1.2.3.0/24
```
To ensure that everything is working OK, SSH into the Raspberry PI using
the default username and password. Both the default username and password is
*rapyuta*.

You are required to change the password as soon as you sign in.

```bash
ssh rapyuta@<device IP>
```

Alternatively, you may use a serial terminal to achieve the same result.
