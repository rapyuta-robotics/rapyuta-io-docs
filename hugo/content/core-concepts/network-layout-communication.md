---
title: "Network Layout Communication"
description:
type: core-concepts
date: 2018-11-28T14:17:22+05:30
pre : "<b>l. </b>"
weight: 199
---
rapyuta.io is a fully managed service. It is responsible for establishing and
maintaining connectivity between various components of a distributed
robotic application.

The communication between different components can broadly be divided into two
categories:

* communication between the cloud and remote device
* communication within the cloud.

## Communication between cloud and device
rapyuta.io uses multiple channels to communicate with your remote device over
the same physical connection. This allows to cater to different kinds of data
needs, offer purpose-specific optimisation and security. All channels account
for NAT firewall limitations common on client deployment sites, and do not
require the devices to be on the same network or have a public IP address or
require special router configuration.

### Always-On Communication
rapyuta.io maintains two low throughput always-on channels. They are the management channel and telemetry channel.
If your robot is powered-on; connected to the internet; registered with
rapyuta.io, then the channels will be active. They are optimised for reliability,
low resource footprint and security for small payloads such as configuration
commands, remote debug calls, metric and log information.

#### Management Channel
Inspired by the philosophy of separating management networks in a datacenter,
rapyuta.io maintains a dedicated management channel. This ensures critical
commands reach the device when required and are not affected by less vital
information like telemetry.

The device manager uses management channel to communicate with registered
devices using a publish-subscribe pattern for sending all the control commands
from the device manager service to the device manager agent, and for receiving event
messages from the device manager agent. This channel is managed in strong
isolation for each user/group and features per-device unique rotating AES
key-based encryption to ensure security.

#### Telemetry Channel
The connected device generates system metrics and logs that are transported
and processed in the cloud. The dedicated telemetry channel pushes data to a
shared cloud endpoint. Each device channel uses TLS encryption, a unique token,
and is governed by access control policies set by the platform.

### On-demand Communication
Some robotic applications such as a mission flight or a delivery, require a
dedicated, ephemeral communication channel associated with a deployment, and
executed on demand. These are more use-case specific, offer higher bandwidth
and dedicated single-use endpoints (e.g., webSSH, bridging ROS Environments, video, etc).

#### Cloud Bridge
The cloud bridge is responsible for implicitly establishing a communication
channel between two or more ROS environments. It is an application-level bridge
that offers many compelling features to ROS developers.

ROS takes a fully connected graph approach for connecting all relevant ROS nodes.
While this works on a local network, it is suboptimal over a WAN link where it
could lead to a waste of precious bandwidth and run the risk of compromising
latency and reliability. We use an application level whitelist-based approach
to select exactly what information (topic/service/actions) flows over the Internet.
The bridge taps into ROS’s internal mechanics to automate ROS message schema
detection and metadata, it also manages dead peers, remote announcements and
configuration thereby alleviating the need for complex configuration, build steps,
and ROS message definition management.

In a typical ROS application, not all ROS topics are equal, some are more
relevant than others. For instance, some applications would prefer losing
few telemetry messages while ensuring they arrive within a reasonable time bound.
On the other hand, there might be less frequent but application-critical messages
that are required to be delivered. The cloud bridge provides parameters for
configuring bounds on delays, QoS, TTL per topic. Additionally, it is possible
to configure protocol optimisations, load-balancing, selectable compression,
connection pooling, and reassembly. These parameters help reduce routing overheads,
maintain ordering (per-topic), reduce payload size (up to 80% under
certain conditions for sparse messages like a PointCloud), and allow
for horizontal scale out (on services/actions).

Further, each deployment gets a dedicated endpoint to cater to the needs of
that particular deployment. Additionally, the endpoint is randomised and has a
unique set of encryption keys and credentials to ensure security.

#### Special Purpose Communication
Certain workloads such as a remote terminal, device updates, or real-time video
have unique communication and security needs. There are platform-specific or
catalog components to deal with these, and they may open additional
special purpose channels as required.

## Communication within the cloud
Each entity’s resources (device manager, logs, build artifacts, etc.) are
contained within an isolated network. Additionally, each deployment gets its
own dedicated isolated network. This dramatically improves security and
prevent crosstalk between discovery and multicast protocols.
