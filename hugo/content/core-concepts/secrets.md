---
title: "Secrets"
url: "/core-concepts/secrets/"
pre: "i. "
weight: 29
---

A secret is an object containing sensitive information or confidential data such
as a password, SSH private key, SSL certificate. It grants rapyuta.io access to
private git repositories and private docker images so that the platform can build
source code in private git repositories or use private docker images.

There are two types of secrets available for you on rapyuta.io:

1. [Docker pull secret](../docker-pull-secret)
2. [Source secret](../source-secret)
