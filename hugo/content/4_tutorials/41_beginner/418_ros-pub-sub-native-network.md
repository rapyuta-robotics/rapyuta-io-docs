---
title: ROS Publisher Subscriber (Native)
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
a part of the same ROS package. 

## Learning objectives
The tutorial will show you how to deploy and establish a communication in a basic ROS package
with a _ROS publisher_ and
_ROS subscriber_ components running on the cloud by using a native network.


## Prerequisites

1. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is installed on the computer.
2. You should be familiar with the below tools:
    1. [Git](https://git-scm.com/doc)
    2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
    3. [ROS topics](https://wiki.ros.org/Topics)
    4. [ROS services](https://wiki.ros.org/Services)

### Estimated time
12 minutes

## Creating the Package

To create the _native publisher subscriber_ package using the
[console](https://console.rapyuta.io), follow the steps:

1. On the left navigation bar, click **Development > Packages**.
2. Click **ADD NEW PACKAGE**.
3. In the **Package Name** box, type in a name for the package say `Native publisher subscriber`
4. In the **Package Version** box, enter the version of the package you are creating.
   The default value is _1.0.0_
5. Ensure that **Is a bindable package** is selected.
6. In the **Description** box, provide a summary of the package.
7. Click **NEXT**.

The package has two components: the **talker** and **listener** running on the cloud.

1. Talker component (aka _ROS publisher_)
    1. In the **Component Name** box, enter a name for the component, say `talker`      
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character. It must not begin with a digit.
{{% /notice %}}
    2. For **Component Runtime**, click **Cloud**.
    3. Ensure **Is ROS Component** is selected.
    4. Ensure the **ROS Version** is **Melodic**.
    5. Set the value of **Replicas to run the component** to the number 1 (default value).
    6. In the **Executable Name** box, enter a name for the executable say
       `talkerExecutable`  
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits[0-9], hyphen - and an underscore _ character, and must not start with a digit.
{{% /notice %}}
    7. For the **Docker Image** value, enter: `io-tutorials`.
    8. In the **Command to run in the docker container** box, enter the command:
        ```bash
        roslaunch talker talker.launch
        ```

        Ensure you always execute the command *roslaunch* to explicitly start the
        [ROS Master](https://wiki.ros.org/Master) instead of running the *rosrun*
        command, because the ROS Master will fail to start on _rosrun_, and
        eventually, the deployment will fail as well.
        ![talkerExecutable](/images/tutorials/docker-pub-sub/docker-pubsub-talker-exec.png?classes=border,shadow&width=50pc)
    9. The _talkerExecutable_ publishes a ROS topic, `/telemetry`
       To add a ROS topic, click **Add ROS topic**. In the **Name** box, enter the name of the ROS topic. Select **Maximum** for **QoS**.
2. Listener component (aka _ROS subscriber_)
    1. In the **Component Name** box, type in a name for the component, say `listener`
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
    2. For **Component Runtime**, click **Cloud**.
    3. Ensure **Is ROS Component** is selected.
    4. Ensure the **ROS Version** is **Melodic**.
    5. In the **Executable Name** box, type in a name for the executable, for example,
       `listenerExecutable`
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9], hyphen - and an underscore _ character, and must not begin with a digit.
{{% /notice %}}
    6. For the Docker Image value, enter: `io-tutorials`.
    7. In the **Command to run in the docker container** box, enter the command:
        ```bash
        roslaunch listener listener.launch
        ```

        Ensure you always execute the command *roslaunch* to explicitly start the
        [ROS Master](https://wiki.ros.org/Master) instead of running the *rosrun*
        command, because the ROS Master will fail to start on _rosrun_, and
        eventually, the deployment will fail as well.
    8. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Create a Native Network
If you have already created a native network, you can skip this procedure. For more information about native network, [click here](/5_deep-dives/53_networking-and-communication/535_ros-network-native/)

Perform the following procedure to create a native network.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD  NETWORK** and select the network type as **Native Network**.
3. In the **Create new native network** dialog-box, enter `cloud_native_network1` as the name for the native network.
4. Select **ROS Distro** as **Melodic**.
5. Select the **Runtime** as **Cloud**.
6. From the **Resource limit** field, select the memory allocation and computational ability of the routed network. These resources are reserved in the platform for effective ROS communication. For this tutorial, you can select **Small: 1cpu core, 4 GiB memory** as the resource limit.

7. Click **CONTINUE** and wait for the native network to be successfully running.


## Deploying the package
To deploy a package using the [console](https://console.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **Development>Catalog**.
2. Select the ` native publisher subscriber` package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the deployment you are
   creating say `Native Publisher Subscriber Deployment`.
5. Click on **Native NETWORK** > **Add**, select the native network, `cloud_native_network1`, from the drop-down list.
6. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page where a green colored bar
moves from **In progress** to **Succeeded** with **Status:Running** indicating that the **DEPLOYMENT PHASE** has **Succeeded**, and the **STATUS** is **Running**.

You may also analyze the corresponding deployment logs to check if everything is working OK.

![Docker Publisher Subscriber Deployment](/images/tutorials/docker-pub-sub/native-pubsub-deployment.png?classes=border,shadow&width=50pc)

The **listener-listenerExecutable** will be streaming */listener I heard hello_world* logs.

![ROS Subscriber logs](/images/tutorials/docker-pub-sub/listener-logs.png?classes=border,shadow&width=50pc)

while **talker-talkerExecutable** will be publishing *hello_world* logs.

![ROS Publisher logs](/images/tutorials/docker-pub-sub/talker-logs.png?classes=border,shadow&width=50pc)

