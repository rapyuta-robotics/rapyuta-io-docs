---
title: "September"
description:
type: release-updates
date: 2021-09-15T00:00:46+05:30
weight: 907
---

## October 27 

Welcome to the October 27, 2021 release of the rapyuta.io platform.
 
#### Features

* WebConsole -  You can now customize the data to be viewed on the **ROS Bags Jobs** tab by using the following options:
     * Sorting - select a field and click the sort icon to sort data in ascending 
    or descending order.
    * Filtering - filter data based on the **Bag Status**. Click the filter icon and select one of the filtering options to view data.
    * Pagination - optimize your page run-time by specifying the number of entries to be viewed per page. 
* WebConsole - Support for mounting subpaths of a volume at different mount paths. For example, On the deploy page modal, add a volume with details as shown below.
![Subpath](/images/updates/architecture.png)  
This mounts:  
    * executable1/data directory of volume, to /mount/path of executable1  
    * executable2/data directory of volume, to /mount/path of executable2
* WebConsole - While uploading a ROS bag if the device goes offline, the upload fails. You can now use the retry option under **Actions** to resume ROS bag uploads.

#### SDK
 
**rapyuta.io Python SDK [0.35.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Support for mounting subpaths of a volume at different mount paths

