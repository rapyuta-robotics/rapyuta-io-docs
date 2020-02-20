---
title: "Local Communication Broker"
description:
type: developer-guide
date: 2019-11-06T17:05:14+05:30
pre: "c. "
weight: 436
---
Complex distributed robotics applications require multiple devices
(or robots) to communicate with each other in the same network or
over LAN. This kind of communication can prove to be highly latent
if the application service is distributed over WAN.

rapyuta.io provides a public package, **Rapyuta IO Local Communication
Broker**, to help support multi-device communication in the same
local network, thus, reducing the robotics application latency
by ensuring that the devices involved are in the same local
network.

**Rapyuta IO Local Communication Broker** is a communication package,
which is a public package.
You cannot delete or modify communication packages, and they are
available to all users.

You can optionally specify a ***network interface*** (i.e., an IP address)
parameter while deploying a local communication broker public package.
You may select the network interface value for a local communication
broker deployment while deploying a package that depends on it.
In this case, the latter network interface
takes precedence. Make sure that the latter network interface falls in
the same network as that defined in the dependent broker deployment.

When the local communication broker reboots or reconnects to a
network connection, the broker can change its
IP address. The broker's IP address will not be the same as the one
before rebooting or reconnecting. In production-like scenarios, it is
recommended for the broker to not change its IP address. Hence, assign
a static IP address to the local communication broker.

{{% notice info %}}
Follow this walkthrough to
[deploy a local communication broker](/build-solutions/sample-walkthroughs/local-communication/).
{{% /notice %}}