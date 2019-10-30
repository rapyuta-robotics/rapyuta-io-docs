---
title: "Project"
description:
type: developer-guide
date: 2019-10-24T11:29:02+05:30
pre: "3. "
weight: 220
---

Any rapyuta.io resource that you create, allocate and use must belong
to a project. You can think of a project as the organisational unit
for what you are building. A project is made up of the settings,
configuration, and other metadata that describe your applications.
Resources within a single project can work together easily, for
example, by communicating through an internal network. The
resources that each project contains remain separate across project
boundaries; you can only interconnect them through an external
connection.

This document helps you can learn about:

* [Creating a project](#create-new-project)
* [Switching between projects](#switch-between-projects)
* [Deleting a project](#delete-existing-project)
* [Adding users to a project](#adding-users-to-projects)

## Create New Project
Any user in **Activated** state can create a new project. The *creator* of the
project can alone add or remove users from the project.

To create a new project, you will follow the below instructions:

1. On the left navigation bar, click **PROJECTS**. You will view a dashboard,
   which enlists all the current rapyuta.io projects in your organization. The list displays the name of the project, its creator and the valid action for the project.
2. Click **CREATE NEW PROJECT**.
   ![Create new project](/images/getting-started/organization/project/proj-dashboard.png?classes=border,shadow&width=50pc)
3. Provide a name for the project say `example-2`
   {{% notice info %}}
   A project’s name is 3 to 15 characters in length, and contains lowercase
   alphabets, digits and hyphen (-).
   {{% /notice %}}
   ![Enter project's name](/images/getting-started/organization/project/proj-name.png?classes=border,shadow&width=50pc)
4. Click **CONTINUE**.

The newly created project appears in the list of current projects on the
dashboard. A project is highlighted in red if you are either the project's creator or a member of the project.

![Project dashboard](/images/getting-started/organization/project/proj-list-other-user.png?classes=border,shadow&width=50pc)

The admin of the organization can see all the rapyuta.io projects that are created for the organization, while the other users can see only the projects that they are a member of.

![Admin's project dashboard](/images/getting-started/organization/project/project-list-admin.png?classes=border,shadow&width=50pc)

## Switch Between Projects
Consider two projects, *example-0* and *example-3*. You would want to
switch between *example-0* and *example-3*.

To switch from *example-0* to *example-3*, you will follow the below instructions:

1. Click on *example-0* located at the top left corner of the rapyuta.io page.
   ![project zero](/images/getting-started/organization/project/switch-projs/example-0.png?classes=border,shadow&width=50pc)
2. Select *example-3* from the list of available projects.
   ![switch-proj](/images/getting-started/organization/project/switch-projs/switch-proj.png?classes=border,shadow&width=50pc)
3. Now you are in *example-3* project namespace.
   ![project three](/images/getting-started/organization/project/switch-projs/example-3.png?classes=border,shadow&width=50pc)

## Delete Existing Project
The creator of a project can alone delete the project. Prior to deleting a
project, ensure that the project's resources are de-allocated and its users
are removed.

{{% notice note %}}
Deletion of a project is irreversible. Once de-allocated, the resources of the project cannot be retained.
{{% /notice %}}

To delete an existing project, you will follow the below instructions:

1. On the left navigation bar, click **PROJECTS**. You will view a dashboard, which enlists your current projects.
2. Pick the project that you want to delete.
3. Click **Delete** to remove the project.
   ![Delete existing project](/images/getting-started/organization/project/delete-project.png?classes=border,shadow&width=50pc)
4. Click **Confirm**.


## Adding Users To Projects
A project’s creator can alone add other users to the project.

{{% notice note %}}
All users in a rapyuta.io project belong to the same organization as that of its creator.
{{% /notice %}}

To add a user to a project, you will follow the below instructions:

1. On the left navigation bar, click **PROJECTS** to view the projects dashboard.
2. Select the project to which you want to add a user.
3. Under **Users** tab, select the name of the user from the drop down menu. Ensure that the user you are adding is in **Activated** state.
4. Click **ADD USER**.
   ![Add user to project](/images/getting-started/organization/project/add-user-to-proj.png?classes=border,shadow&width=50pc)
5. The name of the user and their email address is added to the list of **EXISTING USERS**.

![newly added user](/images/getting-started/organization/project/after-usr-added.png?classes=border,shadow&width=50pc)

## Removing Users from Projects
The creator of a project is qualified to remove a user from the project.
However, the project’s creator cannot remove themself.

To remove a user from a project, you will have to follow the below instructions:

1. On the left navigation bar, click **PROJECTS** to view the projects dashboard.
2. Select the project you want to remove a user from.
   ![Select project](/images/getting-started/organization/project/select-proj.png?classes=border,shadow&width=50pc)
3. Select the user you want to remove in the project.
4. Click **Remove**.
   ![Remove user from project](/images/getting-started/organization/project/delete-usr-from-proj.png?classes=border,shadow&width=50pc)
5. Click **Confirm**.