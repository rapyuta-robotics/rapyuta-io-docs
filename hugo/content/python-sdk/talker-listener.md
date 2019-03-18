---
title: "Talker Listener"
description:
pre: "b. "
weight: 510
---

## Learning objectives
The tutorial will show you how to:

1. deploy a package on a device
2. deploy a package on cloud
3. add a dependent deployment

using [rapyuta_io Python SDK](/python-sdk/introduction) in your python application.

## Prerequisites
1. You should be familiar with the core concepts of rapyuta.io
2. You should be familiar with the basic workflow of [rapyuta.io console](https://console.rapyuta.io)
3. Ensure Python2.7 is installed in your development environment

## Difficulty
Beginner

## Estimated time
It will take nearly about 15 minutes to complete the tutorial.

## Assumptions
1. Ensure that the device with device ID, `DEVICE_ID`, is in rapyuta.io
2. Ensure that the packages with package IDs `DEVICE_TALKER_PACKAGE_ID` and
`CLOUD_LISTENER_PACKAGE_ID` are in rapyuta.io catalog.
3. **_TALKER_** is the component name of the talker package.
4. `DEVICE_TALKER_PLAN_ID` is the plan ID of the *DEVICE_TALKER_PACKAGE*
5. `AUTH_TOKEN` is the authorisation token for accessing rapyuta.io
resources and services.


As a user of rapyuta_io Python SDK, you must create an interface for accessing
rapyuta.io services from within your python application.
```python
# Authentication code snippet
from rapyuta_io import Client
client = Client(AUTH_TOKEN)
```

You retrieve the talker package via its package ID, and pick the device on which
you want to deploy the package on. For provisioning an instance of the package's
**_TALKER_** on the device, add the device to package configuration. The deployment of
talker package on the device is given the name `device_talker`.

```python
# Device Talker code snippet
talker_package = client.get_package(DEVICE_TALKER_PACKAGE_ID)
device = client.get_device(DEVICE_ID)
talker_configuration = talker_package.get_provision_configuration(DEVICE_TALKER_PLAN_ID)
talker_configuration.add_device(TALKER, device)
device_talker_deployment = talker_package.provision(deployment_name = "device_talker",
						provision_configuration = talker_configuration)
print device_talker_deployment.get_status()
```

Similarly, deploy listener package on the cloud using rapyuta_io Python SDK.
Since the `cloud_listener` deployment depends on the `device_talker` deployment,
add `device_talker_deployment` as a dependent deployment of
`cloud_listener_deployment`

```python
# Cloud Listener code snippet
listener_package = client.get_package(CLOUD_LISTENER_PACKAGE_ID)
listener_configuration = listener_package.get_provision_configuration(CLOUD_LISTENER_PLAN_ID)
listener_configuration.add_dependent_deployment(device_talker_deployment)
cloud_listener_deployment = listener_package.provision(deployment_name = 'cloud_listener',
				provision_configuration = listener_configuration)
print cloud_listener_deployment.get_status()
```

Put the above code snippets together in a file, _talker-listener.py_, save the
program and close the file.

```python
# talker-listener.py

from rapyuta_io import Client
client = Client(AUTH_TOKEN)

talker_package = client.get_package(DEVICE_TALKER_PACKAGE_ID)
device = client.get_device(DEVICE_ID)
talker_configuration = talker_package.get_provision_configuration(DEVICE_TALKER_PLAN_ID)
talker_configuration.add_device(TALKER, device)
device_talker_deployment = talker_package.provision(deployment_name = "device_talker",
						 provision_configuration = talker_configuration)
print device_talker_deployment.get_status()


listener_package = client.get_package(CLOUD_LISTENER_PACKAGE_ID)
listener_configuration = listener_package.get_provision_configuration(CLOUD_LISTENER_PLAN_ID)
listener_configuration.add_dependent_deployment(device_talker_deployment)
cloud_listener_deployment = listener_package.provision(deployment_name = "cloud_listener",
					provision_configuration = listener_configuration)
print cloud_listener_deployment.get_status()
```

At the terminal prompt, run the program using the command:
```bash
$ python talker-listener.py
```

The output is an object of the class [DeploymentStatus](https://closed-betadocs.ep.rapyuta.io/#rapyuta_io.clients.deployment.DeploymentStatus),
which contains values such as deployment ID, deployment name, deployment status,
deployment phase, package ID and other details.
