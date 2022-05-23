---
title: Setup Private Git Access
description: null
type: developer-guide
date: 2019-10-25T07:08:19.000Z
weight: 313
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
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
slug: setup-private-git-access
url: /how-to-guides/account-management/setup-private-git-access
tags:
   - How to
categories:
   - Account Management
   - Secrets
   - Git
---

You can create packages using the source code from a private git repository. A source secret allows rapyuta.io to access a private git repository or a git repository with a self-assigned or untrusted SSL certificate.

> * The rapyuta.io platform uses git version 2.16.6.
> * While cloning a git repository, ensure that you provide the appropriate protocol (HTTP/HTTPS). The HTTP to HTTPS redirection does not work while cloning the repositories.


## Creating source secret

To create a source secret for the private git repository, do the following:

1. On the left navigation bar, click **Account>Secrets**.

2. Click **ADD NEW SECRET**.

3. Under **SELECT SECRET TYPE**, click **Source secret**.

4. In the **Name** box, enter a name for the source secret.

   For instance, you may name the source secret as *_source-secret-name_*. Ensure that the name should be no greater than 253 characters. It must consist of lower case alphanumeric characters or hyphen -, and it must begin and end with an alphanumeric character.

5. From the **Authentication** drop-down menu, select either one of the following.

   * **Basic authentication**: Select this option if you want to authenticate a user with either a git access token or username and password.

   * **SSH authentication**: Select this option if you want to authenticate a user with a private SSH key of a git repository.
   
6. If you select **Basic Authentication** from the **Authentication Type** drop-down list, you can select either of the following authentication methods.

   * **Password**: If you have selected this option, type your git username and password in the **Username**, and **Password** fields respectively.

   * **Token**: If you have selected this option, type the corresponding git access token in the **Token** field.
      ![Basic auth via password](/images/core-concepts/source-secret/basicauth-password.png?classes=border,shadow&width=40pc)

7. If you select **SSH Authentication** from the **Authentication Type** drop-down list, type the SSH key of your git repository in the **SSH Key** fields.
​    ![SSH authentication](/images/core-concepts/source-secret/sshauth.png?classes=border,shadow&width=40pc) 

8. Click **Submit**. The secret source is created.

{{%notice info%}}
  To edit the secret, click the edit icon under **Action**.
{{%/notice%}}
