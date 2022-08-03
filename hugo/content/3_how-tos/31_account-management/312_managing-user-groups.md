---
title: Managing User Groups
weight: 312
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
slug: managing-projects
url: /how-to-guides/account-management/managing-user-groups
tags:
  - How to
categories:
  - Account Management
  - Projects
---

## User Groups

User groups enable the org admin and the group’s creator to manage access to projects. They can add/ remove people from groups and that automatically manages their associations with the group.  

For example, if you are an SRE team lead, you can create an SRE user group and add members of your team to the group. By linking projects to the SRE group, you can give access to all the group members at once. If you remove an individual from the SRE group, he/she will lose access to all the projects linked to the group, unless they have access to those projects outside the group or in another group or individually.

Following are the features of a user group:

* Any registered user of an organization can create a user group.
* A user can be a part of multiple groups.
* Only group/org admins can add or remove users from a group.
* Users can voluntarily leave groups.
* Group/Org admins can delete a group.

## Managing User Groups

To create/delete a user group:

1. In the rapyuta.io console, click **Account > Organization**. 
2. Click the **User Groups** tab.
3. To create a user group:
  * Click **Create User Group**, and enter:
    |Field|Description|
    |-----|-----------|
    |**Group Name**| Enter the name of the group.|
    |**Group Description**| Enter the description. |
    |**Projects**| Click to link projects to the group.|
    |**Members**| Click to link group members.|
  * Click **Submit**.
4. To leave a group, click the exit icon below the group. On leaving, you will lose access to all the projects linked to the group. 
5. To delete a group, click the delete icon below the group. On deleting, all the group members will lose access to all the projects linked to the group.
6. To edit group details, click the edit icon, make the changes and click **Update**.
7. To view the projects/members assigned to a group, click **View**.

{{% notice info %}}
When you create, update, or delete a user group, you may experience slowness or lags for a brief period while working with the UI.
{{% /notice %}}










