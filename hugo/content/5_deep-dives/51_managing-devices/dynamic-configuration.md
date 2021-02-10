---
title: "Dynamic Configuration"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 514
versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
---

## Device Configuration

Device configuration variables are environment variables that allow you to correctly configure a device on rapyuta.io using the console. They are used when deploying packages on the device.

A list of predefined device configuration variables is available for a newly added device. They are:

ros_distro specifies the ROS distribution found on the device. It is automatically detected when the device is provisioned. It is immutable as the device determines its value. It is a mandatory configuration variable when deploying ROS packages. It is usually assigned kinetic or melodic value depending on the version of ROS installed on the device.
ros_workspace is the absolute path of the default catkin workspace on the device. rapyuta.io automatically sources ROS packages present in this workspace for package deployment.
runtime specifies whether the device supports dockercompose for the package deployment. Otherwise, its value is set as preinstalled. It is immutable. You can provide this value while adding a device to rapyuta.io
The Details page of each device contains the above pre-defined configuration variables.

To create additional device configuration variables, such as ros_package_path, click Add Config Variable.

### Device Configuration Variables

You can override the predefined value of a device configuration variable while creating a package deployment. For instance, you may change ros_workspace when deploying a package for a ROS-based device.

You can deselect device configuration variables that you do not need during deployment. However, remember that ros_distro is mandatory when deploying a ROS package.

## Device Environmental Variables

Some environment variables are available on the device after its successful onboarding. These are also available to the deployments on the device. These are:

* RIO_DEVICE_NAME_LAST_SEEN: Stores the name of the device that was present at the time of onboarding. Please note that changes made to the device’s name through rapyuta.io UI or APIs will not reflect back on this environment variable.
* RIO_DEVICE_ID: Stores the unique identifier of the device.
* RIO_PROJECT_ID: Stores the unique identifier of the project in which the device was created.