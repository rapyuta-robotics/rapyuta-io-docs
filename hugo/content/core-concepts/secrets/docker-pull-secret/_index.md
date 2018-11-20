---
title: "Docker Pull Secret"
description:
type: core-concepts
date: 2018-11-15T14:20:10+05:30
weight: 130
---
When you want to use a docker image from your private (docker) registry, you
grant rapyuta.io access to your private registry via a docker secret.

The two types of docker pull secrets that you can create are:

1. Docker Hub
2. Private Registry

## Creating a docker pull secret
To create a docker pull secret for a private docker registry, follow the steps:

1. On the left navigation bar, click **SECRETS**.
2. Click **ADD NEW SECRET**.
3. Under **SELECT SECRET TYPE**, click **Docker pull secret**.
3. In the **Name** box, enter a name for the docker pull secret. For instance,
   you may enter the name _docker-pull-secret-name_.    
   Make sure that the name should be no greater than 253 characters. It must
   consist of lower case alphanumeric characters or hypen -, and it must begin
   and end with an alphanumeric character.
4. If your docker registry is [Docker Hub](https://hub.docker.com/),
   select [**Dockerhub**](https://hub.docker.com). Skip to step 6.
5. Otherwise if you intend to use a private (docker) registry, select
   **Private registry**. Provide the private (docker) registry url in the
   **Registry Url** box. It is mandatory to provide the registry url.
6. In the **Username** box, type in your docker username.
7. In the **Password** box, type in your docker password.    
   If you can't quite remember your docker credentials for your private registry,
   learn how to determine your docker credentials.
8. In the **Email** box, enter the valid email address associated with your
   docker registry.
9. Click **SUBMIT**.
