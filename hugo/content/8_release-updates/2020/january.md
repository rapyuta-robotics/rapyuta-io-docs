---
title: "January"
description:
type: release-updates
date: 2020-01-15T15:02:54+05:30
weight: "838"
---
## January 15
Welcome to the January 15, 2020 release of rapyuta.io
platform. There are significant updates in this version
that we hope you will like.

#### Improvements

* Internal improvements to platform infrastructure for better reliability.
* Enhance deployment dependency graph based on namespace grouping.

#### Notable Fixes

* Fixed the issue of duplicate APT entries caused by the downloading script during a device onboarding process.
* Stale deployment phase in list view.
* Removed ***ros_distro*** key in non-ROS package manifests.
* Removed **Ctrl + F** key binding that overrides browser default function.
* Fixed the issue of improperly resizing of SSH terminal when toggled from fullscreen mode.

#### Documentation

* Try out the procedure to [add a persistent storage](/3_how-tos/33_software-development/335_adding-persistent-storage-to-a-deployment/).
* Try out the revised [sample walkthroughs](/4_tutorials/42_advanced/421_ros-pub-sub-with-sdk/) for getting started with rapyuta.io Python SDK.

## January 16

Welcome to the January 16, 2020 release of rapyuta.io Python SDK **0.10.2**

#### Notable Fixes

* Bug fix: **poll_deployment_till_ready()** raises **DeploymentNotRunningException** in invalid cases.

#### Documentation
Updated the [SDK Reference](https://sdk.rapyuta.io/) with more usage examples.
