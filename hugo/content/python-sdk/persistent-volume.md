---
title: "Persistent Volume"
description:
pre: "<b>* </b>"
weight: 410
---
## Learning objectives

1. Create a persistent volume
2. Mount the persistent volume on a component of a deployment
3. Deploy a package with the mounted persistent volume

using [rapyuta_io Python SDK](/python-sdk) in your Python application.

## Prerequisites

1. You must be familiar with the core concepts of rapyuta.io
2. You need to be familiar with the persistent volume/storage concept of rapyuta.io
3. Ensure Python2.7 is installed in your development environment

## Difficulty
Intermediate

## Estimated time
It will take nearly about 15 minutes to complete the tutorial.

## Assumptions

1. `'my_sample_volume'` is the persistent volume you will create in the tutorial.
2. The package is called `sample_pkg` with package ID `'package_id'` and component
`'sample_component_name'`
3. `'plan_id'` is the plan ID of `sample_pkg` package.
4. The final deployment name is `'volume_mounted_deployment'`
5. `AUTH_TOKEN` is the authorisation token for accessing rapyuta.io services and
resources.

As a user of rapyuta_io Python SDK, you must create an interface for accessing
rapyuta.io services from within your Python application.
```python
# Authorisation code snippet
from rapyuta_io import Client
client = Client(AUTH_TOKEN)
```

You create a persistent volume, `"my_sample_volume"`, of **_1GB_** capacity and of
default disk type, `DiskType.DEFAULT`. You may also choose the **_SSD_** type for the
disk, `DiskType.SSD`
```python
# Create Volume code snippet
from rapyuta_io import Client
persistent_volume = Client.get_persistent_volume()
volume_instance = persistent_volume.create_volume_instance("my_sample_volume", 1,
                                                           DiskType.DEFAULT)
```

Mount the volume you just created on a component of a deployment of the `sample_pkg`
at the mount path.

```python
# Mount Volume code snippet
sample_pkg = Client.get_package("package_id")
pkg_provision_config = sample_pkg.get_provision_configuration("plan_id")
pkg_provision_config.mount_volume(component_name="sample_component_name",
                                  volume_instance=volume_instance,
                                  mount_path="mount_path")
```

You will deploy `sample_pkg` with the mounted persistent volume `'my_sample_volume'`
on the cloud. The corresponding deployment is `'volume_mounted_deployment'`.
```python
# Deploy package with mounted volume code snippet
deployment_with_volume_mounted = sample_pkg.provision(deployment_name="volume_mounted_deployment",
                                                      provision_configuration=pkg_provision_config)
```

Put together the above code snippets in a single file, _persistent-volume.py_,
save the program and close the file.
```python
# persistent-volume.py

from rapyuta_io import Client
client = Client(AUTH_TOKEN)

from rapyuta_io import Client
persistent_volume = Client.get_persistent_volume()
volume_instance = persistent_volume.create_volume_instance("my_sample_volume", 1,
                                                           DiskType.DEFAULT)

sample_pkg = Client.get_package("package_id")
pkg_provision_config = sample_pkg.get_provision_configuration("plan_id")
pkg_provision_config.mount_volume(component_name="sample_component_name",
                                  volume_instance=volume_instance,
                                  mount_path="mount_path")

deployment_with_volume_mounted = sample_pkg.provision(deployment_name="volume_mounted_deployment",
                                                      provision_configuration=pkg_provision_config)
```

At the terminal prompt, run the program using the command:
```bash
$ python persistent-volume.py
```

The output is an object of the class [`DeploymentStatus`](https://closed-betadocs.ep.rapyuta.io/#rapyuta_io.clients.deployment.DeploymentStatus),
which contains values such as deployment ID, deployment name, deployment status,
deployment phase, package ID and other details.
