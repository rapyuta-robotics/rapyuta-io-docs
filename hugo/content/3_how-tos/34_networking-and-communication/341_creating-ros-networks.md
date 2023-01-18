---
title: '[ROS] Creating Networks'
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


## Creating a Routed/Native Network

To create a routed/native network:

1. In the rapyuta.io console, on the left navigation bar, select **Networking > Networks**.
2. Click **Add Network** and select **Routed network** or **Native network** and enter:

|Field|Description|
|-----|-----------|
|**Name**| Enter a name for the routed network.|
|**ROS version**| Based on ROS version of the package component, select the ROS version from the dropdown.<br> If you select the ROS version as **Foxy**, you can expand the advanced options to view or modify the **Discovery server ID** and **Discovery server port**{{%notice note%}}
As Kinetic has reached the EOL, it is suggested to select **Melodic** as the ROS version while creating a build.
{{%/notice%}} |
|**Runtime**| Select the runtime as **Device** or **Cloud**. If you create a device runtime, ensure you have a rapyuta.io registered device with docker runtime and AMD64 architecture available.<br> If you select the device runtime: <br> <ul><li> Select the **Device** and its **IP Interface** from the dropdown list.</li> <li> Select the device restart policy. </li></ul> |
|**Resource limit** (applicable only for cloud runtime)|  Select the CPU and memory requirement of the network from the dropdown list. These resources are reserved in the platform for effective ROS communication. You can also choose or enter the custom resource limits. For example, 1.025 vCPU and 2.5 GiB Memory. {{%notice info%}} 
**Upper limit for all types of cloud networks**<br>
* MaxCloudNetworkCPU: 4
* MaxCloudNetworkMemory: 16384
**Lower limit for cloud routed networks**
* MinCloudRoutedNetworkCPU: 0.5
* MinCloudRoutedNetworkMemory: 1024
**Lower limit for cloud native networks**
* MinCloudNativeNetworkCPU: 0.1
* MinCloudNativeNetworkMemory: 512
**Granularity**
* CPU Granularity: 0.025 cores
* Memory Granularity: 128 MB
{{%/notice%}} |

3. Click **CONTINUE**. The routed/native network is created.

{{%notice note%}}
Deploying a routed network is identical to deploying any other package and has identical corresponding phases and errors.
Once the routed network deployment succeeds, other ROS package deployments can bind to it and communicate.
{{%/notice%}}

## Deleting a Network

Only networks not bound to any running deployments can be deleted. To delete a network:

1. On the left navigation bar, click **Networking > Networks**. A list of available networks is displayed.
2. Under **Actions**, click the delete icon.

{{% notice warning %}}
An attempt to deprovision a network that is currently being used will result in an error.
{{% /notice %}}



## Related Links

* [About ROS Routed Networks](/5_deep-dives/53_networking-and-communication/531_ros-network-routed/)

* [About ROS Native Networks](/5_deep-dives/53_networking-and-communication/535_ros-network-native/)


< The below content will be deleted>
<!-->
## Creating Cloud Routed Network 
Follow these steps to create a cloud routed network.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD NEW NETWORK** and select the network type as **Routed Network**. The **Create New Routed Network** page appears. 
3. Enter a name for the routed network.
4. Select **ROS Distro**, as either **Kinetic** or **Melodic** based on ROS version of package components it will be binding to.


{{%notice note%}}
As Kinetic has reached the EOL, it is suggested to select **Melodic** as the ROS version while creating a build.
{{%/notice%}}

5. Select the **Runtime** as **Cloud**.
![goo](/images/tutorials/routed-networks/create-cloud-routed-network.png?classes=border,shadow&width=40pc)
6. From the Resource limit field, select the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. You can select one of the following resource limits based on your requirement.
  * **Small**: 1cpu core, 4 GiB memory
  * **Medium**: 2cpu core, 8 GiB memory
  * **Large**: 4cpu core, 16 GiB memory
6. Click **CONTINUE**. The cloud routed network is created.


## Creating Device Routed Network 
Follow these steps to create a device routed network. Make sure you have a rapyuta.io registered device with docker runtime and AMD64 architecture available.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD NEW NETWORK** and select the network type as **Routed Network**. The **Create new routed network** dialog-box appears.
3. Enter a name for routed network.
4. Select **ROS Distro**, as either Kinetic or Melodic based on ROS version of package components it will be binding to.
5. Select the **Runtime** as **Device**.
6. You will see a list of the online device with docker runtime and AMD64 architecture in the drop-down list. 
Select the **Device** and its **IP Interface**. 
7. Select the [Restart policy](/5_deep-dives/52_software-development/528_deployment-phase/#restart-policy). Available options are **Never**, **Always**, or **On Faiure**.
![goo](/images/tutorials/routed-networks/create-device-routed-network.png?classes=border,shadow&width=40pc)
8. Click **CONTINUE**. The device routed network is created.

Deploying a routed network is identical to deploying any other package and has identical corresponding phases and errors.
Once the routed network deployment succeeds, other ROS package deployments can bind to it and communicate.
![goo](/images/tutorials/routed-networks/routed-network-details.png?classes=border,shadow&width=40pc)

## Creating Native Network

Follow these steps to create a native network.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD NEW NETWORK** and select the network type as **Native Network**. The **Create new native network** dialog-box appears.
![native_network](/images/tutorials/routed-networks/create-native-network.png?classes=border,shadow&width=40pc)
3. Enter a name for the native network. 
4. Select **ROS Distro** as either **Kinetic** or **Melodic** based on ROS version of package components it will be binding to.
5. By default, the **Runtime** is **Cloud**.
6. From the **Resource limit** field, select the memory allocation and computational ability of the native network. These resources are reserved in the platform for effective ROS communication. You can select one of the following resource limits based on your requirement.
  * **X-Small**: 0.5cpu core, 2 GiB memory
  * **Small**: 1cpu core, 4 GiB memory
  * **Medium**: 2cpu core, 8 GiB memory
  * **Large**: 4cpu core, 16 GiB memory

7. Click **CONTINUE**. The native network is created.
<-->

