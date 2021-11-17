---
title: "November"
description:
type: release-updates
date: 2021-11-17T00:00:46+05:30
weight: 909
---

## November 17 

Welcome to the November 17, 2021 release of the rapyuta.io platform.
 
#### Improvements

* Downloads are now optimized by reducing the number of lines for each historical log chunk.
* Historical logs now support a consistent date format.
* Width of the search logs input box has been increased.

#### Bugfixes

* The dates selected using the date picker were getting clipped. This issue is fixed now.
* Scroll bar used to flicker while loading the previous logs. This issue is fixed now.

#### SDK
 
**rapyuta.io Python SDK [0.36.0](/3_how-tos/36_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
* Added delete() method for the ROSBagBlob object.
* Added retry support for ROSBagBlob object.
* isinstance validations has been added for the following methods:
    * create_build
    * create_rosbag_job
    * create_project
    * create_secret
* The secret name length and other validations are now in accordance with the Openshift validations.