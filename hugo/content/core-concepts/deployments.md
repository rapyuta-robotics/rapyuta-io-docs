---
title: "Deployments"
url: "/core-concepts/deployments/"
pre: "m. "
weight: 33
---

A deployment is a running instance of a package. You can deploy a package using
the rapyuta.io console. While deploying a package, rapyuta.io will:

1. Deploy components either on the cloud or on a device as you specified in a package.
2. Resolve dependencies of a package.
3. Inject package bindings of dependencies into a package's components.
4. Create and expose network endpoints.

rapyuta.io handles deployment requests asynchronously.

## Deployment phase
The lifecycle of a deployment consists of multiple phases. The DEPLOYMENT PHASE
indicates the current phase of the deployment in its lifecycle.

The below table lists the phases of deployment as they appear in the lifecycle:

## Status
rapyuta.io enables you to monitor the current status of each executable of a
component that is deployed. The overall status of a deployment of a package
depends on the combined status of all components participating in the deployment.

The following table lists the statuses you may see during the **Provisioning**
deployment phase:

The following table lists the statuses you may see during the **Succeeded**
deployment phase:

If the status of an executable reads **Pending** or **Error**, you are provided
the cause of the status as **Reason**.

If the overall deployment **STATUS** is **Error**, the console displays an error
code along with a brief description of the error. The following table lists the
error codes that are available, short descriptions and the recommendations you
should take:

## Shell access
rapyuta.io lets you **SSH** into the environment of a running executable.
On the **Shell Access** tab, click **SSH**.

Once you SSH into the environment of an executable, you can execute shell
commands such as `pwd`, `ls -l` at the terminal's prompt. This is helpful in
debugging the environment.

To go back to the list of all running containers, click Back.

If the SSH connection is disconnected (the green dot turns red and the status
reads Connection closed), click **RECONNECT** to establish an active SSH
connection again.

## Singleton deployment
Some packages may need to be instantiated only once for a particular user/group.
While adding a package, you may select **Is singleton package** option to
restrict the number of deployments of a resource intensive package to only one.
