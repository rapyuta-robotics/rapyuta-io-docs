---

title: "ROS Routed Networks"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 531

versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
    - Deep Dive
---
A Routed network is a rapyuta.io resource to enable ROS communication between different ROS environments. Binding a routed network resource to your deployment will enable other deployments on the same network to consume ROS topics/services/actions as defined in the package. Data flow occurs only when another package chooses to subscribe to a topic, call a service or call an action

The rapyuta.io platform relies on a sub-component called the cloud bridge for implicitly establishing a communication channel between two or more ROS environments. It is an application-level bridge that offers many compelling features to ROS developers including augmented ROS over the public internet and dedicated features for dynamic multi-robot ROS communication.

### Cloud Routed Network

When a user deploys a routed network to the cloud it is considered a cloud routed network. Any compute resources (CPU/memory) consumed by this routed network deployment count against your cloud deployment hours quota.

Package deployments in the cloud __OR__ device can bind to a cloud routed network.

#### Resource Limit for Cloud Routed Network

When creating a cloud routed network, the **Resource limit** field defines the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. You can choose the resource limit of a routed network based on the following requirements.

* size of ROS messages
* frequency of ROS messages
* number of topics/services/actions
* QOS of ROS message
* number of publishers/subscribers that will be active under a particular routed network

#### Use Cases

For the use case, let's take an example of 3 ROS packages: 

* package_A and package_B are deployed in two different devices at different warehouses and package_C is deployed in the cloud. 

We want to establish a communication between 3 different ROS packages publishing and subscribing to each other. To overcome the heterogeneous infrastructure of networks between different packages, we can create a cloud routed network, for example, cloud_network_1, and bind it to the deployments of each package as described in the following.

* Deploy package_A binding to the cloud routed network, cloud_network_1, as deployment_A.
* Deploy package_B binding to the cloud routed network, cloud_network_1, as deployment_B.
* Deploy package_C binding to the cloud routed network, cloud_network_1, as deployment_C.

The result is as follows

* We have established a communication between the packages deployed at different locations with a heterogeneous network.

#### Pros 

* Communication between different ROS environment in heterogenious network is possible as each ROS environment has its own cloud bridge that connects to the cloud routed network for communication.
* Ease of establishing a communication by creating and deploying a cloud routed network.

#### Cons

* The cloud routed network doesn't serve well in latency-sensitive communications. 

### Device Routed Network

In certain cases where communication is latency-sensitive or has high throughput, the user can choose to deploy a routed network to a device. While avoiding a round trip of information to the cloud minimizes latency and allows for better throughput **ONLY** deployments on devices on the same local area network can bind to it.

Routed networks can be deployed to a device with the following parameters:

* **Device**: Any online device with docker runtime and AMD64 architecture
* **Device IP Interface**: network interface (i.e., an IP address) that will be used by other deployments for communication to this routed network.
* **Restart policy**: Kindly refer to the [restart policy](/5_deep-dives/52_software-development/528_deployment-phase/#restart-policy).
On reboot, devices configured using DHCP may boot up with a new IP address and the network configuration of a deployed routed network becomes invalid. This can be avoided by assigning a static IP to the device you intend to deploy a routed network to esp in production systems.

#### Use Cases

For the use case, let's take an example of 3 ROS packages:  

* package_A, package_B, and package_C are deployed in 3 devices respectively in a warehouse sharing the same local area network.

We want to establish a communication between these 3  ROS packages. We can achieve the communication by using a cloud routed network. However, using a cloud routed network might cause a latency in the  communication even if the devices are sharing the same local area network. To avoid this,  you can use device routed network and bind the packages to it.   

* Deploy package_A binding to the device routed network, device_network_1, as deployment_A.
* Deploy package_B binding to the device routed network, device_network_1, as deployment_B.
* Deploy package_C binding to the device routed network, device_network_1, as deployment_C.

The result is as follows

* We have established a communication between the packages in the same routed network.

#### Pros 

* Creates a low-latency communication as there is no need of a roundtrip of communication through cloud.

#### Cons

* Communication through a device routed network is only possible for the ROS environments sharing the same local area network and the packages deployed in the devices.


### Multi-Robot Communication

Avoid complex hardcoded logic in launchfiles that lives with the source code
or binary and automatically add/remove prefixes to ROS interfaces(topics/services/actions).
Additionally, it is more flexible/dynamic to assign and use deploy-time identities
than hard-coded robot names. 

The process of assigning an identity to a robot and the mechanisms to
consume/discover identities of all alive robots is described in the ROS environment aliases topic.

The mechanisms and features offered by the platform to deal with automatic prefix addition and removal is described in the scoping and targeting topics.

#### ROS Environment Aliases: runtime identity assignment 
When __deploying a component__ to a robot in a multi-robot scenario,
the platform expects the user to input a unique alias per component
, thereby, assigning a stable identity to that deployment for the
period of its lifetime.

This __alias__ defined at deploy-time __uniquely identifies__ the robot
in the __scope of an ensemble__ of connected peers.

All __components in the same package__ (each potentially deployed in a
physically different device/location) or __linked dependent deployments__
are considered a __part of an ensemble__.

The platform detects duplicates aliases explicitly for the case of
components and deployment and its immediate parent. 

{{% notice info %}}
This alias is available to Deployment Executables (both cloud and device) through **RIO_ROS_ENV_ALIAS** environment variable.
{{% /notice %}}

{{% notice note %}}
In the case of siblings (two deployments depending on the same parent), the component with
a duplicate alias is considered a conflict and may enter an error
state. The user must be careful and ensure the uniqueness of identities
present in this case.
{{% /notice %}}

#### Discovering peers in an ensemble
rapyuta.io automatically exposes a latched ROS topic
__/rapyuta_io_peers__ of type *std_msgs/String*, which contains the
list of all connected peers aliases, the first
entity is always the alias of the local bridge.

For example, **My_alias,peer_1,peer_2**

The end-user can potentially use this in their ROS applications for
discovering connected robots.

{{% notice note %}}
There may be more than one bridge locally depending on how you
deployed the packages and components so you may receive multiple
messages. In each case, the first element is always the alias of the
bridge that published this message.
{{% /notice %}}

#### Scoping: auto prefix or namespace by self identity
In this configuration, a user may declare a topic/service/action
as ***scoped*** by selecting the **Scoped** option. 

This indicates that when a component is deployed its local ROS interfaces
(topic/service/action) get __automatically prefixed/namespaced bits own dynamic identity__
(its own ROS environment alias) __as seen by all other robots/peers__ in
the ensemble in their respective ROS graph.

For example, suppose robotA publishes */odom* topic in its local
ROS environment. While routing */odom* to either of the robot
peers (for instance a controller) the topic is prefixed with that
specific robot’s name, in this case, */robotA/odom*.

![Scoped topic](/images/multi-robot-communication/scoped-topic.png?classes=border,shadow&width=50pc)

You can express ***scoped*** as:
A scoped topic is a mapping from a /topic to /robot-peer-name/topic.
{{% notice info %}}
**/odom -------> /robotP/odom**
{{% /notice %}}

![Scoped topic as shown](/images/multi-robot-communication/scoped-as-shown.png?classes=border,shadow&width=50pc)

{{% notice note %}}
If in the ROS message logs you experience the error: ***incoming connection failed: unable to receive data from sender, check sender's logs for details***, please ignore it. The error message is generated by ROS internally as a side effect of the sniffing done by the cloud bridge to determine metadata related to ROS message type for the service. It has no other effects on your code and/or the code's functionality, and you can safely ignore it.
{{% /notice %}}

#### Targeting: auto prefix or namespace unwrapping for peers
In this configuration, a user may declare a topic/service/action as ***targeted***
by selecting the **Targeted** option. 

This indicates that when a component is deployed its local
ROS interfaces (topic/service/action)
__containing a prefix/namespace corresponding to another individual peer's dynamic identitiy__
(peers ROS environment alias)
gets __routed to the corresponding peer__ and
__automatically unwraps the prefix/namespace__ in its ROS graph.

For example, suppose robots in a particular scenario subscribe to the
topic */cmd_vel* to move and a central controller needs to ask a
specific robot, say robotA, to move, then it needs to be able to target
only robotA and send messages to its */cmd_vel* subscription.

The controller in the above scenario publishes */robotA/cmd_vel* topic.
While routing */robotA/cmd_vel* the bridge strips the prefix ***robotA***
and publish the messages on the topic ***/cmd_vel*** in robotA’s local ROS
environment.

![Targeted topic](/images/multi-robot-communication/targeted-topic.png?classes=border,shadow&width=50pc)

You can express ***targeted*** as:
A targeted topic is a mapping from /robot-alias/topic to /topic.
{{% notice info %}}
**/robotP/cmd_vel -----------> /cmd_vel**
{{% /notice %}}

![Targeted topic as shown](/images/multi-robot-communication/target-as-shown.png?classes=border,shadow&width=50pc)

#### Targeting and Inbound ROS Interfaces

When a package allows for inbound ROS interfaces, you must provide hints to leverage the automatic
targeting feature. The platform introspects the package to determine if it must enforce the unique identity constraints required for multi-robot communication.

As the platform follows a provider only semantic, determining this is
straightforward for ***scoped*** as it is based on the identity of the deployment
itself. It gets complicated for targeting as this depends on the identity of
other peers. When a package is the first to be deployed (or root in any particular subtree of dependants) it becomes necessary to provide a hint to indicate that
the interfaces will participate in communication topologies that require the
presence of a stable unique identity.

To provide this hint while creating the package, in the *Additional Information*
section, when one adds inbound ROS topics/services/actions one can select the
***can be targeted***. This metadata is used by the platform to
bridge communications and enforce alias constraints.

![Can be targeted](/images/multi-robot-communication/can-be-targeted.png?classes=border,shadow&width=50pc)

![Inbound targeted](/images/multi-robot-communication/inbound-targeted.png?classes=border,shadow&width=50pc)

![Substitute](/images/multi-robot-communication/substitute.png?classes=border,shadow&width=50pc)

