---
title: "How to WebSSH"
date:
weight: 25
---
The device manager provides SSH access to a connected device through a reverse
ssh tunnel. The WebSSH feature secures you from exposing SSH ports on your device
network and from compromising security. This is a fully featured, browser-based
TTY that you can use to analyse system logs and for debugging applications.

To start an SSH session to your device, make sure the device is online, and has
SSH service installed on it. To enable the SSH service on Ubuntu 16.04, execute
the following commands in the device's terminal in sequence:

```bash
sudo apt-get install openssh-server
sudo systemctl start ssh
sudo systemctl status ssh
```

On rapyuta.io [console](https://closed-beta.rapyuta.io):

1. On left navigation bar, click **DEVICES**.
2. Select the device you want to initiate an SSH session on.
3. Click the **SSH** tab to view the SSH session.
