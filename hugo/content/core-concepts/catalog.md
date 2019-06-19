---
title: "Catalog"
description:
type: core-concepts
date: 2018-11-15T13:43:59+05:30
pre: "f. "
weight: 145
---
Catalog is a curated collection of _storage_ and _default_ packages. It helps
accelerate software application development by allowing you to combine modular
and reusable packages.

When you create a package in a group, the package has the scope of the group.
All members of the group can access the package. However, if you create a
package outside of the scope of any group, only you can access the package.

## Design patterns
Complex robotic applications are often built using more than one programming
language, in varied development environments, and by people from distinct domains.
For example, the interactive; user facing (frontend) part of an application is
built using React JS (JavaScript framework) while the application's device
component is developed in C/C++, and navigation algorithms are implemented in
Python or Java. Therefore, all of the teams involved in creating the application
have disparate development cycles. As a result, each team depends on the finished
running instances of components developed by other teams.

### What is package binding
Catalog supports package composition - combining two or more packages to create
a new package. Composing packages requires binding the packages together. If a
package depends on another package or a deployment of another package, the
package bindings link the package to its dependencies.

A package binding is a set of configuration parameters and network endpoints
that a package exposes to its dependencies. rapyuta.io implicitly injects the
exposed parameters and network endpoints into packages, which depend on another
package or its deployments, as environment variables.

For example, a _database_ package exposes a network endpoint - *HOST_AND_PORT*
(endpoint with both host IP address and port number), and the configuration
parameters - _USER_, _PASSWORD_ and *DATABASE_NAME*. Any package that depends on the
_database_ package may use the exposed parameters and network endpoint.
A *robot_management* package binds to the _database_ package if the former package
relies on a deployment of the latter package. Then, the package bindings of the
dependent deployment (in this case, _database_) are automatically injected
into the running instance of the *robot_management*. This implies that all of
the executables of the *robot_management* may consume the *HOST_AND_PORT*, _USER_,
_PASSWORD_ and *DATABASE_NAME* as environment variables.

### When to include a package
While adding a package, if you need to compose one or more packages in a specific
behaviour that requires **tight coupling** of those packages including their life
cycles and instantiation, then you should add those packages from the service catalog.

For example, a robot such as an Automated Guided Vehicle (AGV) or a drone requires
a real time video streaming gateway. It will be useful to abstract the video
streaming logic and the underlying complex infrastructure into a *simple_video_gateway*
package so as to make it reusable for other robots.

Suppose the robot is an AGV. Then, there exists an *agv_pkg* package that controls
the motion of the AGV in a 2D plane and includes the *simple_video_gateway* without
having to deal with the additional complexities of real time video processing.
Similarly, if the robot is a drone, the *drone_pkg* focuses on the essential
functions of retrieving precise direction, altitude, pose control etc. and
includes *simple_video_gateway* without having to worry about the additional
complexities of real time video processing.

The *simple_video_gateway* is implicitly provisioned every time *drone_pkg* or
*agv_pkg* is deployed.

When a package say _PkgA_ is included in another package say _PkgB_, the configuration
parameters and network endpoints that are exposed by _PkgA_ are automatically
injected into the components of _PkgB_ as environment variables.

The components of _PkgB_ might have configuration parameters that are stored as
environment variables in the deployment of _PkgB_. In this case, there is a
possibility of collisions which rapyuta.io does not handle at this moment.

A *singleton package* is one that is instantiated only on its first deployment request.

### What is dependent deployment
Dependent deployment allows you to control the life cycle of a set of components
independently, and bind them during package instantiation. You may use this
design pattern when you need to compose one or more packages in a specific way
that requires **loose coupling** of those packages with different life cycles such
as coupling between multiple short lived agents and a long running shared service.

For example, a component say *cloud_mapping_service* maintains a global map of
your warehouse. It is a long running service, which is used by multiple robots
for retrieving information about their environment and for updating the map with
positions of obstacles for their neighbouring robots. When a robot comes online,
its *agv_bot* component binds to the *cloud_mapping_service* and then it proceeds to
perform its tasks. The deployment ID and name are used to add a given deployment
as a dependency to *agv_bot*. At this point, all ROS topics, ROS services and
ROS actions of *cloud_mapping_service* are locally available in every deployment
of *agv_bot*. However, the inbound ROS interfaces of the *cloud_mapping_service*
require you to provide a white list of ROS topics, ROS actions, and ROS services
that are allowed from the deployments of *agv_bot*.

## Package category
rapyuta.io divides all packages in _Catalog_ into following categories:

1. **Public packages**     
   rapyuta.io provides public packages to its users. They are available to
   every user and group for deployment. You cannot delete and/or clone
   public packages.
   	* **Storage packages**    
	  Packages that perform disk read/write operations, represent databases,
	  execute storage related operations and implement other common use cases
	  are usually categorised as storage packages.For example,
	  **Rapyuta IO Persistent Volume** is a storage package.
	* **Communication packages**    
	  Packages that help in multi-device communication within the same network
	  are categorised as communication packages. For example,
	  **Rapyuta IO Communication Broker** is a communication package.
2. **Default packages**    
   The packages that you add to rapyuta.io are grouped as default packages.
   You can delete and/or clone default packages.
