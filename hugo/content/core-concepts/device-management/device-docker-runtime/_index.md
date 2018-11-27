---
title: "Docker Runtime for Device"
description:
type: core-concepts
date: 2018-11-15T10:06:04+05:30
pre: "<b>* </b>"
weight: 125
---
rapyuta.io leverages docker containers for managing applications.
You can build, provision and remotely manage applications on your devices on
the fly.

For instance, rapyuta.io Build Engine builds the source code to a docker image.

To set docker compose as the default runtime on a device, select
Use docker compose as default runtime checkbox while adding the device.

![Dockercompose runtime for device](/images/core-concepts/device-management/device-docker-runtime.png?classes=border)

When a package is deployed on a device, each executable in the package becomes a
separate docker container. If your application is a ROS package, a
singleton ROS Master starts in an individual docker container different from
that of the executables.

All docker containers that are deployed are configured to use host network
driver. With the host network driver, the container’s network stack is not
isolated from the host. For example, if you run a docker container which
uses port 80, the container’s application will be available on port 80 on
the host’s IP address.

## Accessing hardware interfaces
Application containers that are deployed are configured to run in privileged mode.
Thus, the containers can access all of the device interfaces similar to those
that are accessed by the processes running outside containers.

Learn how to access hardware interfaces from applications running in containers.

Access to volume mounts from applications running in containers are not
supported at the moment.
