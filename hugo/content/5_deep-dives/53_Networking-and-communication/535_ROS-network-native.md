---

title: "ROS Native Networks"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 533

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
{{%notice note%}}
Native Network is a beta feature.
{{%/notice%}}

A native network allows you to communicate between different ROS environments as described in the following scenarios:

* ROS environments that are deployed in the cloud.
* ROS environments that are deployed in the device within the same local area network.

{{%notice info%}}
Native networks eliminate the need for creating a separate routed network for the local communication. They also significantly decrease the latency as the communication doesn't involve a cloud bridge for individual ROS environments communication.
{{%/notice%}}

In the case of a native network, multiple ROS environments (all ROS nodes sharing the same ROS_MASTER_URI are considered as a single ROS environment) can discover each other (these could be filtered based on the list of topics/services provided) and the communication happens in a peer-to-peer manner. Each ROS environment has its own ROS master and the rapyuta.io platform uses a sub-component based on the open-source [FKIE multi-master](https://github.com/fkie/multimaster_fkie) to achieve it.

### Native Networks Internals


* Communication happens in a peer-peer manner, which means different ROS masters or environments are connected via a platform using a sub-component based on [FKIE multi-master nodes](https://github.com/fkie/multimaster_fkie) ([master-discovery](http://fkie.github.io/multimaster_fkie/master_discovery.html) and [master-sync](http://fkie.github.io/multimaster_fkie/master_sync.html)). These two nodes are responsible for exchanging information about the ROS graph which is used to establish the communication between nodes associated with each of the "ROS masters" that are connected to the same native network.
* Native network does **NOT** share the parameters between different "ROS environments" (All nodes connected to a single ROSMaster URI comprise a ROS Environment )
* The platform only whitelists the topic/service mentioned in the package component, and the platform doesn't interpret or listen to the data flowing between them unlike in the case of a routed network, thus reducing latency. It only shares publisher/service information on the network.
* Scoped or targeted topics (service or action) are the functionalities of a routed network. In the case of a native network, topics are whitelisted in the form of **/*/topics** and you can use remap or add namespaces to these topics for communication. For more information, see [remapping](http://wiki.ros.org/roslaunch/XML/remap).
* While deploying a package, you can mention [ROS Environment Alias](/5_deep-dives/53_networking-and-communication/531_ros-network-routed/#ros-environment-aliases-runtime-identity-assignment) and [ROS Namespace](http://wiki.ros.org/ROS/EnvironmentVariables#ROS_NAMESPACE) in case of native network. You can also click the ROS **Namespace** check box and the platform automatically sets the value of ROS_NAMESPACE environment variable the same as the ROS environment alias to help you in doing namespacing.
* If there is no ROS Endpoint configured in the package then by default the Native Network will propagate everything

{{%notice warning%}}
*for tf topic*: if you don’t add the tf_prefix, don’t expose the topic as there is a possibility of mixing tf’s.
{{%/notice%}}

{{%notice note%}}
**Compression**, **QOS**, and **Service Timeout** are not applicable in the case of native networks. 
{{%/notice%}}


### ROS2 Native Network Internals

-  Communication happens in a peer-to-peer manner using the Fast DDS Discovery Server protocol feature that offers a centralized dynamic discovery mechanism, as opposed to the distributed mechanism used in DDS by default.

- Native network server provides a Client-Server Architecture that allows nodes to connect with each other using an intermediate server. Each node functions as a discovery client, sharing its info with one or more discovery servers and receiving discovery information from it. This reduces discovery-related network traffic and does not require multicasting capabilities.

- By default, all topics/services/actions are whitelisted in a package component.

{{%notice note%}}
Native networks for ROS2 only work with applications where the underlying ros2 middleware implementation is Fast RTPS. If the user application is using any other ros2 middleware implementation like Cyclone DDS, Connext, or GurumDDS then communication will not work. To use Fast RTPS middleware implementation, export an environment variable `RMW_IMPLEMENTATION` with the value set as `rmw_fastrtps_cpp` before launching your application. 
{{%/notice%}}


### Use Case

Let’s take an example of 3 ROS packages: package_A, package_B, and package_C that are deployed on the cloud.
Suppose we want to establish a communication between these 3 ROS packages.  You can use a native network that simplifies and serves as the best medium for communication.
* Deploy package_A binding to the native network, native_network_1, as deployment_A.
* Deploy package_B binding to the native network, native_network_1, as deployment_B.
* Deploy package_C binding to the native network, native_network_1, as deployment_C.

The results are as follows
* We have established communication between the packages deployed in the cloud (as they are in the same local area network)

{{%notice info%}}
We can establish this communication by using a cloud-routed network. However, using a routed network involves a cloud bridge for each ROS environment that adds latency when a service/action/topics are being called in the same local area network.
{{%/notice%}}


#### Pros 

* Communication through a native network is happening in a peer-to-peer manner which means the subscriber directly makes a connection with the publisher thereby eliminating the latency in each hop-on of messages as in the case of a routed network via cloud bridge. This results in low-latency communication.
* You can see the list of publishers whitelisted in your package components in the *rostopic list* command.
* Native network is very similar to the local single ROS master environment.

#### Cons
* The native network is applicable only for local communication - i.e. within the cloud or within a LAN network of a deployment site. For example, a warehouse.
{{%notice note%}}
When you subscribe to a topic from a different ROS environment, this subscriber information is kept locally and only shared if a topic is whitelisted in a package component.
{{%/notice%}}

### Cloud Native Network

When you deploy a native network to the cloud, it is considered as a cloud native network. Any compute resources (CPU/memory) consumed by this native network deployment count against your cloud deployment hours quota.


#### Resource Limit 

When creating a cloud native network, the **Resource limit** field defines the memory allocation and computational capability of the native network. These resources are reserved in the platform for effective ROS communication. You can choose the resource limit of a native network based on the following requirements:

* number of topics/services/actions
* number of publishers/subscribers/services that will be activated under a particular native network.

{{%notice note%}}
You can connect your deployments to more than one cloud native network for redundancy.
{{%/notice%}}


### Device Native Network
When you deploy a native network to a device, it is considered a device native network. This allows for ultra-low latency peer-to-peer connections between ROS nodes in a Local Area Network (LAN) i.e **ONLY** deployments on devices on the same LAN can bind to it.
Native networks can be deployed to devices that fulfill the following requirements:
* Any online device with docker runtime and AMD64 architecture
* **Restart policy**: Kindly refer to the [restart policy](/5_deep-dives/52_software-development/528_deployment-phase/#restart-policy).

{{%notice warning%}}
To use device native networks the user needs to re-onboard the device to install and enable the new services. 
Also, ensure that cpuset and memory cgroups are enabled.
For instance use native networks with a Raspberry-Pi consider adding the following in /boot/cmdline.txt. `cgroup_enable=cpuset cgroup_enable=memory cgroup_memory=1` 
{{%/notice%}}

{{%notice info%}}
On reboot, devices configured using DHCP may boot up with a new IP address and the network configuration of a deployed native network becomes invalid. This can be avoided by assigning a static IP to the device you intend to deploy a native network to especially in production systems.
{{%/notice%}}


