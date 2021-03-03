---
title: "September"
type: release-updates
date: 2020-09-05T15:00:22+05:30
weight: 834
---


## September 23
Welcome to the September 23, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Binary Params**

	New [rapyuta.io dynamic configuration](/3_how-tos/32_device-management/324_applying-configuration-on-devices/#creating-a-configuration-parameter-in-binary-file-format) allows you to upload binary files as a configuration file in addition to adding YAML configuration file.

* **Update Deployment**

	**rapyuta.io** allows you to update a deployment of packages which have builds or docker images without the need of stopping the deployment. It will help the users who want to try out newer builds or restart the deployment faster in the package. For more information, [click here](/3_how-tos/33_software-development/334_deploy-packages/#updatere-deploy-in-place)

#### Improvements
	
- You can now select the simulation option for docker deployments.
- You can now select the resource limit (CPU/memory) while creating a routed network to handle high frequency of ros messages.
- Minor bug fixes and improvements to rapyuta.io APIs.

#### SDK
**rapyuta.io Python SDK [0.17.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released** 

- Added "delete package functionality". 
- Added support for uploading and downloading binary configurations files.

##### SDK Improvements

- Fixed command API interface method in SDK. Introduced pwd and cwd to command class. 

