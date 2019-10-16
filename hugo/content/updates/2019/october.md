---
title: "October"
description:
type: updates
weight: 676
---
## October 16
Welcome to the October 16, 2019 release of rapyuta.io platform (v0.31.0).
There are significant updates in this version that we hope you will like.

#### Features

* **Support for custom ROS messages in device metrics**    
  Subscribe to ROS topics of user-defined ROS message types
  in device metrics.
* **Upload device logs to the cloud**    
  rapyuta.io lets you save device logs to the cloud storage,
  thus, enabling you to analyze the logs as per your requirements.
* **Send a bug report from a device's Details tab**    
  Click **Report Device** to raise a bug report from the **Details**
  tab of a device. The device logs are automatically added to the report
  before it is sent to the customer support.
* **rapyuta.io SDK 0.8.0 released**   
  * Added support for logs API
  * Added support to override fields, tags in subscribe topics API

#### Notable Fixes

* Fixed rotation bug in the deployment dependency graph.
* Fixed duplicate names for ROS configuration and inbound ROS
  interfaces fields in package manifest.

#### Documentation

* Read about
  [how to upload device logs to the cloud storage](/core-concepts/logging/device-logs/#upload-device-logs) in rapyuta.io
* Read further on
  [supported data types of ROS messages](/core-concepts/ros-data-collection/).
* [Download/upgrade](/python-sdk/introduction/#installation) to
  the new rapyuta.io SDK 0.8.0
