---
title: "Package: ROS Support"
description:
type: developer-guide
date: 2019-10-25T12:34:38+05:30
# pre: "3. "
weight: 526
---
## Implicit ROS Master
You do not have to include the ROS Master as an executable of a component
if it is meant to run on the cloud. The platform manages running ROS
Master for you on the cloud and the container preinstalled device runtime. 

{{% notice note %}}
In the special case where the user chooses to use the **preinstalled**
runtime on the device, it is not possible for rapyuta.io to ascertain the
state and configuration of your system in a non-invasive manner. Here, you
should ensure it is started before the platform-tools interact with it. You
could handle this during device boot, or ensure it is added in the
corresponding package as an executable.
{{% /notice %}}

## Augmented ROS 
In the ROS1 world, all relevant ROS nodes form a fully connected
communication graph with peer-to-peer data transfer mediated by a
single point of discovery (ROSMASTER).
This is a reliable approach when dealing with communication on
the same piece of hardware. 

Core ROS1 architecture (rosmaster, params, protocol) is not designed
to handle any kind of node/network failure or transient loss. While one
may get lucky on a local network, it is destined for failure in most
real-world network environments and the public internet. It also lacks
necessary features such as QoS, encryption/security, compression required
while building enterprise-grade applications. Additionally, while working with
multiple robots/multiple hardware nodes, it mandates complex configurations
and namespacing to assign identities, and avoid inadvertent
cross-talk (e.g. two robots publishing to the same */odom* topic).

To facilitate communication topologies that involve ROS nodes on
multiple nodes, in different physical environments, with different
robot kinds and diverse application needs, 
rapyuta.io's communication fabric transparently implements key
features to augment the shortcomings of ROS while adding crucial
enterprise features.

* A declarative **application-level whitelist** based approach to select only the needed information (topic/service/actions) flows out of a robot - this prevents cross-talk and saves valuable bandwidth over the network.
* **Automated ROS message schema & metadata detection**  enabling type independent behavior for arbitrary messages (including the users custom messages). 
* Built-in **remote peer-detection**, ROS topic/service/action **announcements** with **liveliness** checks for safe-guards against transient node and network failure.
* Tunable __per-topic QoS settings__ as not all ROS topics are equal. 
  Some are more relevant than others. For instance, some applications would prefer losing
a few telemetry messages while ensuring they arrive within a reasonable time-bound.
On the other hand, there might be less frequent, but application-critical messages
that are required to be delivered. 
* __Tunable timeouts for ROS services__ - Prevents user code that relies on ROS services from lock-ups (natively ROS services have an infinite timeout) in case of transient network failure. 
* __Transparent tunable compression__ for topics/services/actions - potentially reduce payload size (up to 80% for sparse messages for e.g. PointCloud)
* __Transparent 2048-bit encryption for all data__.
* [Per-deployment](/developer-guide/manage-software-cycle/deployments/) __randomization of connection endpoints, credentials and encryption-keys__
* Elegant [semantics](/developer-guide/manage-software-cycle/communication-topologies/ros-support/#scoping-auto-prefix-or-namespace-by-self-identity) enabling simple __dynamic multi-robot communication topologies without complex launchfile and namespace hacks__.
* Built-in features and optimizations to provide robust connectivity over the public internet transparently such as retries, connection-pooling, order reassembly mechanisms. 

{{% notice note %}}
If in the ROS Service logs you experience the error: ***incoming connection failed: unable to receive data from sender, check sender's logs for details***, please ignore it. The error message is generated by ROS internally as a side effect of the sniffing done by the cloud bridge to determine metadata related to ROS message type for the service. It has no other effects on your code and/or the code's functionality, and you can safely ignore it.
{{% /notice %}}

### Declarative ROS Interfaces
The platform adopts a declarative approach to describing the ROS
interfaces (topics/services/actions) your package provides. 
This information is used by the platform while binding/linking
different deployments together to automatically proxy the right
information to the correct deployment. It works for arbitrary
message types and only requires the user to providing topic/service/action
names and zero changes to your application source.

To promote reuse of applications and allowing for as much
flexibility as possible, rapyuta.io intentionally does not
enforce pre-defining which package can depend on the other,
this is left to the developer. 

#### Inbound Interfaces
{{% notice info %}}
To learn about composing software using multiple packages please first refer to the [design patterns section](/developer-guide/manage-software-cycle/compose-software/design-patterns/)
{{% /notice %}}
While having provider semantics provides flexibility but can potentially lead to a case where a user may deploy a package that depends on a previously deployed one without sufficient knowledge of the internal workings of the parent package. Cross talk between topics/services/actions in such cases can cause unintended hard to debug errors and failure of application code. 

To prevent against such unintentional cross-communication between deployments of two packages, rapyuta.io requires a package to declare a whitelist of ROS inbound topics/services/interfaces it can receive from a child dependant on it. 

{{% notice note %}}
If you intend to add a deployment of any package as a dependent deployment of the current package, the ROS topic/service/action of the dependent deployment must be declared as an inbound ROS interface. An inbound ROS interface could be a ROS topic that a dependent deployment publishes to the current package, a ROS service, or a ROS action of the dependent deployment provided that the current package is allowed to call that ROS action or ROS service.
{{% /notice %}}

### Service Timeouts
A ROS service call is blocking in nature. It prevents the client
thread from continuing to execute further instructions until it
receives a reply from a ROS server. Occasionally, the service call
waits much longer than expected, and in more adverse cases, the call
never returns due to software or network failure. Hence, further
execution of the client program is stalled.

rapyuta.io defines ROS service timeout as the number of seconds to wait
for a response to the service request before timing out and erroring out.
The application developer must add appropriate logic to handle these exceptions as required. **_The default timeout is 120 seconds._**

### QOS for Topics
rapyuta.io offers a tunable level of reliability for ROS topics for the transport layer even over the public internet. The QoS (quality of service) attribute of the package reflects this function. The offered and the recommended uses cases are as follows:

##### Maximum
The highest possible QoS is **Maximum** by using end to end protocol delivery confirmations, message ordering guarantees, and retires in case of failure.  It is typically intended for one-off critical control/command messages.
e.g. : Start/Stop application

##### Low
The lowest possible QoS is **Low** and is used for rapidly produced data such as sensor/telemetry data where the application can tolerate small message loss in favor of better performance, throughput, and lower latency.

##### High and Medium
These are intermediate levels offered between the two extremes that may be more suited in more intermediate cases. Each level trades off to balance reliability and performance differently.

### Compression
The user may optionally enable transparent compression. The platform relies on a *snappy* compression algorithm. Compression is not free. You usually pay a small penalty, with messages long repeats and sparse data such as laser scans, maps, etc. The benefits of a reduced payload more than compensate for this penalty and let the user send much larger volumes of data over the communication link.


### Multi-robot Support
ROS has several key pain points when working with multi-robot systems that often need error-prone setups involving specific launch sequences, roslaunch/XML files, and remappings. rapyuta.io ships with special support for multi-robot systems and enforces runtime identities to robots automatically wrap and unwrap for the right agent. 

{{% notice info %}}
Learn more about [dedicated ROS communication support](/developer-guide/manage-software-cycle/communication-topologies/ros-support/)
{{% /notice %}}

## Ros Bag Job
A ROS bag is a file format in ROS for storing ROS topic message data. The rapyuta.io platform allows you to record the ROS messages (ROS topics) for ROS enabled components deployed on the cloud. You can stop the recording and download the stored data for further analysis and troubleshooting. You must define the topics that you want to record while configuring the components in a package, or during deployment. If you have defined any ROS bag job during package creation or deployment, you can also add new ROS bag jobs for the same component after deployment.

{{% notice note %}}
Ros bag job is not supported on the components that are deployed on the device.</br>

{{% /notice %}}

{{% notice note %}}
Maximum of three jobs can be added to a component.
 
{{% /notice %}}