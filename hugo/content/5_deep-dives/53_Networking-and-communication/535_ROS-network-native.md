---

title: "ROS Native Networks"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 532

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

A native network allows you to communicate between different ROS environments that are deployed in the cloud or devices (within the same local area networks) within the same local area network. This eliminates the need of creating a separate routed network for the local communication and significantly decreases the latency as the communication doesn't involve a cloud bridge for individual ROS environments for communication and the platform uses a sub-component based on [FKIE multimaster](https://github.com/fkie/multimaster_fkie) for this.

In case of native network, all the connected ROS environments can discover each other and the communication happens in a peer-to-peer manner. Each ROS environment has its own ROS master and the rapyuta.io platform uses a sub-component using [FKIE multimaster](https://github.com/fkie/multimaster_fkie) to achieve it.


### Cloud Native Network

When you deploy a native network to the cloud, it is considered as a cloud native network.

When creating a cloud routed network, the **Resource limit** field defines the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. You can choose the resource limit of a routed network based on the following requirements.

* size of ROS messages
* frequency of ROS messages
* number of topics/services/actions
* QOS of ROS message
* number of publishers/subscribers that will be active under a particular routed network.

{{%notice note%}}
You can create more than one cloud native networks for redundancy.
{{%/notice%}}


#### Use Cases

For the use case, let's take an example of 3 ROS packages: 

* package_A, package_B, and package_C are deployed in 3 devices respectively in a warehouse sharing the same local area network.

We want to establish communication between these 3  ROS packages. We can establish the communication by using a routed network. However, using a routed network involves cloudbridges for each ROS environment that adds latency when service/action/topics are being called in the same local area network. To simplify this communication, you can use a native network that serves as the best medium for communication.

* Deploy package_A binding to the native network, native_network_1, as deployment_A.
* Deploy package_B binding to the native network, native_network_1, as deployment_B.
* Deploy package_C binding to the native network, native_network_1, as deployment_C.

The result is as follows

* We have established a communication between the packages in the same local area network by using a native network.

#### Pros 

* Communication through a native network doesn't require a cloud bridge component there by eliminating the latency in each hop-on of messages as in case of a routed network. This results a low-latency communication.


#### Cons

* The cloud native network is only applicable only for local communication.** Need to check this


### Device Native Network

{{%notice note%}}
Currently supported on cloud runtime only.
  {{%/notice%}}


### Multi-Robot Communication 

  * Communication is happening in a peer-peer manner, that means that diff ROS masters or environments are connected via platform using a sub-component based on [FKIE multi master nodes](https://github.com/fkie/multimaster_fkie) for discovery and sync.

  * Platform only whitelists the topics/service mentioned in the package component, and the platform doesn't interpret or listen to the data flowing between them unlike in routed networks.

  * Native Network doesn’t support scoped or targeted topics (service or action) directly. The topics are whitelisted in the form of **/*/topics** and you can remap these topics for communication. For more information on remapping, [click here](http://wiki.ros.org/roslaunch/XML/remap). You should also add namespaces to the whitelisted topics/services/actions as the platform doesn't automatically append the scoped or targetted topics like in routed networks.

  * Subscription information is only shared between ROS masters connected to Native networks only if a topic/service is whitelisted in a package component.


{{%notice note%}}
**Compression**, **QOS**, and **Service Timeout** are not applicable in case of native networks. 
{{%/notice%}}
