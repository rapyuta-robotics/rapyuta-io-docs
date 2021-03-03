---
title: "August"
type: release-updates
date: 2020-08-05T15:00:22+05:30
weight: 834
---

## August 11

Welcome to the August 5, 2020 release of the rapyuta.io platform.

#### Updates
- Minor bugfixes and improved validation for the rapyuta.io APIs

## August 26
Welcome to the August 26, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Development>Builds**

	New [rapyuta.io resource](/5_deep-dives/52_software-development/527_build-recipe/) which converts your source code into a container image.
	Builds can be referenced when creating packages and makes it possible for the developer to automate the flow from git to operations 
	and integrate it with existing CI/CD systems and QA processes.


{{% notice info %}}
Your existing packages are backward compatible, to use the existing packages please clone them using the clone button.
{{% /notice %}}	


#### SDK
- **rapyuta.io Python SDK [0.16.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released** 
- Added BuildEndpoints and BuildOperation SDK methods


{{% notice info %}}
rapyuta.io SDK users are recommended to **upgrade their SDK to latest SDK release 0.16.0** as older SDKs will not allow 
newly created packages which includes components building from source code repository 
(without following [build recepies] (/developer-guide/create-software-packages/builds/)) to be deployed on device.
{{% /notice %}}	



#### Improvements
	
- Minor bug fixes and improvements to rapyuta.io APIs.