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
tags:
  - How to
---
## Deploying a Package

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
   1. ​	If there are no **Routed Network** successfully running, you would not be able to deploy the package. Please create a [Routed Network]({{< ref "/3_how-tos/34_networking-and-communication/341_creating-ros-routed-networks" >}}) first. 
   2. ​    If you have a cloud component in your package, you will be able to select only cloud routed networks.

10. If you want to add a dependent deployment, click **Add dependency**, and select a deployment you want to add as a dependency from the drop-down list of deployment IDs.

11. If you want to add a volume, click **Add volume**. Ensure that a running volume deployment is available before you add one.

12. If you want to modify the initial setting of restart policy of components with **device runtime**, click **Modify**.

![Modify restart policy](/images/dev-guide/deployments/modify-restart-policy.png?classes=border,shadow&width=40pc)

13.  Click **CREATE DEPLOYMENT** > **Confirm**.

![Deploy demo package](/images/dev-guide/manage-software-lifecycle/deployment-routed-network.png?classes=border,shadow&width=40pc)

You will be redirected to the **Details** page of the newly created deployment.

The package is successfully deployed when the green colored bar moves from **In progress** to **Provisioning** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **succeeded** and the deployment **STATUS** is **Running**.


![Deployment example](/images/getting-started/deploy-pkg/demo-deployment.png?classes=border,shadow&width=50pc)

Furthermore, if dependent deployments are added then each dependency's **STATUS** must read **Running**.

You may analyze the corresponding [deployment logs]({{< ref "/3_how-tos/35_tooling_and_debugging/354_view-deployment-logs" >}}) generated while deploying a package.

If a deployment fails, the **DEPLOYMENT PHASE** will read **Failed to start**. You may have to click **Deprovision Deployment**, delete the package, create the package all over again, and try deploying it.

## Update/Re-Deploy In-Place

This feature allows users to re-deploy a running  a deployment without stopping and while retaining its ID, dependencies, configuration and endpoints. 
During the development phase this enables developers to switch between newer or older build 
version in a package without having to recreate a new package resource.
It is also useful in scenarios when a developer fixes and pushes a new image of software to docker repository with an identical tag 
and wants to pull in the version with all the changes and fixes into the running deployment. 

This is particularly useful in the case of a dependent deployment, as you do not need to deprovision all the deployments when a single deployment needs an update thus saving time.

{{% notice info %}}
The "in-place" Update/Redeploy feature is currently supported only on containers leveraging a [containerized device runtime](/5_deep-dives/51_managing-devices/511_device-runtime/#containerized-docker-runtime) 
and in the cloud. This feature is unavailable for Device components powered by the [pre-installed](/5_deep-dives/51_managing-devices/511_device-runtime/#preinstalled). 
{{% /notice %}}

To update/re-deploy a deployment, follow the steps:

1. On the left navigation bar, click **Developments>Deployments**.
2. Select the deployment that you want to update, and click Update Deployment.
The **Update Deployment** page appears.
3. The **Update Deployment** page lists all the components added to the package. Click the **Update** field next to the component that you want to update.
You can select at least one or more than one component to update.
4. Click **Update**.

It takes a few minutes and the deployment is updated. You can view the details of updated deployment in the **Details** tab.


**Update Deployment** can be done when [DEPLOYMENT PHASE](/5_deep-dives/52_software-development/528_deployment-phase/#phases) is either **Succeeded** or **Failed To Update**, 
on any other Deployment Phase the **Update Deployment** button will be disabled. 
In case of **Failed To Update**, you can check the **Historical Logs** but the **Live Logs** and **Shell Access** tabs will be disabled. 

{{% notice info %}}
In case your deployment goes to **Failed To Update**, it will show appropriate error code like 
[DEP_E151] (/6_troubleshoot/611_deployment-error-codes/) 
which means **device is either offline or not reachable**.
If you are not sure about the Error, please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.
{{% /notice %}}	


You can see the **Deployment Generation** in the **Details** tab of the deployment. The generation increments by 1 for each update deployment. 
Suppose the current deployment generation is _i_ and if the user does Update Deployment then the new deployment generation will be _(i+1)_.


![Update deployment](/images/dev-guide/deployments/update-deployment.png?classes=border,shadow&width=55pc)



![Update deployment component](/images/dev-guide/deployments/update-deployment-component.png?classes=border,shadow&width=35pc)


You can click the **History** tab to view the update deployment history. It shows information like Time, Generation, 
User who updated the deployment and Deployment Status. For successful update, it shows a _green success icon_ in **Deployment Status**. 
While in case of update deployment failure (due to network issue or device being offline), it shows a _red failure icon_ in **Deployment Status**.  



![Update deployment history](/images/dev-guide/deployments/update-deployment-history.png?classes=border,shadow&width=60pc)

{{% notice info %}}
When **Update Deployment** is triggered, all the _replicas_ are deleted gracefully and the rapyuta.io platform automatically re-creates new replicas for the _component_.
{{% /notice %}}	

## Related Links
* [Deployment Error Codes](/6_troubleshoot/611_deployment-error-codes)
