---
title: "August"
description:
type: release-updates
date: 2021-08-04T00:00:46+05:30
weight: 906
---
 
 
## August 04

Welcome to the August 04, 2021 release of the rapyuta.io platform.
 
#### Features

* Support for ROS Noetic in Builds, Packages, Deployments, Networks, and Docker Devices.

#### SDK
 
**rapyuta.io Python SDK [0.30.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Support for querying Device metrics. To see documentation and examples [click here](https://sdk.rapyuta.io/metrics.html).
* Support for ROS Noetic.

## August 11

Welcome to the August 11, 2021 release of the rapyuta.io platform.
 
#### Features

* **Device Native Network**

	When you deploy a native network to a device, it is considered as a device native network. This allows for ultra low latency peer-to-peer connections between ros nodes in a Local Area Network(LAN). For more information, [click here](/5_deep-dives/53_networking-and-communication/535_ros-network-native/).

#### SDK
 
**rapyuta.io Python SDK [0.31.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
* Support for device native network.


## August 25

Welcome to the August 25, 2021 release of the rapyuta.io platform.
 
#### Bugfixes

- Graceful handling of update deployment failure when package not present.
- Fixed continuous loading bug in network list page on setting the "show" filter option.

#### SDK
 
**rapyuta.io Python SDK [0.32.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.
- Added support for name and version filters in Client.get_all_packages()
- Added support for Client.get_authenticated_user()
- Fixed ProvisionConfiguration.provision() to set ROSBag Jobs of the package.
