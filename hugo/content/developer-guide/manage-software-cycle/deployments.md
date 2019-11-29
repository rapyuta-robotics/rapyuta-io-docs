---
title: "Deployments"
description:
type: developer-guide
date: 2019-10-25T12:49:01+05:30
pre: "2. "
weight: 405
---
A deployment is a rapyuta.io resource that represents a unique
instantiation of a rapyuta.io package. It holds information
about the package deployed, the configuration used and interfaces
exposed. It possesses a unique identifier and provides a mechanism
to introspect its phase and state that are needed to ascertain
the state of a system.

Tooling such as logs, debug terminals and other automation leverage
this uniquely identifiable resource to allow the operator to manage,
debug and observe a particular running instance of their application.

Deployments may support linking and binding to allow the user to
combine multiple different applications to help realize
a potentially complex robotics solution.

The deployment object exposes information to help you introspect
the state of the system and set policies on mechanisms that
attempt recovery of the desired state on degradation. 

The following sections let the developer learn more about

- [Phases](#phases)
- [Status](#status)
- [Error Codes](#error-codes)
- [Restart Policy](#restart-policy)
- [Deploying A Package](#deploying-a-package)

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

![Deployment](/images/core-concepts/deployments/deployment-phase.png?classes=border,shadow&width=50pc)

## Status
rapyuta.io enables you to monitor the current status of each executable of a
component that is deployed. The status of deployment
depends on the combined status of all components participating in the deployment.

The following table lists the statuses you may see during the **Provisioning**
deployment phase:


| Status | Description |
| ------ | ----------- |
| Pending | docker image is being pulled, or docker container is being created |
| Error | error occurs while pulling a docker image or creating a docker container |

The following table lists the statuses you may see during the **Succeeded**
deployment phase:

| Status | Description |
| ------ | ----------- |
| Running | executables of components are running |
| Pending | restarting executable due to runtime error in the application or rapyuta.io software |
| Error | runtime error occurred |
| Unknown | rapyuta.io is unaware of the current status |

If the status of an executable reads **Pending** or **Error**, you
are provided the cause of the status as **Reason**.

![Reason field](/images/core-concepts/deployments/reason-field.png?classes=border,shadow&width=50pc)

## Error Codes
If the overall deployment **STATUS** is **Error**, rapyuta.io
displays an error code along with a brief description of the error.
The following table lists available error codes, short descriptions
and the recommendations you should take:

| Error code | Description | Recommended action |
| ---------- | ----------- | ------------------ |
| DEP_E151 | device is either offline or not reachable | check the internet connection of the device |
| DEP_E152 | executables of the component deployed on the device either exited too early or failed | troubleshoot the failed component by analyzing deployment logs |
| DEP_E153 | unable to either pull the docker image or build the source code for the component deployed on cloud | verify that the docker image provided while adding the package still exists at the specified registry endpoint |
| DEP_E154 | executables of the component deployed on cloud exited too early | troubleshoot the failed component by analyzing deployment logs |
| DEP_E155 | executables of the component deployed on cloud failed | troubleshoot the failed component by analyzing deployment logs |
| DEP_E156 | dependent deployment is in error state | troubleshoot the dependent deployment that is in error state |
| DEP_E161 | docker image not found for executables of components deployed on device | verify that the path of the docker image is valid |
| DEP_E162 | Validation error. Cases include:<ul><li>Inconsistent values of ROS distro and CPU architecture variables for the device and package being provisioned.</li><li>rapyuta.io docker images not present on docker device.</li></ul> | <ul><li>Create package with appropriate values for ROS distro and CPU architecture variables.</li><li>Onboard the device again.</li></ul> |
| DEP_E163 | application has stopped and exited unexpectedly, and crashes continuously | debug the application using the corresponding deployment logs |
| DEP_E2xx | internal rapyuta.io error in the components deployed on cloud | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E3xx | internal rapyuta.io error in the components deployed on a device | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E4xx | internal rapyuta.io error | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |

## Restart Policy
Unlike deployments running on the cloud, which are automatically restarted
if they stop due to some error, deployments that are running on devices
do not automatically restart if they exit due to an error or when devices
are rebooted.

You can configure the behavior of deployments running on devices by
setting the restart policies. There are three kinds of restart policies
available for a device deployment:

* **Always**    
  Always restart deployments if the deployment executables are in an error state or if the device is rebooted.
* **On-failure**    
  Restart deployments only if the deployment executables exit due to an
  error, and the exit code is non-zero.
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

For a deployment running on a device, the variable
**Restart Count** (on the deployment details page) represents the
number of times the deployment has restarted due to restarting of
deployment components.

## Deploying A Package
To deploy a package in rapyuta.io, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the package you want to deploy.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the specific deployment
you are creating for the package.
5. A _LABEL_ is a key-value pair. If you want to add a label, click **Add label**.
6. If a component of the package has *cloud* runtime, skip to instruction 9.
7. If a component of the package has *device* runtime, you must select the device
you want to deploy the component on. Click **Refresh the list of online
devices** to retrieve an updated list of online devices.
8. Select the device from the **Select device for deploying the component** drop-down list.
{{% notice info %}}
The list of devices is a set of online devices, which are pre-filtered to match
the architecture (amd64, arm32v7, arm64v8) and device runtime (docker or preinstalled)
required by the component in question.
{{% /notice %}}
9. If you want to add a dependent deployment, click **Add dependency**, and select
a deployment you want to add as a dependency from the drop-down list of
deployment IDs.
10. If you want to add a volume, click **Add volume**. Ensure that a running volume
deployment is available before you add one.
11. Click **CREATE DEPLOYMENT** > **Confirm**.

![Deploy demo package](/images/getting-started/deploy-pkg/deploy-demo-pkg.png?classes=border,shadow&width=50pc)
You will be redirected to the **Details** page of the newly created deployment.
The package is successfully deployed when the green colored bar moves from
**In progress** to **Provisioning** to **Succeeded** indicating that the
**DEPLOYMENT PHASE** has *succeeded* and the deployment **STATUS** is **Running**.

![Deployment example](/images/getting-started/deploy-pkg/demo-deployment.png?classes=border,shadow&width=50pc)

Furthermore, if dependent deployments are added then each dependency's **STATUS**
must read **Running**.

You may analyze the corresponding
[deployment logs](/developer-guide/tooling-automation/logging/deployment-logs/)
generated while deploying a package.

If a deployment fails, the **DEPLOYMENT PHASE** will
read **Failed to start**. You may have to click **Deprovision Deployment**, delete the package, create the package all over again, and try deploying it.