---
title: "Core Concepts"
description:
type: understanding-rio
date: 2019-10-25T14:10:43+05:30
pre: "b. "
weight: 12
---
## Package
A package is a fundamental rapyuta.io *resource* that represents a
declaration of your application. It is the smallest unit of deployment
in rapyuta.io, and it can be deployed either on a device or the cloud
or both.

To make this possible a package must encapsulate any information about how
it should be built, its compatibility and runtime requirements,
network endpoints and ROS interfaces it exposes, and any configuration
information it may require.

{{% notice info %}}
Read about [packages](/developer-guide/create-software-packages/package-internals/) for more information.
{{% /notice %}}

## Catalog
The catalog serves as the portal in rapyuta.io to streamline the software
lifecycle management allowing you to spawn deployments, create new
packages and maintain package versions and updates. Additionally it features
a built-in collection of storage, communication and curated platform
packages that you can put together to build your solution.

It is also responsible for implementing design patterns that allow a user
to leverage powerful build-time or run-time semantics to combine multiple
packages and compose new behaviour.

[Learn more](/developer-guide/create-software-packages/package-catalog/)

## Deployment
A deployment is a *rapyuta.io resource* that represents a unique
instantiation of a rapyuta.io package. It holds information
about the package deployed, the configuration used and interfaces
exposed. It possesses a unique identifier and provides a mechanism
to introspect its phase and state that are needed to ascertain
the state of a system.

Tooling such as logs, debug terminals and other automation leverage
this uniquely identifiable resource to allow the operator manage,
debug and observe a particular running instance of their application.

Deployments suppport composition patterns to allow the user to
combine multiple different applications to help realize a potentially more 
complex robotics solution.

[Learn more](/developer-guide/manage-software-cycle/deployments/)

## Device
<<<<<<< HEAD
A device is a *rapyuta.io resource* representing any physical device
that typically lives at a client location on the platform. The
resource encapsulates information about the device, its architecture,
||||||| merged common ancestors
A device is a rapyuta.io resource representing any physical device
that typically lives at a client location on the platform. The
resource encapsulates information about the device, its architecture,
=======
A device is a rapyuta.io resource representing any physical device
that typically lives at a client location, and is registered on
rapyuta.io.
The resource encapsulates information about the device, its architecture,
>>>>>>> 6ca50cb26cc78418a81bed4b2f28c9c78d91430b
runtime, user provided metadata. Once a particular piece of hardware
is successfully onboarded to rapyuta.io this entity is responsible
for providing the necessary mechanics and communication channels
to manage and interact with the device. The platform leverages
these mechanics to provide features that can be used to communicate
to the device, configure it, montior its health and deploy packages
to the device.

[Learn more](/developer-guide/manage-machines/)