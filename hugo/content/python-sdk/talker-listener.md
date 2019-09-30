---
title: "Talker Listener"
description:
pre: "b. "
weight: 510
---

## Learning objectives
The tutorial gives an overview on how to:

1. deploy a package on the cloud
2. add a dependent deployment

using [rapyuta.io Python SDK](/python-sdk/introduction) in your
python application.

## Prerequisites
1. You should be familiar with the [core concepts](/core-concepts/)
   of rapyuta.io
2. Ensure Python2.7 is installed in your development environment
3. Read about [how to obtain authorization token, project ID,
   package ID and plan ID](/python-sdk/determine-unique-identifiers/)

## Difficulty
Beginner

## Estimated time
15 minutes

## Assumptions
1. A package called ***Publisher*** is created in rapyuta.io,
   and it behaves as a talker.
2. Another package called ***Subscriber*** is created in
   rapyuta.io, and it behaves as a listener.
3. ***PROJECT_ID*** is a unique identification value
   of the project in which **Publisher** and **Subscriber**
   packages are created. It is of type *string*.
4. ***PUBLISHER_ID*** and ***SUBSCRIBER_ID*** are the
   package IDs of the ***Publisher*** and ***Subscriber*** packages
   respectively. The values are of type *string*.
5. ***PUBLISHER_PLAN_ID*** and ***SUBSCRIBER_PLAN_ID***
   are the plan IDs of the default plan of ***Publisher*** and
   ***Subscriber*** packages respectively. The values are of
   type *string*.
6. ***AUTH_TOKEN*** is the authorization token for accessing rapyuta.io 
   resources and services. Its value is of type *string*.


Firstly, you need to authenticate so as to access rapyuta.io services from within
your python application.
```python
# Authentication
from rapyuta_io import Client

client = Client(AUTH_TOKEN, PROJECT_ID)
```

Retrieve the ***Publisher*** package by its package ID, and then deploy
it on the cloud. The resulting deployment is called ***PUBLISHER***.

```python
# Deploy Publisher package on cloud
publisher = client.get_package(PUBLISHER_ID)

publisher_configuration = publisher.get_provision_configuration(PUBLISHER_PLAN_ID)

publisher_cloud_deployment = publisher.provision(deployment_name="PUBLISHER", provision_configuration=publisher_configuration)

publisher_cloud_deployment.poll_deployment_till_ready()
```

Similarly, deploy ***Subscriber*** package on the cloud.
Since the resulting ***SUBSCRIBER*** deployment depends on ***PUBLISHER***
deployment, add the later as a dependent deployment of the former.

```python
# Deploy Subscriber package on device
subscriber = client.get_package(SUBSCRIBER_ID)

subscriber_configuration = subscriber.get_provision_configuration(SUBSCRIBER_PLAN_ID)

device = client.get_device(DEVICE_ID)
subscriber_configuration.add_device("Listener", device)
subscriber_configuration.add_dependent_deployment(publisher_cloud_deployment)

subscriber_device_deployment = subscriber.provision(deployment_name="SUBSCRIBER", provision_configuration=subscriber_configuration)

subscriber_device_deployment.poll_deployment_till_ready()
```

Put the above code snippets together in a file, ***talker-listener.py***,
save the program and close the file.

```python
# talker-listener.py

# Authentication
from rapyuta_io import Client
client = Client(AUTH_TOKEN, PROJECT_ID)

# Deploy Publisher package on cloud
publisher_package = client.get_package(PUBLISHER_ID)
talker_configuration = publisher_package.get_provision_configuration(PUBLISHER_PLAN_ID)
publisher_deployment = publisher_package.provision("PUBLISHER", provision_configuration=talker_configuration)
publisher_deployment.poll_deployment_till_ready()


# Deploy Subscriber package on device
subscriber = client.get_package(SUBSCRIBER_ID)
subscriber_configuration = subscriber.get_provision_configuration(SUBSCRIBER_PLAN_ID)

device = client.get_device(DEVICE_ID)
subscriber_configuration.add_device("Listener", device)
subscriber_configuration.add_dependent_deployment(publisher_cloud_deployment)

subscriber_device_deployment = subscriber.provision(deployment_name="SUBSCRIBER", provision_configuration=listener_configuration)

subscriber_deployment.poll_deployment_till_ready()

# Get status of subscriber's deployment
print subscriber_deployment.get_status()
```

At the terminal prompt, run the program using the command:
```bash
$ python talker-listener.py
```

The output is an object of the class [***DeploymentStatus***](https://sdkdocs.apps.rapyuta.io/#rapyuta_io.clients.deployment.DeploymentStatus),
which contains values such as deployment ID, deployment name, deployment status,
deployment phase, package ID and other details.

The final deployment is running successfully if the value of the *deployment
status* is *Running*.
