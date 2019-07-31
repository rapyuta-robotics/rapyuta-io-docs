---
title: "July"
description:
type: updates
date: 2019-07-10T20:50:43+05:30
weight: 682
---
## July 10
Welcome to the July 10, 2019 release of rapyuta.io platform.
There are a number of significant updates in this version that
we hope you will like.

#### Features

* **Support executing command from bash shell option**    
When creating an executable of a rapyuta.io package you can choose to run the command from the bash shell in case of building a dockerfile stored in a git repository.
* **Introduce QoS guarantee levels**    
You can subscribe to one of the three QoS guarantee levels - ***Low***, ***Medium***, ***High***. These levels are made available for reliable delivery of metrics and logs data.
* **Dependency injection of network endpoints**    
rapyuta.io will make exposed network endpoint information to child deployments by injecting environment variables corresponding to each endpoint.

#### Notable Fixes

* Fixed security issues
* Fixed minor issues in configurations

#### Documentation

* Try the new developer tutorial on [how to deploy a package on a device using dynamic configurations](/dev-tutorials/talker-supervisor/).
* Read about [dependency injection of network endpoints](/core-concepts/packages/#network-endpoints).
* Read about the [QoS guarantee levels](/core-concepts/metrics/#qos-guarantee) provided by rapyuta.io platform.

## July 31
Welcome to the July 31, 2019 release of rapyuta.io platform.
There are a number of significant updates in this version that
we hope you will like.

#### Notable Fixes

* Fixed issue to speed up applying configurations to multiple devices.
* Added validation check for parameters of deployments running on devices.
* Fixed the default option displayed for resource limits when adding
  executables to packages.
* Fixed security issues.

#### Documentation
Added a [detailed note](/core-concepts/network-layout-communication/#cloud-bridge)
on the error message: ***incoming connection failed: unable to receive
data from sender, check sender's logs for details*** as seen in ROS service logs.