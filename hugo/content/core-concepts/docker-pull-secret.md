---
title: "Docker pull secret"
url: "/core-concepts/docker-pull-secret/"
pre: "j. "
weight: 30
---

When you want to use a docker image from your private (docker) registry, you
grant rapyuta.io access to your private registry via a docker secret.

The two types of docker pull secrets that you can create are:

1. Docker Hub
2. Private Registry

## Creating a docker pull secret
To create a docker pull secret for a docker registry, follow the steps:

1. On the left navigation bar, click **SECRETS**.
2. Click **ADD NEW SECRET** > **Docker pull secret**.
3. In the **Name** box, enter a name for the docker pull secret.
4. If your docker registry is [Docker Hub](https://hub.docker.com/), select **Dockerhub**. Skip to step 6.
5. Otherwise if you intend to use a private (docker) registry, select **Private registry**.
Provide the private (docker) registry url in the **Registry Url** box.
6. In the **Username** box, type in your docker username.
7. In the **Password** box, type in your docker password.    
If you can't quite remember your docker credentials for your private registry,
learn how to determine your docker credentials.
8. In the **Email** box, enter your email address.
9. Click **SUBMIT**.
