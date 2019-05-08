---
title: "May"
description:
type: updates
date: 2019-05-07T17:38:58+05:30
weight: 686
---
## May 08
Welcome to the May 08, 2019 release of rapyuta.io platform.
There are a number of significant updates in this version
that we hope you will like.

#### Notable Fixes
* Added a new deployment error code, ***DEP_E4xx***    
  **DEP_E4xx** is introduced for ***failed to start*** deployments. Internal errors like network/HTTP connection timeout or database operation failure are not displayed on the deployment page. Instead ***Internal rapyuta.io error*** is shown to the user.
* Fixed the issue to not allow empty keys for device configuration variables.
* Enforced additional constraints on names of devices.
* No duplicate device configuration variables are allowed.
* Released a new version of ***rapyuta-agent*** with minor changes for devices. If your device is already onboarded, it is recommended to update the device by re-boarding it using the lastest ***rapyuta-agent***.

#### Documentation
* Added [API Documentation](https://gadocs.apps.rapyuta.io/).
* Add [Hello World Web Application](/dev-tutorials/hello-world/) tutorial to illustrate dockerfile build strategy.
* Workaround fix for ***catkin build*** command appearing in [ROS Publisher Subscriber](/dev-tutorials/ros-publisher-subscriber/), [Dynamic Map Server](/dev-tutorials/dynamic-map-server/) and [Publisher Subscriber Using Communication Broker](/dev-tutorials/local-comm-broker/) tutorials.