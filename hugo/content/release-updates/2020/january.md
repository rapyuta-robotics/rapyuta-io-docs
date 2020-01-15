---
title: "January"
description:
type: release-updates
date: 2020-01-15T15:02:54+05:30
weight: "838"
---
## January 15
Welcome to the January 15, 2020 release of rapyuta.io
platform (v0.36.3). There are significant updates in this version
that we hope you will like.

#### Improvements

* Internal improvements to platform infrastructure for better reliability.
* Enhance deployment dependency graph based on namespace grouping.

#### Notable Fixes

* Fixed the issue of duplicate APT entries caused by the downloading script during a device onboarding process.
* Stale deployment phase in list endpoint.
* Removed ***ros_distro*** key in non-ROS package manifests.
* Removed **Ctrl + F** key binding that overrides browser default function.
* Fixed the issue of improperly resizing of SSH terminal when toggled from fullscreen mode.
* Hide restart policy information in ***Rapyuta IO Communication Broker*** package.

#### Documentation

* Try out the revised [object-store deployment walkthrough](/developer-guide/create-software-packages/persistent-storage/obj-store-deployment-tutorial).
* Try out the revised [sample walkthroughs](/developer-guide/tooling-automation/python-sdk/sample-walkthroughs/) for getting started with rapyuta.io Python SDK.