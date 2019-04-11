---
title: "Multi-Robot Communication"
description:
type: core-concepts
date: 2019-03-18T10:26:10+05:30
pre: "1. "
weight: 199
---
Topics, services, and actions are the primary way ROS nodes communicate
with each other in a ROS (in this document when we refer to ROS we imply
ROS1) environment.

Topics, services, and actions are implicitly typed by the message
definition used to declare the topic/service/action. For instance, a
robot’s sensors may publish information about itself on a topic called
***/odom*** and use the message *nav_msgs/Odometry*, at the same time the
onboard controller may receive control commands for its motion on
***/cmd_vel*** of the type  *geometry_msgs/Twist*. This pattern may sound
familiar to ROS users and is used in the popular *move_base* package.

When this paradigm needs to be applied to multiple robots, the often
used approach is to namespace each of these topics by the ***\<robot_name\>***
so you get topics like ***/\<robot_name\>/odom*** and ***/\<robot_name\>/cmd_vel***
To use this in practice with existing ROS tooling requires a careful
juggling of configuration management, setting intricate parameters and
some clever tricks with topic remap and/or roslaunch. ROS works well
within a single robot system and you can still enjoy all the benefits of
the tools, packages, and community. While working with multiple robots
due to the design limitations of ROS and requires all nodes to share a
common ROS master, which in a dynamic environment with multiple agents
quickly falls apart.

The rapyuta.io platform offers an elegant solution for multiple robot communication as a primary feature. In the rapyuta paradigm, the
component of each package is treated as an isolated ROS environment.
While declaring the package the user is only required to provide the
topics/services/actions required to be exposed by that particular
component. The platform is then responsible for connecting, managing
and securing the ROS environments together. We introduce a set of
new features aimed at making it a lot easier to use multiple robots.

### ROS Environment Aliases

When deploying a component to a robot in a multi-robot scenario,
the platform expects the user to input a unique alias per component
(more on this in the next section).
This alias uniquely identifies the robot in an ensemble of connected
peers, i.e., components in the same package (each potentially deployed
in a physically different device/location) or dependent deployments.
The platform detects duplicates explicitly for the case of components
and deployment and its immediate parent. In the case of siblings
(two deployments depending on the same parent), the component with
a duplicate alias is considered a conflict and may enter an error
state. The user must be careful and ensure the uniqueness of identities
present in this case.

Each *components environment* offers a latched ROS topic
*/rapyuta_io_peers* of type *std_msgs/String*, which contains the
list of all connected peers in a comma-separated string, the first
entity is always the alias of the local bridge.

For example, **My_alias,peer_1,peer_2**

There may be more than one bridge locally depending on how you
deployed the packages and components so you may receive multiple
messages. In each case the first element is always the alias of the
bridge that published this message.

The end user can potentially use this information in their application
logic for multi-robot discovery.

### Multi-Robot Communication Configuration

Imagine a game of robot soccer where players are robots, and their
head coach is a controller unit. The controller broadcasts the
message */move* to each player, while players broadcast their respective
pose and location through */odom*  for the controller to subscribe to it.
For instance, if the controller wants robot A to move in a specific direction,
it explicitly publishes */robotA/move*, and similarly publishes */robotB/move*
and */robotC/move* to robot B and robot C respectively. As more players are
added to the field, this approach gets complex and lacks the dynamic
binding between robot peers and the controller.

On the other hand, each robot peer (say A, B and C) explicitly
publishes */robotA/odom*, */robotB/odom* and */robotC/odom* messages for
the controller to subscribe. However, a complex launch file creates a
bottleneck in this case. Hence, the concept of targets and scopes are
introduced for supporting the discovery and addressing of multiple robots.

In the following sections, we discuss the possible communication
configurations that may be used to communicate in a multi-robot use case.
The presence of these options during package creation is used by the
platform to determine if it has to enforce alias constraints at
deployment time.

![Robot soccer block diagram](/images/multi-robot-communication/robotSoccer-blk-diagram.png?classes=border,shadow&width=50pc)

### Scoped - Topics, Actions, Services

In this configuration, a user may declare a topic/service/action as
scoped by selecting the Scoped option. This indicates that when the
component is deployed the topic/service or action gets namespaced as
seen by the other robots by the alias of the deployed component.

For example, suppose robotA publishes */odom* topic in its local
ROS environment. While routing */odom* to either of the robot
peers (for instance a controller) the topic is prefixed with that
specific robot’s name, in this case */robotA/odom*.

![Scoped topic](/images/multi-robot-communication/scoped-topic.png?classes=border,shadow&width=50pc)

Mathematically, you can express ***scoped*** as:
A scoped topic is a mapping from a /topic to /robot-peer-name/topic.
{{% notice info %}}
**/odom -------> /robotP/odom**
{{% /notice %}}

![Scoped topic as shown](/images/multi-robot-communication/scoped-as-shown.png?classes=border,shadow&width=50pc)

### Targeted Topics

In the case of services and actions, where there is a clear semantic
of a provider and a caller, it is enough to apply a scope as each
agent that enters the system knows its own identity and provides
enough information to others to be able to reach it.

Topics do not innately have a sense of direction, thus scoping
alone does not suffice. We need a mechanism to address/targets
peers by their identities (aliases) dynamically.

For example, suppose robots in a particular scenario subscribe to the
topic */cmd_vel* to move about and a central controller needs to ask a
specific robot say robotA to move, then it needs to be able to target
only robotA and send messages to its */cmd_vel* subscription.

The controller in the above scenario publishes */robotA/cmd_vel* topic.
While routing */robotA/cmd_vel* the bridge strips the prefix ***robotA***
and publish the messages on the topic ***/cmd_vel*** in robotA’s local ros environment.

![Targeted topic](/images/multi-robot-communication/targeted-topic.png?classes=border,shadow&width=50pc)

Mathematically, you can express ***targeted*** as:
A targeted topic is a mapping from /robot-alias/topic to /topic.
{{% notice info %}}
**/robotP/cmd_vel -----------> /cmd_vel**
{{% /notice %}}

![Targeted topic as shown](/images/multi-robot-communication/target-as-shown.png?classes=border,shadow&width=50pc)

rapyuta.io  and the cloud bridge are responsible for maintaining
a list of agents,and ensuring that appropriate routing, subscriptions
and bridges are formed dynamically for each agent entering a
particular system.

### Inbound Targeted Topics

This serves a purpose identical to the targeted topics albeit
in a dependant deployment scenario.

While creating the package, in the additional information
section, when one adds inbound ROS topics one can select the
***can be targeted*** . This metadata is used by the platform to
bridge communications and enforce alias constraints.

![Can be targeted](/images/multi-robot-communication/can-be-targeted.png?classes=border,shadow&width=50pc)

![Inbound targeted](/images/multi-robot-communication/inbound-targeted.png?classes=border,shadow&width=50pc)

![Substitute](/images/multi-robot-communication/substitute.png?classes=border,shadow&width=50pc)