---
title: '[ROS] Creating Routed Networks'
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 341
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
slug: '[ros]-creating-routed-networks'
tags:
  - How to
---
## Creating Cloud Routed Network 
Follow these steps to create a cloud routed network.

1. On the left navigation bar, click **Networking>Routed Networks**.
2. Click **ADD NEW ROUTED NETWORK**. The **Create Routed Network** page appears. 
3. Enter a name for routed network.
4. Select **ROS Distro**, as either **Kinetic** or **Melodic** based on ROS version of package components it will be binding to.
5. Select the **Runtime** as **Cloud**.
![goo](/images/tutorials/routed-networks/create-cloud-routed-network.png?classes=border,shadow&width=40pc)
6. From the Resource limit field, select the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. You can select one of the following resource limit based on your requirement.
  * **Smal**l: 1cpu core, 4 GiB memory
  * **Medium**: 2cpu core, 8 GiB memory
  * **Large**: 4cpu core, 16 GiB memory
6. Click **CONTINUE**.


## Creating Device Routed Network 
Follow these steps to create a device routed network. Make sure you have a rapyuta.io registered
device with docker runtime and AMD64 architecture available.


1. On the left navigation bar, click **Networking>Routed Network**.
2. Click **ADD NEW ROUTED NETWORK**. The **Create Routed Network** page appears.
3. Enter a name for routed network.
4. Select **ROS Distro**, as either Kinetic or Melodic based on ROS version of package components it will be binding to.
5. Select the **Runtime** as **Device**.
6. You will see a list of online device with docker runtime and AMD64 architecture in the drop-down list. 
Select the **Device** and it’s **IP Interface**. 
7. Select the Restart policy.
![goo](/images/tutorials/routed-networks/create-device-routed-network.png?classes=border,shadow&width=40pc)
8. Click **CONTINUE**.

Deploying a routed network is identical to deploying any other package and has identical corresponding phases and errors.
Once the routed network deployment succeeds, other ROS package deployments can bind to it and communicate.
![goo](/images/tutorials/routed-networks/routed-network-details.png?classes=border,shadow&width=40pc)

## Deleting Routed Network

Only network not bound to any running deployments can be deleted.

1. On the left navigation bar, click **Networking>Routed Network**. A list of routed networks are displayed.
2. Select the routed network which you want to delete. 
3. Click on **Delete**.
4. Confirm on the routed network deletion message.
{{% notice warning %}}
An attempt to deprovision a network that is currently being used will result in an error.
{{% /notice %}}

{{% notice info %}}
Follow this walkthrough to [bind routed networks](/developer-guide/manage-software-cycle/deployments/#deploying-a-package) to ROS package deployments. 
{{% /notice %}}


## Related Links

* [About ROS Routed Network]({{< ref "/5_deep-dives/53_Networking-and-communication/531_ROS-network">}})