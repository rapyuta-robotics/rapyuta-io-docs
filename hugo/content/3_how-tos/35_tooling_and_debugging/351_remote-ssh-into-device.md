---
title: Remote SSH into your Devices
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 351
slug: remote-ssh-devices
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - How to
---


The rapyuta.io's device manager lets you connect remotely to online devices through a reverse SSH tunnel.

The WebSSH feature secures you from exposing SSH ports on your device network and prevents you from compromising security. It is a fully-featured, browser-based TTY that you can use to analyze system logs and for debugging applications.

## Pre-requisite

To start a remote SSH connection on a device, ensure that the device is online and has an SSH service installed on it.

To enable the SSH service on Ubuntu 16.04, execute the following commands in the device's terminal in sequence:

```bash
sudo apt-get install openssh-server

sudo systemctl start ssh

sudo systemctl status ssh
```

## SSH into a Device

To perform remote SSH on a device using the rapyuta.io console:

1. Inthe rapyuta.io console, on the left navigation bar, click **Devices > All Devices**.
2. Select the device you want to initiate an SSH session on.
3. Select the **SSH** tab to view a live remote SSH session.