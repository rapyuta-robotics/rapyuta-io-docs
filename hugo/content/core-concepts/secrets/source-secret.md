---
title: "Source Secret"
description:
type: core-concepts
date: 2018-11-15T14:20:33+05:30
pre: "2. "
weight: 175
---
You can create packages using the source code from a private git repository.
A source secret allows rapyuta.io to access a private git repository or a git
repository with self assigned or untrusted SSL certificate.

The two types of source secrets are:

1. **Basic authentication**    
   authenticate using either git access token or your git username and password.
2. **SSH authentication**    
   authenticate using private SSH key of a git repository.

## Creating source secret
To create a source secret for the private git repository whose source code you
want to use for creating a package, follow the steps:

1. On the left navigation bar, click **SECRETS**.
2. Click **ADD NEW SECRET**.
3. Under **SELECT SECRET TYPE**, click **Source secret**.
4. In the **Name** box, enter a name for the source secret.
   For instance, you may name the source secret as _source-secret-name_    
   Ensure that the name should be no greater than 253 characters. It must
   consist of lower case alphanumeric characters or hypen -, and it must begin
   and end with an alphanumeric character.
5. You may grant access via either your git username and password or the
   repository's git access token. Select **Basic Authentication** from the
   **Authentication Type** drop-down list.
	1. For authenticating via your git username and password, select **Password**.
		1. In the **Username** box, enter your git username.
		2. In the **Password** box, enter your password.
        ![Basic auth via password](/images/core-concepts/source-secret/basicauth-password.png?classes=border,shadow&width=40pc)
	2. For authenticating via the repository's git access token, select **Token**
		1. In the **Token** box, provide the corresponding git access token
6. If you want to grant access via SSH key of your git repository, select **SSH
   Authentication** from the **Authentication Type** drop-down list.
	1. In the **SSH Key** box, provide the private SSH key of your git repository.
    ![SSH authentication](/images/core-concepts/source-secret/sshauth.png?classes=border,shadow&width=40pc)
7. The **Source URL patterns** is a three part value.
	1. The first part is the protocol of your git server. You can choose from
	   distinct protocols such as **\*://** , **git://** , **http://** ,
	   **https://** , and **ssh://**
	2. The second part is a valid hostname and IP address such as
	   **github.com** or **bitbucket.org**
	3. The third part is either a valid path to the git
	   repository or * (wild card character).    
    To add additional URL patterns, click **Add URL pattern**.    
8. Click **Submit**.

Source URL pattern lets you specify your git repository url pattern. The
[_Build Engine_](/core-concepts/device-management/device-docker-runtime/rio-build-engine)
will match the git repository url that you will provide while adding a package
to the source url pattern so as to use the corresponding source secret to build
the package. Alternatively, it is a regular expression representing git
repositories' urls.

A source url pattern consists of the following segments:

1. protocol your git server communicates with such as **http://** , **https://**,
   **git://** , **ssh://** , or  **\*://**
2. valid hostname or IP address such as _github.com_ or _bitbucket.org_ or _*_
3. path to the git repository or Bitbucket repository or /*

The character * is a wild card character popular in regular expressions.

Source url patterns match only git repository urls that conform to [RFC3986](https://tools.ietf.org/html/rfc3986).
For example https://github.com/rapyuta/io_tutorials.git is a valid match,
whereas _git@github.com:rapyuta/sample.git_ is an invalid match. Moreover, it is
discouraged to include a username and password components in a url pattern.