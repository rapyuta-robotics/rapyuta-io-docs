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
A project is a set of one or more packages, devices, running deployments
(both cloud and device component instances). Projects are shared only among
users from within the same organisation. The name of a project must be unique.
{{% notice info %}}
A project's name must consist of alphabets, digits, hyphen (-) or an
underscore ( _ ), and it must begin with an alphabet.
It must be atleast 3 characters long and not more than 15 characters.
{{% /notice %}}
Each project is identified by its unique project ID. The creator of a
project is also the admin of the project.

Learn how to [create a new project](/getting-started/create-project),
[delete an existing project](/getting-started/delete-project).

Learn how to [add users to a project](/getting-started/add-user-to-project),
[delete a user from the project](/getting-started/delete-user-from-project).