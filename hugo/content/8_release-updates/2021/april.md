---
title: "April"
description:
type: release-updates
date: 2021-04-03T17:52:46+05:30
weight: 901
---
 
 
## April 07
Welcome to the April 07, 2021 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.
 
#### Feature
 
* **Edit and Update Build**
 
    The rapyuta.io platform allows you to edit and update an existing build. Note that for the updates to be reflected in the build, you must trigger the build. For more information, [click here](/3_how-tos/33_software-development/331_create-builds/#updating-the-build).
 
#### Bugfixes
* After you finish creating a build on the **Create new build** page, the **Show Build** button is supposed to take you to the **Details** page of the build but instead, it was taking you to the **Development>Builds** page. This issue is fixed.
 
 
#### SDK
 
**rapyuta.io Python SDK [0.23.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
 
* Added SDK support for editing or updating an existing build.

## April 22
Welcome to the April 22, 2021 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Bugfixes

* When you clone a package that has the **Run command from bash shell** checkbox selected, the **Run command from bash shell** checkbox gets de-selected in the cloned package. This issue is fixed.

* Following fixes are done to the install script while [onboarding a device](/3_how-tos/32_device-management/321_onboarding-a-device/) to the rapyuta.io console.
    * Virtualenv creation failure due to user's pip configuration at **$HOME/.pip/pip.conf**
    * Invalid check for running deployments in Ubuntu Xenial
    * Use of incorrect virtualenv executable in some cases
    * Progress of script stuck at finding pending ROS bag jobs on devices in some cases

#### SDK

**rapyuta.io Python SDK [0.24.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
 
 * Added SDK support for **list_rosbag_jobs_in_project()**  to query rosbag jobs for devices.
 * Added SDK support for **device_ids** argument in **list_rosbag_blobs()**
 
 
 
 

