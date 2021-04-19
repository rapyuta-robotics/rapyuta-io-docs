---
title: Managing Users
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
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
slug: managing-users
url: /how-to-guides/account-management/managing-users
tags:
   - How to
categories:
   - Account Management
   - Users
   - Projects
---




## Adding Users to a Project

{{%notice note%}}
 Only the  **Admin** of an organization can invite users to the rapyuta.io console.
{{%/notice %}}

To invite or add users to the rapyuta.io platform, do the following:

1. On the left navigation bar, click **Account>Organization**. The panel displays a list of users.

2. On the **Users** tab, enter a valid email address of the user you want to invite to rapyuta.io.

3. Click **ADD USER**.
<img src="/images/getting-started/organization/add-usr-org.png?classes=border,shadow&width=50pc" alt="Add user to organization" style="zoom:100%;" ></img>

The newly invited user is added to the existing list of **USERS**.

Initially, the state of the user is **Invited**. 
The invited user will receive an invitation email to join rapyuta.io.

<img src="/images/getting-started/organization/user-is-invited.png?classes=border,shadow&width=50pc" alt="User in invited state" style="zoom:100%;" />

Once the invited user has registered and signed into rapyuta.io, their state
changes to **Activated**.

<img src="/images/getting-started/organization/invited-user-signs-in.png?classes=border,shadow&width=50pc" alt="User in activated state" style="zoom:100%;" />

{{%notice info%}}
 The admin of an organization can view **Invited** users. All other users can only view **Activated** users.
{{%/notice%}}

## Resetting the Password 

To change or reset your password, do the following.

1. Click the user menu and click **Change Password**. A dialog box appears to change the password.
2. In the **Change Password** dialog box, type your old password, type a new password and confirm the password in the respective fields.
3. To confirm yourself as a human, click the **Captcha** and follow the instructions.
   Your password is changed.


## Removing Users from Projects

Only the creator of a project can remove a user from the project. However, the project’s creator cannot remove itself.

To remove a user from a project, do the following.

1. On the left navigation bar, click **Account>Projects**. The list of existing projects is displayed.
2. Click the project from where you want to remove a user.
   <img src="/images/getting-started/organization/project/select-proj.png?classes=border,shadow&width=50pc" alt="Select project" style="zoom:80%;" />
3. Under **Actions**, click **Remove** against the user that you want to remove. A confirmation page appears.
4. Click **Confirm**. The user is removed from the project.

## Related Links

* [About Project](/1_understanding-rio/12_core-concepts/#projects)

