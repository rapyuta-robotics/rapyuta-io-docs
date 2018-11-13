---
title: "Source secret"
url: "/core-concepts/source-secret/"
pre: "l. "
weight: 32
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
2. Click **ADD NEW SECRET** > **Source secret**.
3. In the **Name** box, enter a name for the source secret.
4. To grant access via your git username and password or the repository's git
access token, select **Basic Authentication** from the **Authentication Type** drop-down list.
	1. For authenticating via your git username and password, select **Password**.
		1. In the **Username** box, enter your git username.
		2. In the **Password** box, enter your password.
	2. For authenticating via the repository's git access token, select **Token**
		1. In the **Token** box, provide the corresponding git access token
5. If you want to grant access via SSH key of your git repository, select **SSH
Authentication** from the **Authentication Type** drop-down list.
	1. In the **SSH Key** box, provide the private SSH key of your git repository.
6. The **Source URL patterns** is a three part value.
	1. The first part is the protocol of your git server. You can choose from
	distinct protocols such as **\*://** , **git://** , **http://** , **https://** , and **ssh://**
	2. The second part is a valid hostname and IP address such as **github.com** or **bitbucket.org**
	3. The third part is either a valid path to the git repository or * (wild card character).
7. Click **Submit**.

Source URL pattern lets you specify your git repository url pattern. The Build
Engine will match the git repository url defined in a package to the source url
pattern so as to use the corresponding source secret to build the package.
Alternatively, it is a regular expression representing git repositories' urls.

A source url pattern consists of the following segments:

1. protocol your git server communicates with such as http:// , https:// , git:// , ssh:// , or  \*://
2. valid hostname or IP address such as github.com or bitbucket.org or *
3. path to the git repository or Bitbucket repository or /*

the character * is a wild card character popular in regular expressions.

Source url patterns match only git repository urls that conform to RFC3986.
For example https://github.com/rapyuta/sample.git is a valid match,
whereas git@github.com:rapyuta/sample.git is an invalid match. Moreover, it is
discouraged to include a username and password components in a url pattern.

To add additional URL patterns, click **Add URL pattern**.
