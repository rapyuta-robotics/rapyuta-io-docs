---
title: Managing Projects
weight: 311
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
url: /how-to-guides/account-management/managing-projects
tags:
  - How to
categories:
  - Account Management
  - Projects
---

Managing projects include creating and deleting projects as well as adding and removing users from the project.

  > Any activated user can create a new project. 
  > Only the project creator can delete a project.
 
## Creating or Deleting a Project

{{< tabs >}}
{{% tab name="UI" %}}
 1. In the left navigation bar, click **Account > Project**. The project dashboard is displayed.
 2. To create a new project:
    1. Click **Create New Project**. 
       **Create new project** dialog box appears.
    2. In the **Project Name** field, enter the project name and click **Continue**.
       The newly created project can be viewed in the project dashboard.
 3. To delete a project:
    1. Select the project and click **Delete**.
    2. A confirmation page appears, click **Confirm**.
{{% /tab %}}
{{% tab name="CLI" %}}
To create a project:
```Bash
rio project create <project_name>
```
To delete a project:
```Bash
rio project delete <project_name>
```
{{% /tab %}}
{{< /tabs >}}


## Switching between Projects

Consider two projects, *example-0* and *example-3*. To switch from *example-0* to *example-3*:

{{< tabs >}}
{{% tab name="UI" %}}
1. Select the dropdown at the top left corner of the rapyuta.io page.
2. Select *example-3* from the list of available projects.
3. Now you are in *example-3* project namespace.
{{% /tab %}}
{{% tab name="CLI" %}}
```bash
rio project select <project_name>
```
{{% /tab %}}
{{< /tabs >}}

