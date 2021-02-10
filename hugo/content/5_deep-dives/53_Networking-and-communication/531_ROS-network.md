---

title: "Standard Web Protocol"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weigth: 531

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

----

Routed network is a rapyuta.io resource to enable ROS communication between different ROS package deployments. Binding a routed network resource to your deployment will enable other deployments on the same routed network to consume ROS topics/services/actions as defined in the package. 
Data flow occurs only when another package chooses to subscribe to a topic, call a service or call an action. 

#### Illustarted Example
For the purpose of this illustration lets assume the following network and packages.

* You have a routed network __networkN__
* You have __PackageA__ publishing _“topicA”_
* You have __PackageB__ publishing _“serviceB”_

We deploy the packages described above in the following configuration.

* Deploy __PackageA__ binding to routed network __networkN__ as _DeploymentA_
* Deploy __PackageB__ binding to routed network __networkN__ as _DeploymentB_

The result is as follows 

* ROS nodes in  _DeploymentA_ can now call _“serviceB”_
* ROS nodes in  _DeploymentB_ can now subscribe to _“topicA”_

A routed network can be deployed to a cloud or to a device.


## Cloud Routed Network

When a user deploys a routed network to the cloud it is considered a cloud routed network. Any compute resources (cpu/memory) consumed by this routed network deployment count against your cloud deployment hours quota.

Package deployments in the cloud __OR__ device can bind to a cloud routed network.

When creating a cloud routed network, the Resource limit field define the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. You can choose the resource limit of a routed network based on the following requirements.

* size of ROS messages
* frequency of ROS messages
* number of topics/services/actions
* QOS of ROS message
* number of publishers/subscribers that will be active under a particular routed network

