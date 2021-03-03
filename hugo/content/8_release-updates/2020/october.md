---
title: "October"
type: release-updates
date: 2020-10-14T15:00:22+05:30
weight: 834
---


## October 21
Welcome to the October 21, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Docker Push/Pull Secret**

    The *rapyuta.io* platform allows you to push and save a docker image to a private registry that you have created by using either catkin or docker recipe for future usage. If you create a build by using a docker file and a private image is referenced, the platform uses a pull secret to fetch the image and create the build for you. For more information, [click here](/3_how-tos/33_software-development/331_create-builds/).

* **Cloud Bridge Error List**
    
    New deployment [error codes](/6_troubleshoot/611_deployment-error-codes/) are introduced due to cloudbridge failures. Also, the *rapyuta.io* platform allows you to view the cloud bridge warning count histogram graph and the status of cloud bridge and routed network on the deployment details page. For more information, [click here](/5_deep-dives/52_software-development/528_deployment-phase/#network-configuration-for-executables).

#### Improvements
	
- Minor bug fixes and improvements to rapyuta.io APIs.

#### Breaking changes
	
- While cloning a git repository, ensure that you provide the appropriate protocol (HTTP/HTTPS). The HTTP to HTTPS redirection does not work while cloning the repositories.

#### SDK
**rapyuta.io Python SDK [0.17.1](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released** 

- Fixed *Client.get_static_route_by_name()* method. 
