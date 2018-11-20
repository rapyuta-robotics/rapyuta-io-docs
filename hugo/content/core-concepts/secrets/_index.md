---
title: "Secrets"
description:
type: core-concepts
date: 2018-11-15T14:19:36+05:30
weight: 120
---
A secret is an object containing sensitive information or confidential data such
as a password, SSH private key, SSL certificate. It grants rapyuta.io access to
private git repositories and private docker images so that the platform can build
source code in private git repositories or use private docker images.

There are two types of secrets available for you on rapyuta.io:

1. [Docker pull secret](../docker-pull-secret/_index.md)
2. [Source secret](./source-secret)
