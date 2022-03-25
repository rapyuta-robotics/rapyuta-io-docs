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

1. In the rapyuta.io console, select **Development > Catalog**.
2. Select the package you want to deploy.
3. Click **Deploy package** and enter:

    | Field | Description |
    | ---   | --- |  
    | Name | Specify the deployment name. |
    | Labels | A set of key value pairs used to filter out resources. To add a label, click **Add label**.|
    |Refresh the list of online devices | Click to retrieve an updated list of online devices.|
    | Component Details | The component of the package can have either device or cloud runtime. If the runtime component is device, select the device from the **Select device for deploying the component** dropdown list. |

{{%notice info%}}    
The list of devices is a set of online devices, which are pre-filtered to match the architecture (amd64, arm32v7, arm64v8) and device runtime (docker or preinstalled) required by the component in question.
{{% /notice %}}

4. Adding Volumes
* Ensure that a running volume deployment is available before you add one.
* Add device volume if the package has **device** runtime. To add **Device Volumes**, enter:
  | Field | Description |
  | --- | -------|
  | Applicable Component | Select the package component to attach the volume package from the dropdown list. |
  | Applicable executable | Select the executable from the dropdown list. |
  | MountPath | Specify the path in the container where the referenced volume should be mounted. |
  | SubPath | Specify the SubPath to mount only specific directory instead of the whole volume as root. SubPath allows you to share one volume for multiple uses. |
* Add volume if the package has **cloud** runtime. To add **Volume**, enter:
  | Field | Description |
  | --- | -------|
  | Disk | Select the disk to be mounted from the dropdown list. |
  |Applicable Component | Select the package component to attach the volume package from the dropdown list. |

5. Adding Dependency  
  To add a dependent deployment:
    1. Click **Add dependency**.
    2. Select a deployment ID from the dropdown list to add as a dependency.

6. ROS Bag Jobs
  To add a ROS Bag Jobs:
    1. Click **Add ROS Bag Job**.
    2. Specify the required details. For more information, see [Working with ROS Bag Jobs](/3_how-tos/35_tooling_and_debugging/working-with-rosbags/#adding-ros-bag-jobs)

7. Routed or Native Network
   To add a Routed or Native Network:
   1. Click **Add**
   2. Select a routed/native network from the **Network** dropdown list. 
   3. Select the topics to be configured with each network from the **Topics** dropdown list.
  {{%notice info%}}
  - For information on how to create a routed or native network, see [Routed Network](/3_how-tos/34_networking-and-communication/ros-creating-routed-networks/) or [Native Network](/5_deep-dives/53_networking-and-communication/535_ros-network-native/). 
  - If you have a cloud component in your package, you can select only cloud routed networks.
  - You cannot add a native network for a package with hybrid runtime.
  {{%/notice%}}
   You can also view the details related to topic configuration in the dependency composition graph on the **Deployment Details** page. For more information, see [Dependency Composition](/4_tutorials/42_advanced/dependency-composition/).

8. Restart Policies
    If you want to modify the initial setting of the restart policy of components with **device runtime**, click **Modify**.

9. Click **CREATE DEPLOYMENT** and  **Confirm**.
  You will be redirected to the **Details** page of the newly created deployment.
  On successful deployment, the Status changes to Running and the Deployment Phase changes to Succeeded.
  Additionally, if dependent deployments are added, the status of each should be **Running**.
  You may analyze the corresponding [deployment logs]({{< ref "/3_how-tos/35_tooling_and_debugging/354_view-deployment-logs" >}}) generated while deploying a package.
{{%notice info%}}
If a deployment fails, the **DEPLOYMENT PHASE** will read **Failed to start**. You may have to click **Deprovision Deployment**, delete the package, create the package all over again, and try deploying it.
{{%/notice%}}

## Update/Re-Deploy In-Place

This feature allows users to re-deploy a running deployment without stopping and while retaining its ID, dependencies, configuration, and endpoints. 
During the development phase, this enables developers to switch between newer or older build 
version in a package without having to recreate a new package resource.
It is also useful in scenarios when a developer fixes and pushes a new image of the software to docker repository with an identical tag 
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
on any other Deployment Phase, the **Update Deployment** button will be disabled. 
In case of **Failed To Update**, you can check the **Historical Logs** but the **Live Logs** and **Shell Access** tabs will be disabled. 

{{% notice info %}}
In case your deployment goes to **Failed To Update**, it will show an appropriate error code like 
[DEP_E151] (/6_troubleshoot/611_deployment-error-codes/) 
which means **device is either offline or not reachable**.
If you are not sure about the Error, please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.
{{% /notice %}} 


You can see the **Deployment Generation** in the **Details** tab of the deployment. The generation increments by 1 for each update deployment. 
Suppose the current deployment generation is _i_ and if the user does Update Deployment then the new deployment generation will be _(i+1)_.


![Update deployment](/images/dev-guide/deployments/update-deployment.png?classes=border,shadow&width=55pc)



![Update deployment component](/images/dev-guide/deployments/update-deployment-component.png?classes=border,shadow&width=35pc)


You can click the **History** tab to view the updated deployment history. It shows information like Time, Generation, 
User who updated the deployment and Deployment Status. For a successful update, it shows a _green success icon_ in **Deployment Status**. 
While in case of update deployment failure (due to network issue or device being offline), it shows a _red failure icon_ in **Deployment Status**.  



![Update deployment history](/images/dev-guide/deployments/update-deployment-history.png?classes=border,shadow&width=60pc)

{{% notice info %}}
When **Update Deployment** is triggered, all the _replicas_ are deleted gracefully and the rapyuta.io platform automatically re-creates new replicas for the _component_.
{{% /notice %}} 

## Related Links
* [Deployment Error Codes](/6_troubleshoot/611_deployment-error-codes)
