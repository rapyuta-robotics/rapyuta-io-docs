---
title: "Logging"
description:
type: core-concepts
date: 2018-11-20T18:06:42+05:30
pre: "<b>j. </b>"
weight: 190
---
Logs are verbose text messages, and are used for debugging and monitoring.
Logs are generated when rapyuta.io builds the source code of a git repository,
by a device and during the life cycle of deployment.

rapyuta.io collects and indexes log data. There are three types of logs produced:

1. [Build Logs](./build-logs/)
2. [Deployment Logs](./deployment-logs/)
3. [Device Logs](./device-logs/)

All types of logs are only available for seven days, after which they are
automatically destroyed.
