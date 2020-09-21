---
title: "Dynamic Configurations"
description:
type: developer-guide
date: 2019-10-30T15:04:21+05:30
pre: "1. "
weight: 401
---
The behavior of a robot (device) is determined by a set of
parameters (as many as a hundred in a set) like the robot's
velocity, controller gains, threshold value, etc.

As a robotic developer, you may need to represent, store,
and review parameters. Additionally, you may want to access
parameters in your source code, modify a subset of parameters
for a particular robot, or add new parameters and apply those to a
group of robots.

Every ROS node in a robot requires several parameters to be set as they are used to configure the robot. These parameters are usually a consequence of the software or hardware used in the robot.

 ***rapyuta.io*** allows you to add/upload these parameters, 
for example,
device configurations, ROS parameters, map images etc on the devices. 

The configuration parameters in the ***rapyuta.io*** platforms are 
represented by a tree-like hierarchical structure 
called  *configuration hierarchy*. 
Every configuration hierarchy consists of the following four kinds of nodes:

* Root node
* Attribute node
* Value node
* File node

 Consider the sample
configuration hierarchy, ***example***, as shown in the following figure.
The parameters of ***example*** are arranged in a specific order. The
hierarchy allows you to override the default parameters(or base parameters)
or extend existing parameters.



![example configuration](/images/core-concepts/configurations/example-config.png?classes=border,shadow&width=20pc)



#### Root node
The root node is the root of the configuration hierarchy tree. There
is only one root node per configuration hierarchy. Its name is the
same as the name you provide while creating the configuration
hierarchy. The root node allows you to add an attribute, add/upload
 configuration files, and apply the base lebel configuration parameters
  to a device.

 It may contain multiple file nodes and exactly one
attribute node.

In this case, the root node is consequently ***example***.
![root node](/images/core-concepts/configurations/root-node.png?classes=border,shadow&width=20pc)

#### Attribute node
An attribute node is intended to represent a semantic meaning. It is
used to create branches in the configuration hierarchy tree. 
An attribute node is presented in a key-value pair. 
Each attribute node should have at lease one value node. 
Furthermore, you can also create more attribute nodes 
from the corresponding value nodes and define the 
hierarchy of the configuration tree.

For example,
the ***country*** attribute splits the hierarchy subtree based on
the value of its children, such as ***USA*** and ***Japan*** (represented as
value nodes). rapyuta.io represents these distinctions as key-value pairs to
allow developers arbitrary flexibility in how they define their hierarchies. 

Attribute nodes can contain only value nodes, each corresponding to a
branch that you wish to represent. In the case of ***example*** 
configuration, attributes are ***country***, ***motor_controller***.
![attribute node](/images/core-concepts/configurations/attribute-nodes.png?classes=border,shadow&width=20pc)

#### Value node
Each value node is mapped to its parent attribute node. 
The parent attribute and the corresponding child
 value node are of same color. It can contain
multiple file nodes and only one attribute node. 
Furthermore, from the attribute node, 
you can create multiple value nodes 
and define the hierarchy of the configuration tree.

In ***example*** configuration, ***USA*** and ***Japan*** are value nodes of **country** attribute.
![value node](/images/core-concepts/configurations/value-node.png?classes=border,shadow&width=20pc)

#### File node
A file node holds the actual configuration file containing
parameters. The configuration file is written either 
in a **YAML** format or you can upload a binary file 
as a configuration file from your local machine.
 Files from a sub-tree (a more specific set of attributes and values vis a
vis its parent) **recursively override/extend** the parameters defined in
any less specific file node with identical names. Subtrees may define
entirely new file nodes (with different names), which are used in
resolution at that level.

In ***example*** configuration, ***example/sample.yaml***, ***USA/sample.yaml***
and ***Japan/sample.yaml*** are file nodes such that the last two files may
either override or extend the existing ***example/sample.yaml*** file.
![file nodes](/images/core-concepts/configurations/parameters-files.png?classes=border,shadow&width=20pc)



