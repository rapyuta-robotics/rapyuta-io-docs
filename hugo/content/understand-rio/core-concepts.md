---
title: "Core Concepts"
description:
type: understand-rio
date: 2019-10-23T16:16:08+05:30
pre: "2. "
weight: 110
---
## Projects and Resources
### rapyuta.io Resources
rapyuta.io uses the concept of resources to manage and represent a set
of physical assets (such as robot locations and computing infrastructure
living in data-centers) as well as more abstract entities like the user's
software binaries, services or credentials.

### Accessing resources through services
In cloud computing each of these physical and abstract entities map to
certain services. These services provide access to the underlaying
resources. When you develop your application on rapyuta.io, you mix
and match these services into combinations that provide the
infrastructure you need, and then add your code to enable the
scenarios you want to build.

Common examples of resources in rapyuta.io are packages, deployments,
devices and builds. As the platform adds new features and supports
more use-cases, more resources and services to interact with them
are added.

### Projects
Any rapyuta.io resource that you create, allocate and use must belong
to a project. You can think of a project as the organisational unit
for waht you are building. A project is made up of the settings,
configuration, and other metadata that describe your applications.
Resources within a single project can work together easily, for
example, by communicating through an internal network. The
resources that each project contains remain separate across project
boundaries; you can only interconnect them through an external
connection.

Each project has:

* A project name, which you provide.
* A unique project ID, which rapyuta.io provides.
* miscellaneous metadata: e.g. creator name, timestamp etc.

You may create multiple projects and use them to organise rapyuta.io
resources.

## Package
A package is a fundamental rapyuta.io resource that represents a
declaration of your application. It is the smallest unit of deployment
in rapyuta.io, and it can be deployed either on a device or the cloud
or both.

To make this possible a package must encapsulate information about how
it should be built, its compatibility and runtime requirements,
network endpoints and ROS interfaces it exposes, and any configuration
information it may require.

Learn more 

## Catalog
The catalog serves as the portal in rapyuta.io to streamline the software
lifecycle management allowing you to spawn deployments, create new
packages and maintain package versions and updates. Additionally it features
a built-in collection of storage, communication and curated platform
packages that you can put together to build your solution.

It is also responsible for implementing design patterns that allow a user
to leverage powerful build-time or run-time semantics to combine multiple
packages and compose new behaviour.

Learn more

## Deployment
A deployment is a rapyuta.io resource that represents a unique
instantiation of a rapyuta.io package. It holds information
about the package deployed, the configuration used and interfaces
exposed. It possesses a unique identifier and provides a mechanism
to introspect its phase and state that are needed to ascertain
the state of a system.

Tooling such as logs, debug terminals and other automation leverage
this uniquely identifiable resource to allow the operator manage,
debug and observe a particular running instance of their application.

Deployments may support linking and binding to allow the user to
combine multiple different applications to help realize a potentially
complex robotics solution.

## Device
A device is a rapyuta.io resource representing any physical device
that typically lives at a client location on the platform. The
resource encapsulates information about the device, its architecture,
runtime, user provided metadata. Once a particular piece of hardware
is successfully onboarded to rapyuta.io this entity is responsible
for providing the necessary mechanics and communication channels
to manage and interact with the device. The platform leverages
these mechanics to provide features that can be used to communicate
to the device, configure it, montior its health and deploy packages
to the device.