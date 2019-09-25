---
title: "September"
description:
type: updates
weight: 678
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

* Read about [cloning and renaming](/core-concepts/config-params/)
  existing configurations.
* Check out the improved [error messages for device failed state](/getting-started/add-new-device/device-failed-error-codes/).
* [Download/Upgrade](/python-sdk/introduction/#installation) to the
  new rapyuta.io Python SDK **0.6.0**

## September 25
Welcome to the September 25, 2019 release of rapyuta.io platform (v0.30.0).
There are significant updates in this version that we hope you will like.

#### Features
##### Restart deployments on devices 
Choose a ***restart policy*** to automatically restart your deployments
running on devices if they exit due to an error or when devices are
rebooted.

#### Notable fixes
* Added a secure flag to enhace security of cookies.
* Fixed validation check errors on user given names for exposed parameter and endpoint fields.
* Fixed expired authentication token bug when trying to access API documentation.
* Added validation checks for user provided component executables.

#### Documentation
* Read about [how to restart deployments on devices by choosing from a set of three restart policies](/core-concepts/deployments/#restart-deployments).
* [Download/Upgrade](/python-sdk/introduction/#installation) to the new rapyuta.io Python SDK **0.7.0**
