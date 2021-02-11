---
title: Core Concepts
weight: 12
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
---

## rapyuta.io Resources

*rapyuta.io* uses the concept of **resources** to manage and represent a set of physical assets (such as robot locations and computing infrastructure living in data-centers) as well as more abstract entities like the user's software binaries, services, or credentials.



## Account Management

### Projects
 
Any rapyuta.io resource that you create, or allocate and use must belong to a project. You can think of a project as the organizational unit for what you are building. A project is made up of the settings, configuration, and other metadata that describe your applications. Resources within a single project can work together easily, for example, by communicating through an internal network. The resources that each project contains remain separate across project boundaries; you can only interconnect them through an external connection.

Each project has:
* Auto-generated unique project ID
* A project name, which you provide.
* miscellaneous metadata: e.g., creator name, timestamp, etc.

You may create multiple projects and use them to organize rapyuta.io resources.


For more information about projects [here](/developer-guide/organise-resources/project/)


### Secrets

A secret is an object containing sensitive information or confidential
data such as a password, SSH private key, SSL certificate. 

It grants rapyuta.io access to private git repositories and private 
docker images so that the platform can build source code in 
private git repositories or use private docker images.


There are two types of secrets available for you on rapyuta.io:
1.  [Docker secret](/developer-guide/create-software-packages/secrets/docker-registry/)
2.  [Source secret](/developer-guide/create-software-packages/secrets/sourcecode-repository/)


## Device Management

### Device

A device is a rapyuta.io resource representing any physical device
that typically lives at a client location and is registered on
rapyuta.io.
The resource encapsulates information about the device, its architecture,
runtime, user-provided metadata. Once a particular piece of hardware
is successfully on-boarded to rapyuta.io this entity is responsible
for providing the necessary mechanics and communication channels
to manage and interact with the device. The platform leverages
these mechanics to provide features that can be used to communicate
to the device, configure it, monitor its health and deploy packages
to the device.



For more information about devices [here](/developer-guide/manage-machines/).


### Configuration

As a robotic developer, you need to represent, store, and review parameters. Additionally, you might want to access parameters in your source code, modify a subset of parameters for a particular robot, or add new parameters and apply those to a group of robots. 

The rapyuta.io platform provides a mechanism that allows a developer to set, review, update and override configuration for any connected robot. Configuration parameters in the rapyuta.io platform are represented by a tree-like hierarchical structure called configuration hierarchy.

> Learn more about Configurations [here](/developer-guide/manage-machines/).


## Software Development

### Builds

Builds on rapyuta.io are a fundamental resource which convert your source code
residing in your VCS into a container image.

Builds can be referenced when creating packages and enables an 
end-to-end "Code to Deployment" pipeline for your Robotics solution.

> Learn about Builds [here](/developer-guide/create-software-packages/builds/).

### Package

A package is a fundamental rapyuta.io **resource** that represents a
declaration of your application. It is the smallest unit of deployment
in rapyuta.io, and it can be deployed either on a device or the cloud
or both.

To make this possible a package must encapsulate any information about how
it should be built, its compatibility and runtime requirements,
network endpoints and ROS interfaces it exposes, and any configuration
information it may require.

> Learn about the internals of a package [here](/developer-guide/create-software-packages/package-internals/).

### Deployment

A deployment is a **rapyuta.io resource** that represents a unique
instantiation of a rapyuta.io package. It holds information
about the package deployed, the configuration used, and interfaces
exposed. It possesses a unique identifier and provides a mechanism
to introspect its phase and state that are needed to ascertain
the state of a system.


Tooling such as logs, debug terminals and other automation leverage
this uniquely identifiable resource to allow the operator to manage,
debug and observe a particular running instance of their application.


Deployments support composition patterns to allow the user to
combine multiple different applications to help realize a potentially more 
complex robotics solution.


For more information about deployments [here](/developer-guide/manage-software-cycle/deployments/).

## Communication and Storage
 
### Networks

rapyuta.io implements various features for automatically linking different deployments, and hence, aid software composition. It implements a set of features for common protocols such as HTTP, WebSocket, TLS and a dedicated commmunication plane for ROS.

The rapyuta.io platform supports the following types of communications for the packages deployed on device or on the rapyuta.io platform.
  * ROS communication
  * NON-ROS communication

 For more information, [click here](/rapyuta.io/deep-dives/networking-and-communication)

### Static Routes

rapyuta.io enables you to create a static route URL and give it a globally unique FQDN. When you add a static route, an externally exposed endpoint is essentially guaranteed to be available at the URL of that particular static route. It makes externally exposed endpoints (and hence the deployments exposing them) resilient to failure or re-deployment, facilitates maintenance and upgrades to the backend/deployment while retaining the same unique globally available URL.



Static routes are used frequently to get a deterministic URL/route for your application while exposing the network endpoint externally

> **💡 Pro tip :** A static route is **globally unique** across the rapyuta.io platform.

### Storage

Applications running on the cloud de-allocate any resources consumed when they stop, scale down, or fail. This implies that the working storage associated with them is ephemeral. To get around this problem rapyuta.io provides a mechanism to consume persistent block storage for your applications running in the cloud. This storage can be associated with at most one running deployment at any given point of time. A user is typically required to manage the lifecycle of the application code independently from the associated storage.

The Rapyuta IO Persistent Volume is a storage package. A storage package is a public package which is available to all users out of the box. You cannot delete or modify storage packages, and they are available to every user.

For more information, [click here](/3_how-tos/33_software-development/335_adding-persistent-storage-to-a-deployment)






