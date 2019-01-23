---
title: "January"
description:
type: updates
date: 2019-01-22T17:33:23+05:30
pre: ""
weight: 594
---
## January 23
Welcome to the January 2019 release of rapyuta.io platform. There are a
number of significant updates in this version that we hope you will like.

#### Features
* Support for device error codes    
  When a device goes into the failed state, the corresponding error code is displayed.

#### Notable Fixes
* Display network endpoints in non-bindable deployments.
* Fixes invalid edges that were being shown in dependency graphs in some cases.
* Validate deployments with multiple replicas of cloud components while also depending on a volume deployment.
* Fixes deployment failure when an invalid Dockerhub secret exists for the user/group.
* New UI layout for the *volumes* configuration parameter of a component.
* Fixes in rapyuta uninstall script.

#### Documentation
* A [list of error codes](/getting-started/add-new-device/device-failed-error-codes) when a device is in failed state.
* Revamped [ROS Publisher Subscriber](/dev-tutorials/ros-publisher-subscriber), [Docker Publisher Subscriber](/dev-tutorials/docker-publisher-subscriber) and [Turtlesim](/dev-tutorials/turtlesim/) tutorials.