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
  > The project creator or the organization admin can delete a project.
 
## Creating or Deleting a Project

{{< tabs >}}
{{% tab name="UI" %}}
 1. In the left navigation bar, click **Account > Projects**. The project dashboard is displayed.
 2. To create a new project:
    1. Click **Create New**. 
       **Create new project** modal appears.
    2. In the **Name** field, enter the project name.
    3. To enable/disable VPN for the project, click the **Enabled/Disabled** button.<br>
       Only an org admin or a project creator can enable/disable VPN on projects. <br>
       When you create your first project, you cannot view the VPN option. However, you can enable it after creating the project.<br>
       For more information, see [Enabling VPN Services](/3_how-tos/34_networking-and-communication/347_enable-vpn/)
    4. Enter the values for the subnets. This option is displayed only when VPN is enabled. Use the **Add Subnet** button to input values for multiple subnets. To delete a subnet, simply click the delete icon next to the corresponding value.  This field is optional. If multiple values are provided, they will be advertised on all the routes.
    5. (Optional) Select the **Users** tab to add user to the project.
    6. (Optional) Select the **User groups** tab to add user groups to the project.
    7. Click **Create Project**. The newly created project can be viewed in the project dashboard.

 3. To delete a project:
    1. In the project dashboard, click the delete icon under **Actions**.
    2. A confirmation page appears, click **Yes, Delete**.
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

## Transer Project Ownership

The project owner can transfer ownership to another member. This solves the issue of restricted modification rights if the original owner leaves the company or is unavailable.

To transfer project ownership:

{{< tabs >}}
{{% tab name="UI" %}}

1. Click **Account > Projects** in the left navigation bar to access the project dashboard.
2. Select the project you wish to transfer ownership for.
3. Click the **user icon** under **Actions**.
4. From the drop-down menu, select the user to transfer ownership to, then click **Update**.
   A notification message appears confirming that the project owner has been successfully updated.

{{% notice info %}}
If you're part of a project through a user group, you can't become the project owner. You need to be directly added to the project to bbecome an owner.
{{% /notice %}}

{{% /tab %}}

{{% tab name="CLI" %}}

To update the owner of the specified project to the user with the provided email address.

```Bash
rio project update-owner <project_name> --user-email <new_owner_email>
```
{{% notice info %}}
If "--user-email" is not specified, it prompts an interactive list of project users to select the new owner.
{{% /notice %}}

For information on how to update the owner of a project:

```Bash
rio project update-owner --help
```

{{% /tab %}}
{{< /tabs >}}

## Nominate the Project Admin

The org or the project admin can nominate another project member as the admin of that project.

1. In the left navigation bar, click **Account > Projects**. The project dashboard is displayed.
2. Select the project for which you want to nominate a new admin.
3. Under **Existing users**, hover over the username and click **Admin** to nominate the project member as the new admin.


## Switching between Projects

Consider two projects, *example-0* and *example-3*. To switch from *example-0* to *example-3*:

{{< tabs >}}
{{% tab name="UI" %}}
1. Select the dropdown at the top left corner of the rapyuta.io page.
2. Select *example-3* from the list of available projects.
3. Now you are in *example-3* project namespace.
{{% notice info %}}
You can also search for a project using the project ID at the top left corner of the rapyuta.io page.
{{% /notice %}}

{{% /tab %}}
{{% tab name="CLI" %}}
```bash
rio project select <project_name>
```
{{% /tab %}}
{{< /tabs >}}

