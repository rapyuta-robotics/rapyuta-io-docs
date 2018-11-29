---
title: "Deploying Package"
description:
type: getting-started
date: 2018-11-26T15:19:20+05:30
pre: "h. "
weight: 240
---
To deploy a package in rapyuta.io using the [console](https://closed-beta.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the package you want to deploy.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the specific deployment
you are creating for the package.
5. A _LABEL_ is a key-value pair. If you want to add a label, click **Add label**.
5. If a component of the package has _device_ runtime, you must select the device
you want to deploy the component on by clicking **Refresh the list of online
devices** to retrieve an updated list of online devices.
6. If you want to add a dependent deployment, click **Add dependency**, and select
a deployment you want to add as a dependency from the drop-down list of
deployment IDs.
7. If you want to add a volume, click **Add volume**. Ensure that a running volume
deployment is available before you add one.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment **Details** page.
The package is successfully deployed when the green coloured bar moves from
**In progress** to **Provisioning** to **Succeeded** indicating that the
**DEPLOYMENT PHASE** has _succeeded_, and when the **STATUS** is **Running**
indicating that the deployment is currently running.

![Deployment example](/images/tutorials/ros-pub-sub/ros-pub-sub-deployment.png?classes=border,shadow&width=50pc)

Furthermore, if dependent deployments are added then each dependency's **STATUS**
must read **running**.

You may analyse all of the corresponding [logs](/core-concepts/logging/deployment-logs)
generated while deploying a package.

If a deployment fails, the **DEPLOYMENT PHASE** will read **Failed to start**.
You may have to click **Deprovision Deployment**, delete the corresponding
package, create the package all over again and try deploying it.
