---
title: "Resources, Users, Projects"
description:
type: core-concepts
date: 2018-11-15T09:48:54+05:30
pre: "a. "
weight: 105
---
## Resources
A resource is an entity that rapyuta.io provides to its users for building robotics applications, for example:

* A device that is already on-boarded on to the platform
* A package that is added to the platform
* A deployment that is run either on a device or in the cloud
* A package build
* A secret

## Users
A user represents the end user of rapyuta.io with a unique email address and sign in credentials. They can manage resources such as devices, deployments, secrets, packages and builds.

A user can be either in **Invited** state or in **Activated** state. They may be an *admin* and are responsible for managing the [organization](/core-concepts/organisation/).

## Projects
A project is an entity that enables users to logically isolate and organize resources within an organization.

Each rapyuta.io project has:

* a project name
* a project ID
* the project’s creator name
* the creation timestamp

Each project name and project ID is unique.

{{% notice info %}}
A project's name is 3 to 15 characters in length, and consists of lowercase
alphabets, digits and hyphen (-).
{{% /notice %}}

You may create multiple projects and use them to organize rapyuta.io resources.

The project's creator must [add users from the organization to the project](/getting-started/add-user-to-project) in order for them to collaborate.

{{% notice info %}}
Learn how to [create a new project](/getting-started/create-project) or
[delete an existing project](/getting-started/delete-project).
{{% /notice %}}

{{% notice info %}}
Learn how to [add users to a project](/getting-started/add-user-to-project) or
[delete a user from the project](/getting-started/delete-user-from-project).
{{% /notice %}}

{{% notice info %}}
Learn how to [switch between projects](/getting-started/switch-between-projects/).
{{% /notice %}}