---
title: ROS Publisher Subsciber (Routed)
description: null
type: build-solutions
date: 2019-10-24T08:17:13.000Z
weight: 411
tags:
    - Tutorials
---
A _ROS publisher_ is part of a ROS package. It is a public git
repository, which is built into a running docker container on the
fly when the package is being deployed. A _ROS subscriber_ is also
a part of the same ROS package. It is downloaded on a device and
is launched when the package is deployed.

## Learning objectives
The tutorial will show you how to deploy a basic ROS package
with a _ROS publisher_ running on the cloud and a
_ROS subscriber_ running on a device such as Raspberry PI by using a cloud routed network.
It also shows how to use dockercompose runtime on a device.

## Prerequisites
1. Device requirements
    1. You should have access to a device (computer or Raspberry PI 2 or 3)
    with an internet connection.
    2. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is installed on the computer.
    3. Ensure that the [ROS Melodic Morenia](http://wiki.ros.org/melodic) is installed on the device.

1. You should be familiar with the below tools:
    1. [Git](https://git-scm.com/doc)
    2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
    3. [ROS topics](https://wiki.ros.org/Topics)
    4. [ROS services](https://wiki.ros.org/Services)

### Estimated time
15 minutes

## Tutorial Video
[Basic ROS publisher and subscriber](https://youtu.be/MZYXSaubiiE)
{{< youtube id="MZYXSaubiiE" title="rapyuta.io tutorial: basic ROS publisher and subscriber with docker runtime" >}}

## On-boarding a device
* If you are using a Raspberry PI device, you must prepare the device before onboarding. For more information, [click here](/4_tutorials/41_beginner/417_preparing-a-raspberry-pi)
* If you are using your computer as a device(Linux machine), [click here](/3_how-tos/32_device-management/321_onboarding-a-device).

{{% notice note%}}
While onboarding the device, ensure that you have selected **Use docker-compose as default runtime** check box. 
{{%/notice%}}

## Creating the Package

To create the _Docker publisher subscriber_ package using the
[console](https://console.rapyuta.io), follow the steps:

1. On the left navigation bar, click **Development > Packages**.
2. Click **ADD NEW PACKAGE**.
3. In the **Package Name** box, type in a name for the package, for example, `Docker publisher subscriber`
4. In the **Package Version** box, enter the version of the package you are creating.
   The default value is _1.0.0_
5. Ensure that **Is a bindable package** is selected.
6. In the **Description** box, provide a summary of the package.
7. Click **NEXT**.

The package has two components: the **talker** running on the cloud and the
**listener** running on the device.

1. Talker component (aka _ROS publisher_)
    1. In the **Component Name** box, enter a name for the component, , for example, `talker`      
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character. It must not begin with a digit.
{{% /notice %}}
    2. For **Component Runtime**, click **Cloud**.
    3. Ensure **Is ROS Component** is selected.
    4. Ensure the **ROS Version** is **Melodic**.
    5. Set the value of **Replicas to run the component** to the number 1 (default value).
    6. In the **Executable Name** box, enter a name for the executable , for example,
       `talkerExecutable`  
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits[0-9], hyphen - and an underscore _ character, and must not start with a digit.
{{% /notice %}}
    7. For the **Docker Image** value, enter: `quay.io/rapyuta/io_tutorials`.
    9. In the **Command to run in the docker container** box, enter the command:
        ```bash
        roslaunch talker talker.launch
        ```

        Ensure you always execute the command *roslaunch* to explicitly start the
        [ROS Master](https://wiki.ros.org/Master) instead of running the *rosrun*
        command, because the ROS Master will fail to start on _rosrun_, and
        eventually, the deployment will fail as well.
        ![talkerExecutable](/images/tutorials/docker-pub-sub/docker-pubsub-talker-exec.png?classes=border,shadow&width=50pc)
    10. The _talkerExecutable_ publishes a ROS topic, `/telemetry`    
       To add a ROS topic, click **Add ROS topic**. In the **Name** box, enter the name of the ROS topic. Select **Maximum** for **QoS**.
2. Listener component (aka _ROS subscriber_)
    1. In the **Component Name** box, type in a name for the component, , for example, `listener`      
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
    2. For **Component Runtime**, click **Device**.
    3. Ensure **Is ROS Component** is selected.
    4. Ensure the **ROS Version** is **Melodic**.
    5. Select **arm32v7** as **Architecture**.
    6. In the **Executable Name** box, type in a name for the executable , for example,
       `listenerExecutable`
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
    7. For the **Docker Image** value, enter: `quay.io/rapyuta/io_tutorials`.
    8. In the **Command to run in the docker container** box, enter the command:
        ```bash
        roslaunch listener listener.launch
        ```

        Ensure you always execute the command *roslaunch* to explicitly start the
        [ROS Master](https://wiki.ros.org/Master) instead of running the *rosrun*
        command, because the ROS Master will fail to start on _rosrun_, and eventually, the deployment will fail as well.
    9. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Create a Cloud Routed Network
If you have already created a routed network, you can skip this procedure. For more information about routed network, [click here](/5_deep-dives/53_networking-and-communication/531_ros-network-routed/)

Perform the following procedure to create a routed network.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD  NETWORK>Routed Network**.
3. In the **Create new routed network** dialog-box, enter `cloud_routed_network_1` as the name for the routed network.
4. Select **ROS Distro**, as   **Melodic**.
5. Select the **Runtime** as **Cloud**.
6. From the **Resource limit** field, select the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. For this tutorial, you can select **Small: 1cpu core, 4 GiB memory** as the resource limit.
![goo](/images/tutorials/routed-networks/create-cloud-routed-network.png?classes=border,shadow&width=35pc)
7. Click **CONTINUE** and wait for the routed network to be successfully running.


## Deploying the package
To deploy a package using the [console](https://console.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **Development > Packages**.
2. Select the _Docker publisher subscriber_ package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the deployment you are
   creating , for example, `Docker Publisher Subscriber Deployment`
5. Since _listener_ has device runtime, you must select the device you want to deploy the component on. Click **Refresh the list of online devices** to retrieve an updated list of online devices.
6. Select the device from the **Select device for deploying the component**
   dropdown list.
7. Click on **ROUTED NETWORK** > **Add**, select the routed network you created from the dropdown list.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page where a green colored bar
moves from **In progress** to **Succeeded** with **Status: Running** indicating that the **DEPLOYMENT PHASE** has **Succeeded**, and the **STATUS** is **Running**.

You may also analyze the corresponding deployment logs to check if everything is working OK.

![Docker Publisher Subscriber Deployment](/images/tutorials/docker-pub-sub/docker-pubsub-deployment.png?classes=border,shadow&width=50pc)

The **listener-listenerExecutable** will be streaming */listener I heard hello_world* logs.

![ROS Subscriber logs](/images/tutorials/docker-pub-sub/listener-logs.png?classes=border,shadow&width=50pc)

while **talker-talkerExecutable** will be publishing *hello_world* logs.

![ROS Publisher logs](/images/tutorials/docker-pub-sub/talker-logs.png?classes=border,shadow&width=50pc)

