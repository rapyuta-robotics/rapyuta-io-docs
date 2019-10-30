---
title: "Deployment Composition"
description:
type: developer-guide
date: 2019-10-25T13:54:24+05:30
pre: "2. "
weight: 565
---
## Learning objectives

1. Set up a storage volume.
2. Mount the storage volume to an application deployment.

using [rapyuta.io Python SDK](/python-sdk/introduction) in your
Python application.

## Prerequisites
1. Read about the [core concepts](/core-concepts/) of rapyuta.io
2. Ensure Python2.7 is installed in your development environment.
3. Learn
   [how to obtain authorization token, project ID, package ID and plan ID](/python-sdk/determine-unique-identifiers/)
4. Read the
   [persistent volume developer tutorial](/core-concepts/persistent-volume-storage/).

## Difficulty
Intermediate

## Estimated time
15 minutes

## Assumptions

1. `'my_sample_volume'` is the persistent volume you will create in the tutorial.
2. ***PROJECT_ID*** is a unique identification value
   of the project in which **Publisher** and **Subscriber**
   packages are created. It is of type *string*.
3. The package is called `sample_pkg` with package ID `'package_id'` and component
`'sample_component_name'`
3. `'plan_id'` is the plan ID of `sample_pkg` package.
4. The final deployment name is `'volume_mounted_deployment'`
5. ***AUTH_TOKEN*** is the authorization token for accessing rapyuta.io 
   resources and services. Its value is of type *string*.

As a user of rapyuta_io Python SDK, you must create an interface for accessing
rapyuta.io services from within your Python application.
```python
# Authorisation code snippet
from rapyuta_io import Client

client = Client(AUTH_TOKEN, "project_id")
```

You create a persistent volume, `"my_sample_volume"`, of **_32GiB_** capacity and of
default disk type, `DiskType.DEFAULT`. You may also choose the **_SSD_** type for the
disk, `DiskType.SSD`
```python
# Create Volume code snippet
from rapyuta_io import DiskType

persistent_volume = client.get_persistent_volume()
volume_instance = persistent_volume.create_volume_instance("my_sample_volume", 32, DiskType.DEFAULT)
```

Mount the volume you just created on a component of a deployment of the `sample_pkg`
at the mount path.

```python
# Mount Volume code snippet
sample_pkg = client.get_package("package_id")
pkg_provision_config = sample_pkg.get_provision_configuration("plan_id")
pkg_provision_config.mount_volume(component_name="sample_component_name", volume_instance=volume_instance, mount_path="mount_path")
```

You will deploy `sample_pkg` with the mounted persistent volume `'my_sample_volume'`
on the cloud. The corresponding deployment is `'volume_mounted_deployment'`.
```python
# Deploy package with mounted volume code snippet
deployment_with_volume_mounted = sample_pkg.provision(deployment_name="volume_mounted_deployment", provision_configuration=pkg_provision_config)
```

Put together the above code snippets in a single file, _persistent-volume.py_,
save the program and close the file.
```python
# persistent-volume.py

from rapyuta_io import Client, DiskType

client = Client(AUTH_TOKEN, "project_id")

persistent_volume = client.get_persistent_volume()
volume_instance = persistent_volume.create_volume_instance("my_sample_volume", 32, DiskType.DEFAULT)

sample_pkg = client.get_package("package_id")
pkg_provision_config = sample_pkg.get_provision_configuration("plan_id")
pkg_provision_config.mount_volume(component_name="sample_component_name", volume_instance=volume_instance, mount_path="mount_path")

deployment_with_volume_mounted = sample_pkg.provision(deployment_name="volume_mounted_deployment", provision_configuration=pkg_provision_config)

print deployment_with_volume_mounted.get_status()
```

At the terminal prompt, run the program using the command:
```bash
$ python persistent-volume.py
```

The output is an object of the class [***DeploymentStatus***](https://sdkdocs.apps.rapyuta.io/#rapyuta_io.clients.deployment.DeploymentStatus),
which contains values such as deployment ID, deployment name, deployment status,
deployment phase, package ID and other details.