---
title: "November"
description:
type: release-updates
date: 2021-11-24T00:00:46+05:30
weight: 909
---

## November 24 

Welcome to the November 24, 2021 release of the rapyuta.io platform.
 
#### Improvements

* In addition to the **Get Auth Token**, you can now access the **Project ID** and **Organization ID** in the Get Auth Page.

#### Bugfixes

* On adding the binary files to the configuration map, the apply configuration modal was crashing. This issue is now fixed.
* On deploying the Edge Logging Client public package, the deploy modal was crashing. This issue is now fixed.

## November 17 

Welcome to the November 17, 2021 release of the rapyuta.io platform.
 
#### Improvements

* Downloads are now optimized by reducing the number of lines from 100k to 10k for each historical log chunk.
* Historical logs now support **DD/MM/YYYY** date format consistently.
* Width of the search logs input box has been increased.

#### Bugfixes

* The dates selected using the date picker were getting clipped. This issue is fixed now.
* Scroll bar used to flicker while loading the previous logs. This issue is fixed now.

#### SDK
 
**rapyuta.io Python SDK [0.36.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
* Added delete() method for the ROSBagBlob object.
* Added retry support for ROSBagBlob object.
* Validations are fixed for Build, ROSBagJob, Project and Secret objects.
