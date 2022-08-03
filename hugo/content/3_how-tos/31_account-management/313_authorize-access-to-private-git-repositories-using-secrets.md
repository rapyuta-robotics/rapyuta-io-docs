
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


## Creating Source Secret

{{< tabs >}}
{{% tab name="UI" %}}

To create a source secret for the private git repository:

1. On the left navigation bar, click **Account > Secrets**.

2. Click **ADD NEW SECRET**.

3. In the **Create new secret** dialog, select **Source secret**.

4. In the **Name** field, enter a name for the source secret. For example, *_source-secret-name_*.

  {{%notice info%}}
   The name should be less than 253 characters.
   It must consist of lower case alphanumeric characters or hyphen(-).
   It must begin and end with an alphanumeric character.
{{%/notice%}}

5. From the **Authentication** drop-down menu, select either one of the following.

   1. **Basic authentication**: Select this option if you want to authenticate a user with either a git access token or username and password.

      1. **Password**: If you have selected this option, type your git username and password in the **Username**, and **Password** fields respectively.

      2. **Token**: If you have selected this option, type the corresponding git access token in the **Token** field.

   2. **SSH authentication**: Select this option if you want to authenticate a user with a private SSH key of a git repository.

      1. Enter the SSH key of your git repository in the **SSH Key** fields.

6. Click **Submit**. The source secret is created.
{{%notice info%}}
  To edit the secret, click the edit icon under **Action**.
{{%/notice%}}

{{% /tab %}}
{{% tab name="CLI" %}}

To access the private source repositories:
```bash
rio secret create –t source <secret_name>
```
Select the source secret type, if you select `basic-auth`, specify the *username* and *password*.
```bash
Source secret type[basic-auth, ssh]: basic-auth
git username: <user_name>
git password: <password>
```
If you select `ssh`, specify the path to the SSH Private key.
```bash
Source secret type[basic-auth, ssh]: ssh
ssh key path: <path to key-file>
```
To automatically import secrets from the environment:
```bash
rio secret import ssh
```

{{% /tab %}}
{{< /tabs >}}


