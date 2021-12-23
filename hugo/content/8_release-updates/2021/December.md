---
title: "December"
description:
type: release-updates
date: 2021-12-01T00:00:46+05:30
weight: 913
---

## December 29

Welcome to the December 29, 2021 release of the rapyuta.io platform.
 
### Features

* rapyuta.io now offers a unified storage management experience. You can now manage volumes using the **Disk** option present on the console. For more information, see [Managing disks](/3_how-tos/34_networking-and-communication/managing-disks/).

### Announcement

Support for the **Rapyuta IO Local Communication Broker** package will be suspended due to the introduction of routed networks. Kindly upgrade your existing package to avail it.

## December 08

Welcome to the December 08, 2021 release of the rapyuta.io platform.
 
### Improvements

The following improvements have been made to the *Started* field in the deployments list page:

* Only the time is displayed for deployments created in the last 24 hours. For example, *03:16 PM [about 2 hours ago]*. 

* Only the date is displayed for deployments that are older than a day. For example, *30th Nov [7 days ago]*. Hover over the value to view the date and time details. For example, *30/11/2021, 6:10:00 PM*

* To view the start and finish date for a particular deployment, hover your mouse over the value.

### Announcement

* You can now access the [CLI Documentation](https://cli.rapyuta.io/) from the rapyuta.io documentation sidebar.

* Checkout this [blog](https://www.rapyuta-robotics.com/2021/12/08/rapyutas-new-command-line-interface-cli/) for more information on Rapyuta’s new Command Line Interface (CLI).

### Bug Fixes

* The deployments were throwing redundant errors and would get into an erroneous state during their initial phases. This issue is now fixed.

### SDK

**rapyuta.io Python SDK [0.37.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
* You can now add or remove users from a project.
    
## December 01 

Welcome to the December 01, 2021 release of the rapyuta.io platform.
 
### Features

* You can now access the beta version of the user metrics feature. For more information, see [User Metrics](/5_deep-dives/54_tooling-and-debugging/545_user_metrics)

    To further explore the feature, try:
    * [Deploying IO Metrics Collector on Device](/5_deep-dives/54_tooling-and-debugging/545_user_metrics/#rapyuta-io-metrics-collector)
    * [Deploying Grafana on Cloud to Visualize Metrics](/4_tutorials/42_advanced/deploy-grafana)
    



