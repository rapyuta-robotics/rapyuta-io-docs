---
title: "May"
description:
type: release-updates
date: 2021-05-03T17:52:46+05:30
weight: 902
---
 
 
## May 12
Welcome to the May 12, 2021 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.
 
#### Features
 
* **Batch Logging on a Device**

    The rapyuta.io platform allows you to configure batch logging feature on a device to create a backup of device deployment logs in a single file in JSON format. For more information, [click here](/3_how-tos/32_device-management/325_configuring_batch_logging/).

* **Adding ROS Namespace Automatically**
    
    When you click the **ROS Namespace** check box while deploying a package, the rapyuta.io platform automatically sets the value of ROS_NAMESPACE environment variable same as the ROS environment alias. For more information, [click here](/5_deep-dives/53_networking-and-communication/535_ros-network-native/#multi-robot-communication).

* **Added support for 4, 8, and 16 GB of Volumes**

    The rapyuta.io platform now allows you to select different capacities of the volume while deploying the volume package. For more information, [click here](/3_how-tos/33_software-development/335_adding-persistent-storage-to-a-deployment/#creating-storage).

#### Improvements

* **Cloud Bridge Logs positioning**

    Now the cloud bridge logs are displayed below the executable logs in the **Historical Logs** tab.


* **Build Timeout**

    Previously, there was no timeout after you trigger a build. Now the build timeout is set to 60 minutes. 

#### Bugfixes

* When you deploy a Docker component, if you don't mention the tag name for an external Docker image, the platform pulls all the image tags. This issue is fixed.

* When you try to update a deployment in a device with an external private image, the deployment was failing. This issue is fixed.

* When you deprovision a device deployment, the ROS master does not get deprovisioned automatically. This issue is fixed.

* When you copy the private URL in the [log details](/5_deep-dives/54_tooling-and-debugging/543_upload-files-from-device/#direct-links-for-sharing-log-files) dialogbox and open in a new tab, it was resulting an error. This issue is fixed. 
 
 
#### SDK
 
**rapyuta.io Python SDK [0.25.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Added support for additional cloud volume disk capacity sizes in SDK.

* Added check to restrict component alias name set up without user knowledge.

* Added support for setting ROS namespace for native network deployments. 

## May 26

Welcome to the May 26, 2021 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features

* **Viewing ROS Bag Jobs on the Device Details Page**

The device's details page allows you to view the ROS bag jobs running on the device. For more information, [click here](/3_how-tos/35_tooling_and_debugging/working-with-rosbags/)


#### Bugfixes

* Authentication to view API documentation is removed and the API documents are public now.

* Renaming a device cannot update device name related environment variables. This issue is fixed.

#### SDK
 
**[rapyuta.io Python SDK](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Added *refresh()* method to resource classes such as deployment that has partial set of fields when using list or *get_all* methods. Such objects can be refreshed with the full set of fields by calling the *refresh()* method.

* Added implementation of delete static routes in core API client.
* Added searching, filtering, sorting and pagination facilities in device list logs.
 


 
 
 
 

