---
title: "March"
description:
type: release-updates
date: 2020-03-06T15:00:36+05:30
weight: 836
---
## March 11
Welcome to the March 11, 2020 release of the rapyuta.io platform. There are significant updates in this release that we hope you will like.

#### Features
**Ability to search configurations**    
Search for dynamic configuration parameters using the new search feature.
![Search dynamic configurations](/images/search-configs-feature.png??classes=border,shadow&width=50pc)

#### Improvements

* Improved isolating of rapyuta.io internal dependencies on a device during the device onboarding process.
* Improved the device onboarding process; made it more resilient.
* Restricted the ability of a user to remotely access (or SSH) into erroneous executables of deployments.

#### Notable Fixes

* Fixed the error message seen for duplicate device names when trying to update the names of devices.
* Fixed a bug for a lingering internal rapyuta.io service that occurs in specific cases on devices.
* Fixed the issue of inconsistent error messages across validation tests for user input while creating packages in rapyuta.io

#### Documentation

* Read about the new [wireless system metric](/developer-guide/tooling-automation/metrics/system_metrics/#wireless) that is now available for subscription.
* Read the improved [how-to guide on device metrics visualization](/developer-guide/tooling-automation/metrics/visualise-metrics/).