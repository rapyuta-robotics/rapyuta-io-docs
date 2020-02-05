---
title: "February"
description:
type: release-updates
date: 2020-02-05T15:40:05+05:30
weight: "837"
---
## February 05
Welcome to the February 05, 2020 release of rapyuta.io platform. There are significant updates in this release that we hope you will like.

### Features

* **Override restart policy option**    
Modify or override the initial setting of restart policy for components with device runtime while deploying a package.
* **Static routes**    
Bind a static route to an externally exposed network endpoint of a cloud deployment to access the deployed application over a public network or an external network. It introduces determinism to a deployment's endpoint URL addresses.
* **rapyuta.io Python SDK 0.11.0 released**    
Python SDK [0.11.0](/developer-guide/tooling-automation/python-sdk/#installation) defines a method that adds restart policy for a device component.

### Improvements

* Improved the logging infrastructure.
* The default filter value for device logs is set to all.
* The value of filter on the deployments page is retained after refreshing the page.

### Notable Fixes

* Fixed install and uninstall script giving ***deployments running*** error due to invalid regex.
* Added validation checks.

### Documentation

* Read about overriding [restart policies](/developer-guide/manage-software-cycle/deployments/#restart-policy).
* Read about static routes feature and its effect on [subscription plans](/pricing-support/pricing/find-plans/).
