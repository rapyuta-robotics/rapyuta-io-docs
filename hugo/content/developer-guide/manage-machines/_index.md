---
title: "Managing Machines"
description:
type: developer-guide
date: 2019-10-24T11:39:53+05:30
pre: "b. "
weight: 225
---
## Architecture
The following image illustrates the architecture of device
manager system.
![Architecture](/images/core-concepts/device-management/architecture.png?classes=border,shadow&width=60pc)

## Communication
The device manager service uses the server-agent communication
model where the *device manager* is the server side component,
and the *device manager agent* is the agent component of the
model.

#### Network Address Translator (NAT) Traversal
Since the device manager agent initiates the connection to
the device manager, the communication works behind firewall
and NAT network. You do not need to open any incoming ports on your firewall.

#### Management Communication
rapyuta.io provides low throughput channels: control and
telemetry channels. These channels are activated when the device is
powered-on; connected to the internet; and registered with rapyuta.io
The channels are optimized for reliability, security for small
payloads like configuration commands, metrics and logs, and for
minimum utilization of resources. 

* **Control channel**    
  This channel provides a persistent connection between device
  manager service and device manager agent. The service communicates
  with the agent by using the publish-subscribe pattern.
  The device manager service sends control commands to and receives
  event messages from device manager agent. The channel secures each
  device with a unique rotating AES key-based encryption.
* **Telemetry channel**     
  The registered device generates metrics and logs data. The device
  manager agent sends this data to the device manager service
  through the telemetry channel. The channel uses TLS encryption
  to secure each device together with a unique token.

{{% notice note %}}
Application communication - link to communication topologies
{{% /notice %}}

## Remote Execution

## Remote Debugging
The device manager lets you access a device remotely over a
Wide Area Network (WAN) connection. You may open an
interactive shell to the device through a web browser
WebSSH, and send individual shell commands to be executed
on the device.

## Remote Configuration
Dynamic configurations allow you to  control a device or a
group of devices based on a large set of configuration
parameters.

## Remote Monitoring
Remote monitoring provide better visibility into devices
regardless of where they are located. The device manager
service enables you to collect and visualise execution metrics
like CPU usage, memory usage, battery level, etc. of the device.

## Security Notes
The device manager ensures that the data
(telemetry and control) exchanged between
various components is encrypted.

* **End to end encryption**    
  Once a device is successfully registered with the device
  manager, all further communication between the server and
  the agent is encrypted using public key cryptography.
* **Identity validation**    
  All devices that are registered with the device manager
  will possess unique credentials that are visible only to
  you. These credentials are used to identify devices
  across communication channels.
