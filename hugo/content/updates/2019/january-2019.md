---
title: "January"
description:
type: updates
date: 2019-01-22T17:33:23+05:30
pre: ""
weight: 594
---
## January 23, 2019
Welcome to the January 2019 release of rapyuta.io platform. There are a
number of significant updates in this version that we hope you will like.

#### Features
* Support for device error codes
  When a device goes into the failed state, the corresponding error code is displayed.
* Component's volumes is a table instead of JSON
  The *volumes* configuration parameter of a component appears in a table instead of in a JSON.

#### Notable Fixes
* Display network endpoints in non-bindable deployments.
* Correct and valid edges in deployment dependency graphs.
* Fixes deployment failure caused by its dependency on a volume deployment and multiple replicas of its cloud component.
* Fixes deployment failure due to an incorrect Dockerhub secret. 

#### Documentation
* A [list of error codes](/getting-started/add-new-device/device-failed-error-codes) when a device is in failed state.
* Revamped [ROS Publisher Subscriber](/dev-tutorials/ros-publisher-subscriber), [Docker Publisher Subscriber](/dev-tutorials/docker-publisher-subscriber) and [Turtlesim](/dev-tutorials/turtlesim/_index.md) tutorials.