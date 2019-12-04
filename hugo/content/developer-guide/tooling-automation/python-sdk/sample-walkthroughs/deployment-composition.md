---
title: "Deployment Composition"
description:
type: developer-guide
date: 2019-10-25T13:54:24+05:30
pre: "2. "
weight: 565
---
## Learning objectives

1. Set up storage volume for application.
2. Add configuration parameters like secret and access
   keys to application.

programmatically using
[rapyuta.io Python SDK](/developer-guide/tooling-automation/python-sdk/) in your
applications.

## Prerequisites

1. [Install](/developer-guide/tooling-automation/python-sdk/#installation) rapyuta.io SDK in your development environment.
2. Learn how to obtain
   1. [authorization token](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#auth-token)
   2. [project ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#project-id)
   3. [package ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#package-id)
   4. [plan ID](/developer-guide/tooling-automation/python-sdk/sdk-tokens-parameters/#plan-id)
3. Read the [object storage walkthrough](/developer-guide/create-software-packages/persistent-storage/obj-store-deployment-tutorial/).

## Difficulty
Intermediate

## Estimated time
15 minutes

## Assumptions

1. ***Storage Volume*** is the persistent volume you will create in the tutorial.
2. ***PROJECT_ID*** is a unique identification value of the project
   in which **Publisher** and **Subscriber** packages are created.
   It is of type *string*.
3. The package is called ***Minio*** with package ID `'package_id'` and component
`'sample_component_name'`
3. `'plan_id'` is the plan ID of `sample_pkg` package.
4. The final deployment name is `'volume_mounted_deployment'`
5. ***AUTH_TOKEN*** is the authorization token for accessing rapyuta.io 
   resources and services. Its value is of type *string*.

As a user of rapyuta_io Python SDK, you must create an interface for accessing
rapyuta.io services from within your Python application.

```python
# Authorisation code snippet

from rapyuta_io import Client, DiskType

client = Client(AUTH_TOKEN, PROJECT_ID)
```

You create a persistent volume, `"my_sample_volume"`, of **_32GiB_** capacity and of
default disk type, `DiskType.DEFAULT`. You may also choose the **_SSD_** type for the
disk, `DiskType.SSD`

```python
## Define instance of storage volume

volume = client.get_persistent_volume()
storage_volume = volume.create_volume_instance("Storage Volume", 32, DiskType.SSD)
storage_volume.poll_deployment_till_ready()
```

Mount the volume you just created on a component of a deployment of the `sample_pkg`
at the mount path.

```python
# Get Minio File Server package details

minio_file_server = client.get_package(PACKAGE_ID)
pkg_provision_config = minio_file_server.get_provision_configuration(PACKAGE_PLAN_ID)
pkg_provision_config.mount_volume(component_name="Minio", volume_instance=storage_volume, mount_path="/data")
pkg_provision_config.add_parameter("Minio", "MINIO_SECRET_KEY", "secretphrase")
pkg_provision_config.add_parameter("Minio", "MINIO_ACCESS_KEY", "griffindor")
```

You will deploy `sample_pkg` with the mounted persistent volume `'my_sample_volume'`
on the cloud. The corresponding deployment is `'volume_mounted_deployment'`.

```python
# Deploy file server with storage volume

volume_powered_deployment = minio_file_server.provision(deployment_name="Minio With Data Permanence", provision_configuration=pkg_provision_config)

volume_powered_deployment.poll_deployment_till_ready(retry_count=100)
print volume_powered_deployment.get_status()
```

Put together the above code snippets in a single file, _persistent-volume.py_,
save the program and close the file.
```python
# deployment-composition.py
from rapyuta_io import Client, DiskType

# Authorisation code snippet
client = Client(AUTH_TOKEN, PROJECT_ID)

## Define instance of storage volume
volume = client.get_persistent_volume()
storage_volume = volume.create_volume_instance("Storage Volume", 32, DiskType.SSD)
storage_volume.poll_deployment_till_ready()

# Get Minio File Server package details
minio_file_server = client.get_package(PACKAGE_ID)
pkg_provision_config = minio_file_server.get_provision_configuration(PACKAGE_PLAN_ID)
pkg_provision_config.mount_volume(component_name="Minio", volume_instance=storage_volume, mount_path="/data")
pkg_provision_config.add_parameter("Minio", "MINIO_SECRET_KEY", "secretphrase")
pkg_provision_config.add_parameter("Minio", "MINIO_ACCESS_KEY", "griffindor")

# Deploy file server with storage volume
volume_powered_deployment = minio_file_server.provision(deployment_name="Minio With Data Permanence", provision_configuration=pkg_provision_config)

volume_powered_deployment.poll_deployment_till_ready(retry_count=100)
print volume_powered_deployment.get_status()
```

At the terminal prompt, run the program using the command:
```bash
$ python deployment-composition.py
```

The output is an object of the class [***DeploymentStatus***](https://sdkdocs.apps.rapyuta.io/#rapyuta_io.clients.deployment.DeploymentStatus),
which contains values such as deployment ID, deployment name, deployment status,
deployment phase, package ID and other details.