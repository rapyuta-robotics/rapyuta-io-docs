---
title: "Device Management"
description:
type: core-concepts
date: 2018-11-15T10:02:42+05:30
pre: "c. "
weight: 115
---
## Overview
The device manager is an interface for remotely controlling and managing your
device, and applications running on it. It provides a control-plane and a minimal
data-plane communication between rapyuta.io and the device. It is the single
point of contact for all device related functions.

## Architecture
![Architecture](/images/core-concepts/device-management/architecture.png?classes=border,shadow&width=60pc)

## Communication
The device manager service uses the server-agent communication model where the
_device manager_ is the server side component, and the _device manager agent_ is
the agent component of the model.

### Network Address Translator (NAT) traversal
Since the device manager agent initiates the connections to the device manager,
the communication works behind firewalls and NAT network. You do not need to
open any incoming ports on your firewall.

### Communication channels
The device manager communicates with registered devices using the
publisher-subscriber pattern. The two communication channels are:

* **Control channel**    
  The control channel sends control commands from the device manager to the
  device manager agent, and receive event messages from the device manager agent
  through a persistent connection.
* **Metric channel**    
  The metric channel sends metrics data of a device from device manager agent
  to the device manager service.

Learn more about network layout and communication.

## Remote execution
The device manager lets you access your device even if it is located at a
remote location over a Wide Area Network (WAN) connection. You may open an
interactive shell to the device through a web browser (WebSSH), and send
individual shell commands to be executed on the device.

## Remote monitoring
Remote monitoring helps you get better visibility into your devices regardless
of where they are located. The device manager service enables you to collect and
visualise execution metrics such as CPU usage, memory usage, battery level, etc.
of the device. You can visualise custom metrics by subscribing to ROS topics.

Learn how to collect and visualise device metrics data.

## Application deployment
You can remotely deploy software applications on your device, manage your
application's lifecycle, and start; stop; check status and logs for a running
application. The supported application runtimes are:

* **Docker**    
  The docker runtime lets you provision applications on your online devices in
  real time.
* **Linux (Ubuntu 16.04)**    
  In Linux runtime, you're solely responsible for manually provisioning
  applications on your online devices. You should launch, manage and watch the
  status of any Linux application.

## Security
The device manager ensures that all of the data (telemetry and control)
exchanged between various components is encrypted.

* **End to end encryption**    
  Once a device is successfully registered with the device manager, all further
  communication between the server and the agent is encrypted using public key
  cryptography.
* **Identity validation**    
  All devices that are registered with the device manager will possess unique
  credentials that are visible only to you. These credentials are used to
  identify devices across communication channels.

Learn how to [add a new device](/getting-started/add-new-device) and SSH into
them from your browser.
