---
title: "December 19"
description:
type: updates
date: 2018-12-19T17:46:22+05:30
pre: ""
weight: 599
---
## December 19
Welcome to the December 2018 release of rapyuta.io platform. There are a
number of significant updates in this version that we hope you will like.

#### Features
* Filter devices based on architecture    
    While creating a deployment, the list of candidate devices only include
    the user’s online devices which match the component’s architecture.
* Deployment logs rotation    
    Enable log-rotate and compression for deployment logs on device.

#### Notable Fixes
* Fixes the bug in the device manager API (to execute command on devices) so
as to return proper error codes when run in background parameter **bg** is true.
* When a device is disconnected (no internet connectivity) for extended periods
of time, deployments on the device with preinstalled runtime are stopped from
going into error state on reconnection.
* User will be able to delete devices in error state.
* Fixes the bug while specifying mount path when using volumes.

#### Documentation
* Updates    
    A new [Updates](/updates) section is added showing the changelog of releases every month of an year.
