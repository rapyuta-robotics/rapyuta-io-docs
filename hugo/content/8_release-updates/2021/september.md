---
title: "September"
description:
type: release-updates
date: 2021-09-15T00:00:46+05:30
weight: 907
---
 
## September 22

Welcome to the September 22, 2021 release of the rapyuta.io platform.
 
#### Improvements

* Device SSH -  SSH to device is now allowed in initializing and failed states.
* Device Config Variables - Config variables are now retained across device re-onboardings
 
#### Bugfixes
* DeviceDeployment Deprovision - Fixed internal server error during deprovision
* HistoricalLogs -  Load Next button disappear on loading of all previous logs

## September 15

Welcome to the September 15, 2021 release of the rapyuta.io platform.
 
#### Features

* WebConsole -  Multiline support for package description.
 
#### Bugfixes
* WebConsole - Incorrect label in build guid copy toast.
* WebConsole - Fixed the device edit name disable condition w.r.t the status.
* RoutedNetwork - Better handling reconnects on broker crash

#### SDK
 
**rapyuta.io Python SDK [0.33.0](/3_how-tos/35_tooling_and_debugging/rapyuta-io-python-sdk/#installation) released**.

* Fixed delete method inconsistency for native and routed network.
* Documentation for poll native network and poll routed network.
