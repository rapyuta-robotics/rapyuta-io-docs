---
title: Managing Users
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 309
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
slug: managing-users
url: /how-to-guides/account-management/managing-users
tags:
   - How to
categories:
   - Account Management
   - Users
   - Projects
---

## Adding/Removing Users from an Organization

{{%notice note%}}
 Only the  **Admin** of an organization can invite users to their organization.
{{%/notice %}}

To add or remove users to the rapyuta.io platform, do the following:

1. On the left navigation bar, click **Account > Organization**. The panel displays a list of users.

2. To Add users:

   1. On **Users** tab, enter a valid email address of the user you want to invite to rapyuta.io.

   2. Click **ADD USER**.

   The newly invited user is added to the existing list of **USERS**. The **Account State** field displays the state of a user. A user can be in one of the following states:
   * **Invited**: The initial state of the user. The invited user will receive an invitation email to join rapyuta.io.
   * **Activated**: Once the invited user has registered and signed into rapyuta.io, their state automatically changes to **Activated**. Only an org admin can activate a deactivated user by selecting the activate icon under **Actions**. 
   * **Deactivated**: A user/organization admin can deactivate a user by selecting the deactivate icon under **Actions**.
   * **Suspended**: A user can be in the suspended state due to non-payment.

   {{%notice info%}}
   An org admin can view users in any state. Non-admins cannot view the users in invited state.
   {{%/notice%}}

   3. To remove users:

      1. Under **Actions**, click **Remove** against the user that you want to remove. A confirmation page appears.
       2. Click **Confirm**. 
      The user is removed from the organization.
     
      {{%notice note%}}
      - If the deleted user is a project admin, then the ownership of that project will be transferred to the organization admin.
      - If the user is a part of one or more projects/groups, they will be removed from all those projects/groups.
      {{%/notice %}}

## Adding or Removing Users from a Project

{{%notice note%}}
 - The project creator or the organization admin can add or remove users from the project.
 - However, the project’s creator cannot remove himself.
{{%/notice %}}

To add/remove users from the project:

1. On the left navigation bar, click **Account > Project**. The panel displays a list of projects.

2. Select the project to which users need to be added/removed.

3. To add users:
   
   1. On **Users** tab, enter a valid email address of the user you want to invite to the project.

   2. Click **ADD USER**.

   The newly invited user is added to the existing list of **USERS**.

4. To remove users:

   1. Under **Actions**, click **Remove** against the user that you want to remove. A confirmation page appears.
   2. Click **Confirm**. 
   
   The user is removed from the project.


## Resetting the Password 

To change or reset your password, do the following.

1. Select the user menu and click **Change Password**. 
   A dialog box appears to change the password.

2. In the **Change Password** dialog box, enter your old password, enter a new password, and confirm the password in the respective fields.

3. Confirm your not a robot by checking the **Captcha** and follow the instructions.
   Your password is changed.


## Related Links

* [About Project](/1_understanding-rio/12_core-concepts/#projects)
* [Resetting Password](/how-to-guides/account-management/managing-user-profiles/#editing-profiles)

