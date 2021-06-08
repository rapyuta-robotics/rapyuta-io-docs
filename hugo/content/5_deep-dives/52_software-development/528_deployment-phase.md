---
title: "Deployment Details"
description:
type: developer-guide
date: 2019-10-25T12:34:38+05:30
# pre: "3. "
weight: 528
tags:
    - Deep Dive
---
## Phases
The lifecycle of a deployment consists of multiple phases. The **DEPLOYMENT PHASE**
indicates the current phase of the deployment in its lifecycle.

The below table lists the phases of deployment as they appear in the lifecycle:


| Deployment phase | Description |
| ---------------- | ----------- |
| In progress | accepts request to deploy a package and starts deployment process |
| Provisioning | pulls a docker image and creates a running instance of the image (docker container) for each executable of the component |
| Succeeded | each executable of every component is successfully started |
| Failed to start | error occurred during In progress phase |
| Partially deprovisioned | you deprovisioned a deployment, but there is at least one component that could not be deprovisioned |
| Deployment stopped | you deprovisioned a deployment, and all of its components are stopped |
| Failed To Update | One or more component failed while updating the deployment |

![Deployment](/images/core-concepts/deployments/deployment-phase.png?classes=border,shadow&width=60pc)

## Status
rapyuta.io allows you to view the current status of all the available deployments in a list form. If any deployment encounters any errors or failures, you can also view the details with the error codes just by hovering over the respective statuses. 

The following image displays the list view of deployments available on the platform.

![Deployment list view](/images/core-concepts/deployments/deployment-list-view.png?classes=border,shadow&width=50pc)



## Restart Policy

Unlike deployments running on the cloud, which automatically restart
if stopped due to an error, deployments that are running on devices
do not automatically restart if exited due to an error or when devices
are rebooted.

You can configure the behavior of deployments running on devices by
setting their restart policies. There are three kinds of restart policies
available for a device deployment:

* **Always**    
  Always restart deployments if the deployment executables are in an error state or if the device is rebooted.
* **On-failure**    
  Restart deployments only if the deployment executables exit due to an error, and the exit code is non-zero.
* **Never**    
  Do not restart deployments under any circumstance.

There are a couple of *exceptions* while applying the restart policies:

* Restarting a deployment running on a device may fail if its executables
  are missing in **$PATH**. It is due to the components of the
  deployment failing to start.
* rapyuta.io components that are shared between deployments running on the
  same device (like ROS Master) will have the same restart policy as
  that of the first deployment on a device irrespective of the restart
  policies of any subsequent deployments on the device.
* If a deployment running on a device is stopped
  manually by stopping its docker container,
  both **on-failure** and **always** policies (if selected) are not
  applied unless the device is rebooted.

{{% notice info %}}
You can modify or override the initial setting of the restart policy while
deploying a package. Read [deploying a package](/3_how-tos/33_software-development/334_deploy-packages/) topic to learn how to do so.
{{% /notice %}}

For a deployment running on a device, the variable
**Restart Count** (on the deployment details page) represents the
number of times the deployment has restarted due to restarting of
deployment components.

## Network Configuration for Executables
 After you deploy a package that contains ROS components, you can view the cloud bridge and routed network statuses for each component used in the package. The rapyuta.io platform relies on a sub-component called the cloud bridge for implicitly establishing a communication channel between two or more ROS environments.
 {{% notice note %}}
cloud bridge instances are automatically generated for the ROS components only.
{{% /notice %}} 
 The rapyuta.io platform also displays the warning counts in form of a histogram graph for the last 24 hours. To view the histogram, click the warning icon next to the cloud bridge status as displayed in the following image.

 ![Modify restart policy](/images/multi-robot-communication/cb-warning-log.png?classes=border,shadow&width=40pc)

The following table displays the field description of the network configuration details section.

| Field | Description |
| ------ | ----------- |
| Name/ID | Displays a unique name or ID of the cloud bridge component that is generated for a ROS component. |
| Network | Displays the associated routed network for the component. |
| Routing Status | Displays the following cloud bridge statuses of each component for a package. <ul><li>If the cloud bridge is running successfully, then the status becomes **running**.</li><li>If the cloud bridge is running successfully with warnings, then the status becomes **running** with a warning icon. You can click on the warning icon to view the histogram of the warning messages those occurred in the last 24 hours. You can also view the historical logs by clicking the warning message count bar in the histogram graph. It takes you to the [historical log section](/3_how-tos/35_tooling_and_debugging/debugging-logs/#stdout-logs). You can also view the [live logs](/3_how-tos/35_tooling_and_debugging/debugging-logs/#indexed-logs) of the cloud bridge generated for the ROS components in a deployment.</li><li>If the cloud bridge is failed due to some error, then the status becomes **error**.</li></ul> |
|Network Status | Displays the following routed network statuses of each component for a package. <ul><li>If the routed network is running successfully, then the status becomes **running**.</li><li>If the routed network is failed due to some error, then the status becomes **error**.</li></ul> |