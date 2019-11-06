---
title: "November"
description:
type: release-updates
date: 2019-11-06T15:04:39+05:30
weight: 874
---
## November 06
Welcome to the November 06, 2019 release of rapyuta.io platform (v0.33.0).
There are significant updates in this version that we hope you will like.

#### Features

* **Show/hide deployments in a dependency graph**    
  Toggle between show/hide of stopped deployments in a dependency graph.
* **Deploy local communication broker with preferred network interface**    
  Ability to specify a network IP address while delploying the local communication
  broker.
* **rapyuta.io SDK 0.9.0 released**
  * Added ability to create package from manifest file and manifest dictionary.
  * Added ability to connect preferred network interface of the local communication broker when local broker added as dependent deployment
  * Added *packageVersion* field to *Package* class.
  * Added ability to propagate error from REST client.
  * Rename mission to selection API.

#### Notable Fixes

* Fixed bug while reporting errors of deployments and devices.

#### Documentation

* A complete overhaul of user documentation.
* Read about [specifying network interfaces while deploying the local
  communication broker](/developer-guide/manage-software-cycle/communication-topologies/local-communication-broker/).
