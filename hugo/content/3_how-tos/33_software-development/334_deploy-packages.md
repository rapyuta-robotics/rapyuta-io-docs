---
title: "Deploying Packages"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 334
versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
---

To deploy a package in rapyuta.io, follow the steps:

1. On the left navigation bar, click **Development>Catalog**.
2. Select the package you want to deploy.
3. Click **Deploy package**.

4. In the **Name of deployment** box, enter a name for the specific deployment that you are creating for the package.

5. A **LABEL** is a key-value pair. If you want to add a label, click **Add label**.

6. If a component of the package has **cloud** runtime, skip to instruction 9.

7. If a component of the package has **device** runtime, you must select the device

you want to deploy the component on. Click **Refresh the list of online devices** to retrieve an updated list of online devices.

8. Select the device from the **Select device for deploying the component** drop-down list.

   > The list of devices is a set of online devices, which are pre-filtered to match the architecture (amd64, arm32v7, arm64v8) 
   >
   > and device runtime (docker or preinstalled) required by the component in question.

9. If the package has a component with `Is ROS` true, then you will need to select **Routed Network** from the drop-down list
   1. ​	If there are no **Routed Network** successfully running, you would not be able to deploy the package. Please create a [Routed Network](/build-solutions/sample-walkthroughs/routed-network) first. 
   2. ​    If you have a cloud component in your package, you will be able to select only cloud routed networks.

10. If you want to add a dependent deployment, click **Add dependency**, and select a deployment you want to add as a dependency from the drop-down list of deployment IDs.

11. If you want to add a volume, click **Add volume**. Ensure that a running volume deployment is available before you add one.

12. If you want to modify the initial setting of restart policy of components with **device runtime**, click **Modify**.

![Modify restart policy](/images/dev-guide/deployments/modify-restart-policy.png?classes=border,shadow&width=40pc)

13.  Click **CREATE DEPLOYMENT** > **Confirm**.

![Deploy demo package](/images/dev-guide/manage-software-lifecycle/deployment-routed-network.png?classes=border,shadow&width=40pc)



You will be redirected to the **Details** page of the newly created deployment.



The package is successfully deployed when the green colored bar moves from

**In progress** to **Provisioning** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **succeeded** and the deployment **STATUS** is **Running**.


![Deployment example](/images/getting-started/deploy-pkg/demo-deployment.png?classes=border,shadow&width=50pc)

Furthermore, if dependent deployments are added then each dependency's **STATUS** must read **Running**.

You may analyze the corresponding [deployment logs](/developer-guide/tooling-automation/logging/deployment-logs/) generated while deploying a package.

If a deployment fails, the **DEPLOYMENT PHASE** will read **Failed to start**. You may have to click **Deprovision Deployment**, delete the package, create the package all over again, and try deploying it.

## Related Links
* [Deployment Phase and Status](rapyuta.io/deep-dives/development/deployment-phases)
