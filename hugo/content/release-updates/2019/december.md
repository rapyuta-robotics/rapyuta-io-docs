---
title: "December"
description:
type: release-updates
date: 2019-12-04T15:09:13+05:30
weight: 872
---
## December 04
Welcome to the December 04, 2019 release of rapyuta.io platform (v0.35.0).
There are significant updates in this version that we hope you will like.

#### Features

* **Visualization of device on-boarding stages**    
  The process of on-boarding a device is made up of different stages. A progress bar indicates the on-going and completed stages of the process.
* **Support timeout for ROS services**    
  Set a timeout when adding a ROS service to a rapyuta.io package. It is the number of seconds to wait for a ROS service response before timing out.

#### Notable Fixes

* Fixed disappearing blinking dots indicating build status of a package.
* Improved the reliability of WebSSH. There will be lesser frequent disconnections.
* Fixed terminal resize issue of WebSSH.

#### Documentation

* Read about the [different stages of the device initialization process](/developer-guide/manage-machines/onboarding/setup-device/).
* Added a new device failed error code: [DEV_E108](/developer-guide/manage-machines/onboarding/setup-device/failure-codes)