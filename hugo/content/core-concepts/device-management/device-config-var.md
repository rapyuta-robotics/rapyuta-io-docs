---
title: "Device Configuration Variables"
description:
type: core-concepts
date: 2018-11-15T10:05:11+05:30
pre: "<b>* </b>"
weight: 120
---
Device configuration variables are environment variables that allow you to
correctly configure a device on rapyuta.io using the [console](https://closed-beta.rapyuta.io).
They are used when deploying packages on the device.

A list of predefined device configuration variables are made available for a
newly added device. They are:

* **ros_distro** specifies the ROS distribution found on the device. It is
automatically detected when the device is provisioned. Since its value is
determined by the device, it is immutable. It is a mandatory configuration
variable when deploying ROS packages.
* **ros_workspace** is the absolute path of the default catkin workspace on the
device. rapyuta.io automatically sources ROS packages present in this workspace
for package deployment.
* **runtime** specifies whether the device supports _dockercompose_ for the package
deployment. Otherwise, its value is set as _preinstalled_. You can provide this
value while adding a device to rapyuta.io

The above predefined configuration variables are found on the device's
**Details** page.

To create additional device configuration variables, such as `ros_package_path`,
click **Add Config Variable**.

![Device Configuration Variables](/images/core-concepts/device-management/add-device-config-var.png?classes=border)

You can override the predefined value of a device configuration variable while
creating a package deployment. For instance, you may change `ros_workspace`
when deploying a package for a ROS-based device.

You can deselect device configuration variables that you do not need during
deployment. However, remember that `ros_distro` is mandatory when deploying a
ROS package.
