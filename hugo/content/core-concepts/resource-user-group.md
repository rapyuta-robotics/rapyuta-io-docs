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
platform, a deployment or a build. Resources are also scoped by a user or a group.

## Users
A user is an entity responsible for creating and managing resources
(device, package, deployment etc.) using rapyuta.io. An authenticated user can
access a set of available resources.    

Learn how to [create a new user](/getting-started/create-new-user).

## Projects
A project is a set of one or more packages, devices, running deployments
(both cloud and device component instances). Projects are shared only among
users from within the same organisation. The name of a project must be unique.
{{% notice info %}}
A project's name must consist of alphabets, digits, hyphen (-) or an
underscore ( _ ) or space characters, and it must begin with an alphabet.
It must be atleast 3 characters long and not more than 75 characters.
{{% /notice %}}
Each project is identified by its unique project ID. The creator of a
project is also the admin of the project.

Learn how to create a new project, delete an existing project.

Learn how to add users to a project, delete a user from the project.