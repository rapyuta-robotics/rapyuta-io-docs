---
title: "October"
description:
type: release-updates
date: 2021-10-27T00:00:46+05:30
weight: 908
---

## October 27 

Welcome to the October 27, 2021 release of the rapyuta.io platform.
 
#### Features

* You can now customize the data to be viewed on the **ROS Bags Jobs** tab by using the following options:
     * Sorting - select a field and click the sort icon to sort data in ascending 
    or descending order.
    * Filtering - select a field, click the filter icon and select one of the filtering options to view data. Additionally, you could also use the search option to filter data.
    * Pagination - optimize your page load-time by specifying the number of entries to be viewed per page. 
* Support for mounting subpaths of a volume at different mount paths. For example, on the deploy page modal, if you add a volume with details as shown below.  
![Subpath](/images/updates/subpath.png)  
This will mount:  
    * `executable1/data` directory of volume, to `/mount/path` of `executable1`  
    *  `executable2/data` directory of volume, to `/mount/path` of `executable2`
* While uploading a ROS bag if the device goes offline, the upload fails and the **Status** changes to  **Error**. You can now use the retry option under **Actions** to resume ROS bag uploads.

#### SDK
 
**rapyuta.io Python SDK [0.35.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Support for mounting subpaths of a volume at different mount paths.

