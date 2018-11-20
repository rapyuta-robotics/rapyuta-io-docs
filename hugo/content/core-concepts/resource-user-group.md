---
title: "Resources, Users and Groups"
description:
type: core-concepts
date: 2018-11-15T09:48:54+05:30
weight: 10
---
A resource is an entity that can be managed by rapyuta.io. It can be a device
that is already integrated into the platform, a package that is added to the
platform, a deployment or a build. Resources are also scoped by a user or a group.

## Users
A user is an entity responsible for creating and managing resources
(device, package, deployment etc.) using rapyuta.io. An authenticated user can
access a set of available resources.    

Learn how to [create a new user](../getting-started/create-new-user).

## Groups
A group is a collection of arbitrary number of users belonging to the same
organisation. You can use groups for collaborating with teams from the same
organisation and/or for sharing resources (devices, packages, deployments etc.)
among all groups' members. You can be a member of zero or more groups at a
given time. You may create an arbitrary number of groups. As a creator of a
group, only you are authorised to add/remove users (from the same organisation)
from the group or delete the group itself. Any member of a group may add/delete
resources in the group.

An organisation, _Rapyuta_, has two teams - _Team1_ that works on drones and
_Team2_ that works on droids. Each team creates a dedicated group for its members.
_Team1_ creates _Group1_ and adds all of its members to the group. Similarly,
_Team2_ creates _Group2_ with all of its members. If an engineer collaborates
with both the teams, they are a member of both the groups. A member of a group
can access only the resources shared in that group.

Learn how to [create a new group](../getting-started/create-new-group).

Learn how to [switch between user and group](../getting-started/switch-between-user-group).
