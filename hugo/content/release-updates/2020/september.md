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

	New [rapyuta.io dynamic configuration](/developer-guide/manage-software-cycle/dynamic-configurations/consume-dynamic-configuration/create-configuration-parameters) allows you to upload binary files as a configuration file in addition to adding YAML configuration file.

* **Update Deployment**

	**rapyuta.io** allows you to update a deployment of packages which have builds or docker images without the need of stopping the deployment. It will help the users who want to try out newer builds or restart the deployment faster in the package. For more information, [click here](/developer-guide/manage-software-cycle/deployments)

#### SDK
**rapyuta.io Python SDK [0.17.0](/developer-guide/tooling-automation/python-sdk/#installation) released** 

- Added "delete package functionality". 
- Added support for uploading and downloading binary configurations files.

#### Improvements
	
- Added support for both pwd and cwd for creating command to be executed on device.