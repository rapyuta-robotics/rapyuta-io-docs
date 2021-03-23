---
title: "March"
description:
type: release-updates
date: 2021-03-03T17:52:46+05:30
weight: 900
---


## March 03
Welcome to the March 03, 2021 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.


#### Improvements
* **New Documentation structure**

     The rapyuta.io platform documentation is completely revamped with the following improved changes.

     * The document is divided into multiple sections (Introduction, Getting Started, How To Guides, and Core concepts) and added a collapsable TOC to serve the purpose of users.
     * Improved search mechanism in the document for better findability and an enhanced user experience.
     * Included FAQ and Troubleshooting sections to address user issues.
     * Allowed user contribution to the content by adding inline **Make a contribution** button.

* **Updated Ports for ROS Bag recorder** 

    ROS Bag recorder(the component responsible for collecting ROS bags in a device) uses ports 9010 and 8008. Avoid using these ports in your applications.

* Minor improvements related to historical logs and parameters UI


#### SDK

* **rapyuta.io Python SDK [0.20.2](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.


## March 17

Welcome to the March 17, 2021 release of the rapyuta.io platform. There are significant updates in this release that we hope you will like.

#### Feature

* **Native Network**

    A native network allows you to communicate between different ROS environments when they are deployed either in the cloud or deployed in the devices within the same local area network. For more information, [click here](/5_deep-dives/53_networking-and-communication/535_ros-network-native/).

#### Improvements

* **Build Logs Improvement**


    The rapyuta.io platform allows you to follow the build logs by selecting the toggle button. For more information, [click here](/3_how-tos/35_tooling_and_debugging/debugging-logs/#build-logs).


* **Device Logs Improvement** 


    You can view the device logs either in a tabular or in a card form. You can also specify the log lines (10, 20, 30, or 40 log lines per page) to be downloaded. For more information, [click here](/3_how-tos/35_tooling_and_debugging/file-management-devices/).


#### SDK

* **rapyuta.io Python SDK [0.21.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

## March 24

Welcome to the March 24, 2021 release of the rapyuta.io platform. There are significant updates in this release that we hope you will like.

#### Improvement

* **Build Page Improvement**

    You can add a trigger/tag name while creating or triggering a build. The trigger/tag name can be used to identify the build requests. For more information, [click here](/3_how-tos/33_software-development/331_create-builds/).

#### SDK

* **rapyuta.io Python SDK [0.22.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

    * Added SDK support for trigger/tag name for builds
    * Added SDK support for setting CPU memory limits for routed networks




