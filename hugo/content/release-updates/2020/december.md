---
title: "December"
description: 
type: release-updates
date: 2020-12-02T15:00:22+05:30
weight: 820
---


## December 02
Welcome to the December 02, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Historical logs new UI**

    A new UI is available for the historical logs and paginated download option for the historical log lines. For more information, [click here](/developer-guide/tooling-automation/logging/deployment-logs).

* **Docker Multistage Builds**

    Multistage builds are useful to anyone who has struggled to optimize Dockerfiles while keeping them easy to read and maintain. For more information, [click here](/developer-guide/create-software-packages/builds/#docker-mulitstage-build-support).

#### Improvements
	
- Better internal monitoring of cloud routed networks


#### Bugfixes

- Fixes and improvements around Historical Logs Download feature
- Fixes on APIs. 

## December 09

Welcome to the December 09, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Pagination on Device Log tab**

    The rapyuta.io platform displays the uploaded device log files in a paginated view and allows you to customize the view. For more information, [click here](/developer-guide/tooling-automation/logging/device-logs/#viewing-uploaded-log-files).


#### Improvements
	
- Improved **Apply Parameters** performance allowing the user to download large binary files faster.

#### SDK

- Added support for Build Docker Push Secrets and Repositories.
- Added support for creation of Shared URLs for Device logs.
- Added support for Project and Secret management. Also added support for *get_auth_token()* and *set_project()* methods.
- Added retries in case of GET requests that fail with Internal server error.
