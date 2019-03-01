---
title: "Resources, Users, Projects"
description:
type: core-concepts
date: 2018-11-15T09:48:54+05:30
pre: "a. "
weight: 105
---
## Resources
A resource is an entity that can be managed by rapyuta.io. It can be a device
that is already integrated into the platform, a package that is added to the
platform, a deployment or a build.

## Users
A user is an entity responsible for creating and managing rapyuta.io resources
(device, package, deployment). A user can be either in **Invited** state or in **Activated**
state. The admin of an organization is the most privileged user of all users in an
organization on rapyuta.io

{{% notice info %}}
Learn how to [register as a new user on rapyuta.io](/getting-started/register-new-user).
{{% /notice %}}

## Projects
A project consists of a set of users and rapyuta.io resources such as packages,
deployments, secrets and devices. It organises all your rapyuta.io resources
into logical groups. It can be thought of as a namespace, which means every resource
within each project must have a unique name.

Each rapyuta.io project has:

* a project name
* a project ID
* the project’s creator name
* the creation timestamp

Each project name and project ID is unique.

You may create multiple projects and use them to organise rapyuta.io resources.
Each project is associated with one billing account.

{{% notice info %}}
A project's name is 3 to 15 characters in length, and consists of lowercase
alphabets, digits and hyphen (-).
{{% /notice %}}

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