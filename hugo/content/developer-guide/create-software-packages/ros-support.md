---
title: "ROS Support"
description:
type: developer-guide
date: 2019-10-25T12:34:38+05:30
pre: "3. "
weight: 280
---
### Implicit ROS Master
You do not have to include the ROS Master as an executable of a component if it is meant to run on the cloud. The platform manages running ROS Master for you on the cloud and the container preinstalled device runtime. 

{{% notice note %}}
In the special case where the user chooses to use the **preinstalled** runtime on the device it is not possible for rapyuta.io to ascertain the state and configuration of your system in an non-invasive manner. Here we require the user to ensure it is started before platform tools interact with it. The user could handle this during device boot, or ensure it is added in the corresponding package as an executable.
{{% /notice %}}

### ROS Native Communication Interfaces
The unique communication architecture in rapyuta.io solves many of the challenges associated with running ROS1 across multiple robots in a local network or even across the public internet.

It provides first class support for ROS topics, services and actions adding crucial features like QoS, compression, transport multiplexing, authentication,encryption, etc while protecting you against adverse effects of transient network errors.

The platform adopts a declarative approach to describing the ROS interfaces (topics/services/actions) your application publishes or provides. This information is later used by the platform while binding/linking different deployments together to automatically proxy the right information to the right deployment. This works for arbitrary message types and only requires the user to providing topic/service/action names and zero changes to your application source.


#### Defining QOS
rapyuta.io offers a tunable level of reliability for ROS topics for the transport layer even over the public internet. The QoS (quality of service) attribute of the package reflects this function. The offered and the recommended uses cases are as follows:

##### Maximum
This is the highest possible QoS by using end to end protocol delivery confirmations, message ordering guarantees and retires in case of failure.  This is typically intended for one off critical control/command messages.
e.g. : Start/Stop application

##### Low
This is the lowest possible QoS and must be used for rapidly produced data such as sensor/telemetry data where the application can tolerate small message loss in favour of better performance, throughput and lower latency.

##### High and Medium
These are intermediate levels offered between the two extremes that may be more suited in more intermediate cases. Each level trades off to balance reliability and performance differently.

#### Compression
The user may optionally enable transparent compression. The platform relies on “snappy” compression algorithm. Compression is not free, you usually pay a small penalty, with messages long repeats and sparse data such as laser scan, maps etc. The benefits of a reduced payload more than compensate for this penalty and let the user send much larger volumes of data over the communication link.

#### Multi-robot Support
ROS has a number of key pain points when working with multi-robot systems that often need error prone setups involving specific launch sequences, roslaunch/xml files and remappings. rapyuta.io ships with special support for multi-robot systems and enforces runtime identities to robots to automatically wrap and unwrap for the right agent. 

Refer to the [multi-robot support](/developer-guide/manage-software-cycle/communication-topologies/ros-support/#multi-robot-support) section for further details.

{{% notice note %}}
In complex dependency patterns rapyuta.io allows parent child relations where a package must whitelist ros interfaces it can bind to from a child as **inbound ros interfaces**. Refer to the [inbound interfaces](/developer-guide/manage-software-cycle/communication-topologies/ros-support/#inbound-interfaces) section for more details.
{{% /notice %}}

