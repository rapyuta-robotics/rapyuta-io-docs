---
title: "May 08"
description:
type: updates
date: 2019-05-07T17:38:58+05:30
weight: 686
---
Welcome to the May 08, 2019 release of rapyuta.io platform.
There are a number of significant updates in this version
that we hope you will like.

#### Notable Fixes
* Added a new deployment error code, ***DEP_E4xx***
* Fixed to not allow empty keys for device configuration variables
* Enforced additional constraints on names of devices
* No duplicate device configuration variables are allowed
* Released new version of ***rapyuta-agent*** script for onboarding devices. If your device is already onboarded using the old script, the device will continue to work. It's good to onboard such devices again by running the latest script.

#### Documentation
* Added [API Documentation](https://gadocs.apps.rapyuta.io/)
* Workaround fix for ***catkin build*** command appearing in [ROS Publisher Subscriber](/dev-tutorials/ros-publisher-subscriber/), [Dynamic Map Server](/dev-tutorials/dynamic-map-server/) and [Publisher Subscriber Using Communication Broker](/dev-tutorials/local-comm-broker/) tutorials.