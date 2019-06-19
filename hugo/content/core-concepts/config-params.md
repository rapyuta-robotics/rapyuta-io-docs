---
title: "Configurations"
description:
type: core-concepts
date: 2019-06-17T12:23:20+05:30
pre: "e. "
weight: 141
---
The behavior of a robot (device) is determined by a set of
parameters (as many as a hundred in a set) like the robot's
velocity, controller gains, threshold value, etc.

As a robotic developer, you may need to represent, store,
and review parameters. Additionally, you may want to access
parameters in your source code, modify a subset of parameters
for a particular robot, or add new parameters and apply those to a
group of robots.

Every ROS node in a robot requires several parameters to be set as they
are used to configure the robot. These parameters are usually a
consequence of the software or hardware used in the robot.

The most common pattern in the robotics developer community is to
arrive at a list of base parameters that are required for the
application to run. When moving from the developer testbed to
real-world operations, the operators, developers, and vendors
often wish to override the base parameters so as to satisfy various
requirements.

Let's look at a practical example. It is likely you only want to
override a subset of parameters amongst numerous parameters defined
for a robot based on a particular criterion, say, the velocity of an
AGV defaults to 5m/s, but the regulation in Japan requires you to
limit its velocity to 3m/s. For an AGV to be deployed in Japan
you override its default velocity (5m/s)) to 3m/s. Any other AGV
deployed outside of Japan will still default to a velocity of 5m/s.

rapyuta.io organises a configuration into a tree-like hierarchical
structure called a *configuration hierarchy*. Consider the sample
configuration hierarchy, ***example***, as shown in the figure below.
The parameters of ***example*** are arranged in a specific order. The
hierarchy lets you to override parameter defaults (or base parameters)
or extend existing parameters.

![example configuration](/images/core-concepts/configurations/example-config.png?classes=border,shadow&width=50pc)

A configuration hierarchy consists of three kinds of nodes:

* Root node
* Attribute node
* Value node
* File node

#### Root node
The root node is the root of the configuration hierarchy tree. There
is only one root node per configuration hierarchy. Its name is the
same as the name you provide while creating the configuration
hierarchy. It may contain multiple file nodes and exactly one
attribute node.

In this case, the root node is consequently ***example***.
![root node](/images/core-concepts/configurations/root-node.png?classes=border,shadow&width=30pc)

#### Attribute node
An attribute node is intended to represent a semantic meaning. It is
used to create branches in the configuration hierarchy tree. For instance,
the ***country*** attribute splits the hierarchy subtree based on
the value of its children such as ***USA*** and ***Japan*** (represented as
value nodes). rapyuta.io represents these distinctions as key-value pairs to
allow developers arbitrary flexibility in how they define their hierarchies. 

Attribute nodes can contain only value nodes, each corresponding to a
branch that you wish to represent. In the case of ***example*** configuration, attributes are ***country***, ***motor_controller***.
![attribute node](/images/core-concepts/configurations/attribute-nodes.png?classes=border,shadow&width=30pc)

#### Value node
A value node maps to a specific kind of its parent attribute. It is of
the same colour as the colour of its parent attribute. It can contain
multiple file nodes and only one attribute node, corresponding to any further
branching you may wish to define under that particular value.

In ***example*** configuration, ***USA*** and ***Japan*** are value nodes of **country**
attribute.
![value node](/images/core-concepts/configurations/value-node.png?classes=border,shadow&width=30pc)

#### File node
A file node holds the actual configuration file containing
parameters. The configuration file is written in **YAML** format. Files
from a sub-tree (a more specific set of attributes and values vis a
vis its parent) **recursively override/extend** the parameters defined in
any less specific file node with identical names. Subtrees may define
entirely new file nodes (with different names), which are used in
resolution at that level.

In ***example*** configuration, ***example/sample.yaml***, ***USA/sample.yaml***
and ***Japan/sample.yaml*** are file nodes such that the last two files may
either override or extend the existing ***example/sample.yaml*** file.
![file nodes](/images/core-concepts/configurations/parameters-files.png?classes=border,shadow&width=30pc)

## Consuming configuration hierarchies
Often the people responsible for defining configuration
parameters and hierarchies are different from those using them or
operating robots. This calls for decoupling the consumption of the
parameters from the operation of robots. So, rapyuta.io
lets you to define a set of key-value pairs, called
[*device labels*](/getting-started/apply-config-params/#defining-labels-for-devices)
to tag a robot.

## Resolving parameters for devices
When you [apply a configuration](/getting-started/apply-config-params/#applying-configuration-parameters-to-devices) to a robot, rapyuta.io
utilizes the device labels to traverse the configuration
hierarchy in the ***example*** configuration.

## Overriding configuration parameters
The base parameters (or parameters defaults) file is usually located at
the root of the configuration hierarchy. In ***example*** configuration,
***example/sample.yaml*** file is the base parameters file and it is located
under the ***example*** root node.

![parameter defaults](/images/core-concepts/configurations/parameter-defaults.png?classes=border,shadow&width=50pc)

The parameters are represented as **key: value** pairs like
***max_velocity: 5***, which indicates that the maximum velocity of an
AGV is 5m/s.

You can override or extend base parameters by defining **sample.yaml**
files at different levels of the configuration hierarchy.

Suppose that the regulation in Japan requires you to limit the
maximum velocity of an AGV from **5m/s** to **3m/s**. You can override the
***max_velocity*** of the AGV by assigning a new value to it. The
***sample.yaml*** file under the ***Japan*** value includes only the
***max_velocity*** parameter, but with its default overridden.

![override parameters](/images/core-concepts/configurations/override-max-vel.png?classes=border,shadow&width=40pc)

The final parameters file is a result of merging the base parameters
(***example/sample.yaml***) and the overridden parameters
(***Japan/sample.yaml***).

## Extending configuration parameters
You can add new parameters so as to extend the list of base
parameters. For instance, the ***USA/sample.yaml*** defines an additional parameter, ***example_param_usa: val***.

The resultant file after merging the base parameters in ***example/sample.yaml***
and newly added parameters in ***USA/sample.yaml*** will include
***example_param_val*** in addition to those already present.

![extend parameters](/images/core-concepts/configurations/extend-params.png?classes=border,shadow&width=40pc)

{{% notice info %}}
Learn how to
[apply a configuration to a robot (device)](/getting-started/apply-config-params/).
{{% /notice%}}
