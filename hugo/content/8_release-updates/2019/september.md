---
title: "September"
description:
type: release-updates
date: 2019-10-30T17:55:40+05:30
weight: 878
---
## September 04
Welcome to the September 04, 2019 release of rapyuta.io platform (v0.28.0).
There are significant updates in this version that we hope you will like.

#### Features

##### Improvements to Configurations

* **Apply configurations from root node**    
  Click on the apply button at the root node of a configuration hierarchy
  (tree) so as to apply configuration parameters defined at the root
  node level.
* **YAML editor enhancements**    
  Besides a new theme, there are built-in visual cues in the editor to
  automatically highlight invalid YAML syntax.

#### Notable Fixes

* Fixed the bug occurring when attempting to SSH into a cloud deployment
  from multiple projects.
* Fixed bugs in docker-ce installation and docker image pull processes
  during device installation.
* Fixed several internal bugs.

## September 11
Welcome to the September 11, 2019 release of rapyuta.io platform (v0.29.0).
There are significant updates in this version that we hope you will like.

#### Features

* **Clone configurations across projects**    
  rapyuta.io supports cloning of existing configurations across multiple
  projects. Cloning a configuration prevents the redundant task of
  defining the same configuration from scratch again.
* **Rename configurations**    
  Click on the **Rename** button to rename an already defined configuration.
* **Comprehensive error message for failed devices**    
  Added more details to the error message in case of device initialization
  failures due to system packages installation failures, python packages
  installation failures, and docker image pull errors.
* **Introduced new parameter in Deployment List API**    
  Added a new query parameter, ***phases***, in the Deployment List API. The same
  is updated in rapyuta.io SDK.

#### Notable Fixes

* Fixed onboarding failures while onboarding a device with preinstalled
  runtime over a device with docker runtime.
* Several internal fixes related to the health of rapyuta.io services.

#### Documentation

* Read about
  [cloning and renaming](/5_deep-dives/51_managing-devices/dynamic-configuration/) existing configurations.
* Check out the improved
  [error messages for device failed state](/6_troubleshoot/610_device-onboarding-failure-codes/).
* [Download/Upgrade](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) to the new rapyuta.io Python SDK **0.6.0**

## September 25
Welcome to the September 25, 2019 release of rapyuta.io platform (v0.30.0).
There are significant updates in this version that we hope you will like.

#### Features
* **Restart deployments on devices**     
Choose a ***restart policy*** for automatically restarting your
deployments, which are running on devices, if they exit due to an
error or when devices are rebooted.
* **Show available data if device is offline**    
Display data that is available when the device is offline.

#### Notable fixes
* Fixed validations for exposed parameters, endpoint names and
  executable commands while creating a package.
* Fixed formatting of IP interfaces in catalog modal when there
  are many entries.

#### Documentation
* Read about [how to restart deployments on devices by choosing from a set of three restart policies](5_deep-dives/52_software-development/528_deployment-phase/#restart-policy).
* [Download/Upgrade](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) to the
  new rapyuta.io Python SDK **0.7.0**