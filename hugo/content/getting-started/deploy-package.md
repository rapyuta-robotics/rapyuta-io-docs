---
title: "Deploying a package"
url: "/getting-started/deploy-package/"
pre: "f. "
weight: 46
---

To deploy a package in rapyuta.io using the [console](https://closed-beta.rapyuta.io), follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the package you want to deploy.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the specific deployment
you are creating for the package.
5. If a component of the package has device runtime, you must select the device
you want to deploy the component on by clicking **Refresh the list of online
devices** to retrieve an updated list of online devices.
6. If you want to add a dependent deployment, click **Add dependency**, and select
a deployment you want to add as a dependency from the drop-down list of
deployment IDs.
7. If you want to add a volume, ...
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment **Details** page. The package
is successfully deployed when the green coloured bar moves from **In progress** to
**Succeeded** indicating that the **DEPLOYMENT PHASE** has succeeded and the **STATUS**
is **Running**.

Furthermore, if dependent deployments are added then each dependency's **STATUS**
must read **running**.

You may analyse all of the logs generated while deploying a package.

If a deployment fails, the **DEPLOYMENT PHASE** will read **Failed to start**. You may
have to click **Deprovision Deployment**, delete the corresponding package, created
the package all over again and try deploying it.
