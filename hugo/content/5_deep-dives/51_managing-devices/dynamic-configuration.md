---
title: "Dynamic Configuration"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 514
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

The behavior of a robot (device) is determined by a set of
parameters, for instance, the robot's velocity, controller gain threshold, or an image of a warehouse layout. 
These parameters are usually a consequence of the software and hardware used in the robot and the environment.

As a robotic developer, you need to represent, store, and review parameters. Additionally, you might want to access
parameters in your source code, modify a subset of parameters for a particular robot, or add new parameters and apply those to a
group of robots. A common pattern found in the robotics developer community is to arrive at a list of base parameters that are required for the application to run. When moving from the developer testbed to real-world operations, the operators, developers, and vendors
often wish to override the base parameters to satisfy various requirements.

The *rapyuta.io* platform provides a mechanism that allows a developer to set, review, update and override the configuration for any connected robot. 
Configuration parameters in the ***rapyuta.io*** platform are represented by a *tree-like* hierarchical structure 
called  ***configuration hierarchy***.  

Every configuration hierarchy consists of the following four kinds of nodes:

- [RootNode](/5_deep-dives/51_managing-devices/dynamic-configuration/#rootnode)
- [AttributeNode](/5_deep-dives/51_managing-devices/dynamic-configuration/#attributenode)
- [FolderNode](/5_deep-dives/51_managing-devices/dynamic-configuration/#foldernode)
- [ValueNode](/5_deep-dives/51_managing-devices/dynamic-configuration/#valuenode)
- [FileNode](/5_deep-dives/51_managing-devices/dynamic-configuration/#filenode)

 Consider the sample configuration hierarchy, ***example***, as shown in the following figure.
The parameters of ***example*** are arranged in a specific order. The
hierarchy allows you to override the default parameters(or base parameters)
or extend existing parameters based on the country of operation.


To view an example of how you may leverage configuration hierarchies please refer to the illustrated section on **Resolve Configuration Hierarchy** 
 
![example configuration](/images/core-concepts/configurations/example-config.png?classes=border,shadow&width=20pc)

#### RootNode
The RootNode is the root of the configuration hierarchy tree. There
is only one RootNode per configuration hierarchy. Its name is
the same as the name you provide while creating the configuration
hierarchy. The RootNode allows you to add an attribute,folders, add/upload
 configuration files, and apply the base label configuration parameters to a device.

 It might contain multiple file nodes and exactly one
attribute node.

In this case, the RootNode is consequently ***example***.
![root node](/images/core-concepts/configurations/root-node.png?classes=border,shadow&width=20pc)

#### AttributeNode
Devices in rapyuta.io allow the user to set arbitrary labels (modeled as key-value pairs) corresponding to attributes of an onboarded device such as vendor, warehouse, country of operation, software version, etc.

The developer might need to override certain configurations based on one particular attribute of the device (eg device *country*).
To do this, the developer must create an  **AttributeNode** which effectively creates a new overriding *"branch"* in the *configuration hierarchy*. 
Each attribute node should have at least one value node. Furthermore, you can also create more AttributeNodes 
from the corresponding value nodes and define the hierarchy of the configuration tree.

For example,
the ***country*** attribute splits the hierarchy subtree based on
the value of its children, such as ***USA*** and ***Japan*** (represented as
value nodes). rapyuta.io represents these distinctions as key-value pairs to
allow developers arbitrary flexibility in how they define their hierarchies. 

AttributeNodes can contain only value nodes, each corresponding to a
branch that you wish to represent. In the case of ***example*** 
configuration, attributes are ***country***, ***motor_controller***.
![attribute node](/images/core-concepts/configurations/attribute-nodes.png?classes=border,shadow&width=20pc)

#### Folder Node
Folder nodes typically refer to a hierarchical organization of configuration settings that are grouped together. They help users navigate and manage large sets of configuration parameters more easily. When the configuration is applied, all the folders and files within them will be synchronized with the device or cloud deployments.
Devices in rapyuta.io allow the user to create multiple folders from the root node. Multiple sub-folders can be created inside a folder, and each of the folders and sub-folders can contain multiple files.
For example, the root node *example* has the country folder has two sub folders, USA and Japan, and each of these sub folders contain the yaml files.

{{%notice note%}}
You can either add a folder node or an attribute node form the root node. 
Overriding configuration parametrs 
{{%/notice%}}

![folder node](/images/core-concepts/configurations/folder-nodes.png?classes=border,shadow&width=20pc)

#### ValueNode
Each value node corresponds to one particular value that is of the type of the parent attribute node (eg device *country=**Japan***)  corresponding to a particular branch of the configuration hierarchy that will be used to override the more general configuration values.
The parent attribute and the corresponding child value nodes are of the same color. It can contain
multiple file nodes and only one attribute node. Furthermore, from the attribute node, 
you can create multiple value nodes and define the hierarchy of the configuration tree.

In ***example*** configuration, ***USA*** and ***Japan*** are value nodes of **country** attribute.
![value node](/images/core-concepts/configurations/value-node.png?classes=border,shadow&width=20pc)

#### FileNode
A FileNode holds the actual configuration file containing parameters and data to be applied to the device. 
*rapyuta.io* configuration parameters allow the user to use any arbitrary file format (eg: images,xml, json, binary) while providing *special overriding behavior* for the **YAML** format.

FileNodes from a *sub-tree* (a more specific set of attributes and values vis a
vis its parent) that **recursively override/extend** the parameters defined in
any less specific FileNode with identical names. Subtrees may define
entirely new FileNodes (with different names), which are used in
resolution at that level.

In ***example*** configuration, ***example/sample.yaml***, ***USA/sample.yaml***
and ***Japan/sample.yaml*** are FileNodes such that the last two files may
either override or extend the existing ***example/sample.yaml*** file.
![file nodes](/images/core-concepts/configurations/parameters-files.png?classes=border,shadow&width=20pc)


To view an example of how you may leverage configuration hierarchies please refer to the illustrated section on [overriding behavior](#overriding-configuration-parameters) 

## Resolving Configuration Hierarchy

A common pattern in the robotics developer community is to
arrive at a list of base parameters that are required for the
application to run. When moving from the developer testbed to
real-world operations, the operators, developers, and vendors
often wish to override or add new parameter values to the 
base parameters to satisfy various
requirements.

When you apply a configuration to a robot, rapyuta.io
utilizes the device labels to traverse the configuration
hierarchy. While the platform provides simple override rules for binary files, it provides a much cleverer approach for YAML type files commonly used in *roslaunch* configurations where it merges data from within the file as it traverses a hierarchy.

> Let's look at a practical example. It is likely you only want to
override a subset of parameters amongst numerous parameters defined
for a robot based on a particular criterion, for example, the velocity of an
AGV defaults to 5m/s, but the regulation in Japan requires you to
limit its velocity to 3m/s. For an AGV to be deployed in Japan,
you override its default velocity (5m/s) to 3m/s. Any other AGV
deployed outside of Japan might still require the default velocity of 5m/s.

> Another example of using the configuration parameter is the map images for the robots stationed at different warehouses. The map image for a robot "A" stationed at japan warehouse might be different than the map image of the same type of robot stationed at the USA warehouse. ***rapyuta.io*** allows you to upload different map images as the configuration hierarchy to suit your need.

## Overriding configuration parameters

### Overriding Rules for FileNodes (Binary)

If you have uploaded the base parameters (or default parameters) as a binary file and uploaded a binary file with *different* content but the same file name at a *different level* but the more specific level in the configuration hierarchy, when applying the configuration at the attribute level, the base parameter file is **replaced** with the file with the more specific attribute level.

In the following images, the checksum file for the base parameters file and the configuration file at the attribute level  **test.html** are different.
![base binary parameter](/images/core-concepts/configurations/root-binary-file.png?classes=border,shadow&width=65pc)

When applying the configuration to the devices, the base parameter file is replaced by the file you had uploaded at the attribute level. The following image displays the configuration file that is applied to the device.
![base binary parameter](/images/core-concepts/configurations/updated-binary-file.png?classes=border,shadow&width=65pc)

### Overriding Rules for FileNodes of type YAML

In the case of YAML files, while the order of resolution and overriding remains identical to binary files, the result is a little different.
The more specific FileNode content **does NOT replace** the content of the original file but **merges and replaces specific key-value pairs within the YAML file**.  

The base parameters (or parameters defaults) file is usually located at
the root of the configuration hierarchy. In ***example*** configuration,
***example/sample.yaml*** file is the base parameters file, and it is located
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

![override parameters](/images/core-concepts/configurations/override-max-vel.png?classes=border,shadow&width=65pc)

The final parameters file is a result of merging the base parameters
(***example/sample.yaml***) and the overridden parameters
(***Japan/sample.yaml***).



### Extending configuration parameters
You can add new parameters to extend the list of base
parameters. For instance, the ***USA/sample.yaml*** defines an additional parameter, ***example_param_usa: val***.

The resultant file after merging the base parameters in ***example/sample.yaml***
and newly added parameters in ***USA/sample.yaml*** will include
***example_param_val*** in addition to those already present.

![extend parameters](/images/core-concepts/configurations/extend-params.png?classes=border,shadow&width=80pc)


{{% notice info %}}
You may ***clone an existing configuration*** into another project.
Cloning saves you from the redundant task of defining the
same configurations from scratch again. However, cloning a configuration
inside the same project is not supported.
{{% /notice %}}

{{% notice info %}}
You may ***rename an already defined configuration***.
{{% /notice %}}
