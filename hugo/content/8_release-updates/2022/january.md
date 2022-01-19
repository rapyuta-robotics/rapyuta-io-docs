---
title: "January"
description:
type: release-updates
date: 2022-01-18T17:52:46+05:30
weight: 898
---


## January 19
Welcome to the January 19, 2022 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

### Improvements

The following improvements have been made to [Native Networks](/5_deep-dives/53_networking-and-communication/535_ros-network-native):

* If the package has no ROS settings then Native Network will now default to propagating everything
* Mandatory prerequisite of setting config variable `network_interface` on device for native network is removed

### Announcement

* Local communication broker package is deprecated now

### SDK

**rapyuta.io Python SDK [0.39.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**

* Deprecated: Device.metrics(), Device.subscribe_metric(), Device.unsubscribe_metric()
* Deprecated: Local Communication Broker Package 
