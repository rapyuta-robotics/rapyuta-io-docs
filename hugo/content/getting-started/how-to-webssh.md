---
title: "How to WebSSH"
description:
type: getting-started
date: 2018-11-26T15:37:32+05:30
pre: "m. "
weight: 345
---
The rapyuta.io's device manager lets you connect remotely to online devices through
a reverse SSH tunnel.

The WebSSH feature secures you from exposing SSH ports on your device network and
prevents you from compromising security. This is a fully
featured, browser-based TTY that you can use to analyse system logs and for
debugging applications.

To start a remote SSH connection to a device, make sure the device is online and has
an SSH service installed on it.

To enable the SSH service on Ubuntu 16.04, execute the following commands in the
device's terminal in sequence:

```bash
sudo apt-get install openssh-server
```

```bash
sudo systemctl start ssh
```

```bash
sudo systemctl status ssh
```

On [rapyuta.io console](https://console.rapyuta.io):

1. On left navigation bar, click **DEVICES**.
2. Select the device you want to initiate an SSH session on.
3. Click the **SSH** tab to view a live remote SSH session.
