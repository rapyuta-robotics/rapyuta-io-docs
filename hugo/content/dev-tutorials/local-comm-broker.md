---
title: "Publisher Subscriber using Communication Broker"
description:
type: dev-tutorials
date: 2018-11-22T13:20:28+05:30
pre: "d. "
weight: 320
---
Complex robotic applications involving multi-device communication with service
distributed across WAN can be latent. This tutorial demonstrates how to have
multi-device communication within same LAN.

## Learning objectives
This tutorial will show how to deploy a broker package locally for inter
device communication using [rapyuta.io console](https://closed-beta.rapyuta.io).

## Prerequisites
1. Device requirements
	1. You should have access to three devices (computer and/or Raspberry PI 2 or 3)
	   with an internet connection.
	2. Ensure that the latest [Google Chrome](https://www.google.com/chrome/)
	   browser is installed on the device.
	3. Ensure the [Robot Operating System](http://wiki.ros.org/kinetic/Installation) (ROS kinetic)
	   is installed on the device.
2. You should be familiar with the [core concepts](/core-concepts) of rapyuta.io
3. You should be familiar with the following tools:
	1. ROS [topics](http://wiki.ros.org/Topics)
	2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)

## Difficulty
Intermediate

## Estimated time
It will take nearly 20 minutes to finish the tutorial.



In this tutorial, you will add three devices namely _Broker Device_,
_Publisher Device_ and _Subscriber Device_. You will also create and deploy
_ROS Subscriber_ and _ROS Publisher_ packages.

## Add Broker Device
The _Broker Device_ must be of **amd64** CPU architecture.

1. Click **DEVICES** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device say `Broker Device`
3. Select **Use docker compose as default runtime** checkbox.
4. In the **Description** box, provide a short summary of the device
   say `I am a communication broker`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**

Paste the token (otherwise called the device set up link) in the device's terminal
and run it to set up the rapyuta.io client on the device.

If the device is set up successfully, you should see the following output:
```bash
Initialising the Rapyuta Platform

############(100%)
Successfully Installed!
```

## Prepare Publisher Device
The _Publisher Device_ is:

* Raspberry PI 2 or 3
* can have either **arm64v8** or **arm32v7** CPU architecture
* must have ROS kinetic installed on it
* must have rapyuta.io tutorials installed on it

{{% notice info %}}
The custom rapyuta.io images come with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/)
OS and [ROS kinetic](http://wiki.ros.org/kinetic) software installed on them.
Moreover, the [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials)
are also installed on these custom images.
{{% /notice %}}

{{% notice info%}}
Learn how to [prepare Raspberry PI](/getting-started/prepare-raspberry-pi)
{{% /notice %}}

If you are using custom rapyuta.io image on the device, the catkin workspace is
already set up, the io_tutorials repository is already downloaded in the workspace, and the
source code is already built for you.

If you are using either a computer with ROS installed on it, or a Raspberry PI without custom rapyuta.io image, you will
create a catkin workspace and get the *io_tutorials* repository into the workspace.

{{% notice note %}}
In this tutorial, the catkin workspace is `~/catkin_ws/`, but you may choose to name
your catkin workspace as you like and ensure that you replace all occurrences to
`~/catkin_ws/` with your workspace name.
{{% /notice %}}

To create the catkin workspace, you have to execute the below commands at the device's terminal.

```bash
cd $HOME
```
```bash
mkdir -p catkin_ws/src
```
```bash
cd catkin_ws/src
```
```bash
git clone https://github.com/rapyuta/io_tutorials
```
```bash
source ~/catkin_ws/devel/setup.bash
```
```bash
cd ..
```
To build the source code in the catkin workspace, execute the below command in the root of
the workspace:
```bash
catkin build talker
```
{{% notice note%}}
If you experience the error ***catkin:command not found***,
then the *python-catkin-tools* package is missing on the device, which is required for executing *catkin build* command. Install the package by running the command `sudo apt-get install python-catkin-tools` at the device terminal.
{{% /notice %}}

## Add Publisher Device

1. Click **DEVICES** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device say `Publisher Device`
3. In the **ROS Catkin Workspace** box, enter the absolute path of the catkin
   workspace found on the device.
   If rapyuta.io custom image is installed on the device, the absolute path
   of the catkin workspace is `/home/rapyuta/catkin_ws`    
   Otherwise the absolute path of the catkin workspace will be different
   for the device.
4. In the **Description** box, provide a short summary of the device say
   `I am a ROS Publisher`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**.

Paste the token in the device's terminal and run it to set up the
rapyuta.io client on the device.

If the device is set up successfully, you should see the following output:
```bash
Initialising the Rapyuta Platform

############(100%)
Successfully Installed!
```

## Prepare Subscriber Device
The _Subscriber Device_ is a:

* Raspberry PI 2 or 3
* can have either **arm64v8** or **arm32v7** CPU architecture
* must have ROS kinetic installed on it
* must have rapyuta.io tutorials installed on it

{{% notice info %}}
The custom rapyuta.io images come with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/)
OS and [ROS kinetic](http://wiki.ros.org/kinetic) software installed on them.
Moreover, the [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials)
are also installed on these custom images.
{{% /notice %}}

{{% notice info %}}
Learn how to [prepare Raspberry PI](/getting-started/prepare-raspberry-pi)
{{% /notice %}}

If you are using custom rapyuta.io image on the device, the catkin workspace is
set up, the io_tutorials repository is downloaded in the workspace, and the
source code is built for you.

If you are using either a computer with ROS installed on it, or a Raspberry PI without custom rapyuta.io image, you will
create a catkin workspace and get the *io_tutorials* repository into the workspace.

{{% notice note %}}
In this tutorial, the catkin workspace is `~/catkin_ws/`, but you may choose to name
your catkin workspace as you like and ensure that you replace all occurrences to
`~/catkin_ws/` with your workspace name.
{{% /notice %}}

To create the catkin workspace, you have to execute the below commands at the device's terminal.
```bash
cd $HOME
```
```bash
mkdir -p catkin_ws/src
```
```bash
cd catkin_ws/src
```
```bash
git clone https://github.com/rapyuta/io_tutorials
```
```bash
source ~/catkin_ws/devel/setup.bash
```
```bash
cd ..
```
To build the source code in the catkin workspace, execute the below command in the root of
the workspace:
```bash
catkin build listener
```
{{% notice note%}}
If you experience the error ***catkin:command not found***,
then the *python-catkin-tools* package is missing on the device, which is required for executing *catkin build* command. Install the package by running the command `sudo apt-get install python-catkin-tools` at the device terminal.
{{% /notice %}}

## Add Subscriber Device

1. Click **DEVICES** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device say `Subscriber Device`
3. In the **ROS Catkin Workspace** box, enter the absolute path of the
   catkin workspace found on the device.    
   If rapyuta.io custom image is installed on the device, the absolute path
   of the catkin workspace is `/home/rapyuta/catkin_ws`    
   Otherwise the absolute path of the catkin workspace will be
   different for the device.
4. In the **Description** box, provide a short summary of the device say
   `I am a ROS Subscriber`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**.

Paste the token in the device's terminal and run it to set up the device
manager client on the device.

If the device is set up successfully, you should see the following output:
```bash
Initialising the Rapyuta Platform

############(100%)
Successfully Installed!
```

## Deploy local communication broker

1. Click **CATALOG**.
2. Under **Communication packages**, select **Rapyuta IO Local Communication Broker**
   package.
3. Click **Deploy package**.
4. In the **Name of Deployment** box, enter a name for the broker deployment say
   `Communication Broker Deployment`
5. Since **brokerComponent** has **Device runtime** select the device you want to
   deploy on by clicking **Refresh the list of online devices**. This retrieves
   an updated list of online devices.
6. Select **Broker Device** from **Select device for deploying the
   component** drop-down list.
7. Select the network interface parameter value as per your device on
   which you are deploying by clicking **NETWORK_INTERFACE** drop-down list.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab.
The package is successfully deployed when the green coloured bar moves
from **In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE**
has **Succeeded** and the **STATUS** is **Running**.

You may analyse the corresponding [deployment logs](/core-concepts/logging/deployment-logs)
so you may debug if the deployment fails.

## Create ROS Publisher package

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
   package, its version, whether it is a singleton package, and a short
   description.
   1. In the **Package Name** box, enter the name of the package say `ROS Publisher`
   2. In the **Package Version** box, type in the package's version. By default,
      the version is set to _1.0.0_
   3. Ensure **Is a singleton package** checkbox is not selected.
   4. Ensure **Is a bindable package** checkbox is not selected.
   5. In the **Description** box, provide a brief summary of the package say
      `Publishes ROS topic for a subscriber`
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component, say `Publisher`
4. Select **Device** as the **Component Runtime**.
5. Ensure **Is ROS Component** is selected.
6. In the **Executable Name** box, type in a name for the executable say `talker`
7. For **Executable type**, select **Default** because the source code is already
   installed on the _Publisher Device_.
8. In the **Command to run in the docker container** box, copy and paste the command:
   	```bash
   	roslaunch talker talker.launch
   	```

	Ensure you always execute *roslaunch* command to explicitly start the
    [ROS Master](http://wiki.ros.org/Master) instead of running the *rosrun* command,
    because the ROS Master will fail to start on _rosrun_, and eventually, the
    deployment will fail as well.
9. To add a ROS topic, click **Add ROS topic**. In the **Name** box, enter `/telemetry`
   and set **QoS** to **Maximum**.
10. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Create ROS Subscriber package

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
   package, its version, whether it is a singleton package, and a
   short description.
   	1. In the **Package Name** box, enter the name of the package say `ROS Subscriber`
	2. In the **Package Version** box, type in the package's version. By default,
	   the version is set to _1.0.0_
	3. Ensure **Is a singleton package** checkbox is not selected.
	4. Ensure **Is a bindable package** checkbox is not selected.
	5. In the **Description** box, provide a brief summary of the package say
	   `Subscribes to ROS topic published by a publisher`
	6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component, say `Subscriber`
4. Select **Device** as the **Component Runtime**.
5. Ensure **Is ROS Component** is selected.
6. In the **Executable Name** box, type in a name for the executable say `listener`
7. For **Executable type**, select **Default** because the source code is already
   installed on the _Subcriber Device_.
8. In the **Command to run in the docker container** box, copy and paste the command:
	```bash
	roslaunch listener listener.launch
	```

	Ensure you always execute *roslaunch* command to explicitly start the
	[ROS Master](http://wiki.ros.org/Master) instead of running the *rosrun*
	command, because the ROS Master will fail to start on _rosrun_, and
	eventually, the deployment will fail as well.
9. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Deploy ROS Publisher package

1. Click **CATALOG** > select **ROS Publisher** package > click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment
   say `ROS Publisher Deployment`
3. Since **Publisher** has **Device runtime**, select the device you want to deploy
   on by clicking **Refresh the list of online devices**. This retrieves an
   updated list of online devices.
4. Select **Publisher Device** from **Select device for deploying the
   component** drop-down list.
5. Under **Device Config Variables**, ensure that the **ros_workspace** and
   **ros_distro** are selected.
6. Click **Add dependency** to add a dependent deployment.
7. Select **Communication Broker Deployment** from the drop-down list of
   deployments. Ensure that the **Communication Broker Deployment** is
   valid and is already running.
   ![Dependent deployment](/images/tutorials/local-comm-broker/ros-pub-dependent-deploy.png?classes=border,shadow&width=50pc)
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab. The
package is successfully deployed when the green coloured bar moves from
**In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded**
and the **STATUS** is **Running**.

![ROS Publisher Deployment](/images/tutorials/local-comm-broker/ros-pub-deployment.png?classes=border,shadow&width=50pc)

Ensure that the dependent deployment **STATUS** is **Running** as well.

You may analyse the corresponding [deployment logs](/core-concepts/logging/deployment-logs) so you may debug
if the deployment fails.

## Deploy ROS Subscriber package

1. Click **CATALOG** > select **ROS Subscriber** package > click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment say
   `ROS Subscriber Deployment`
3. Since **Subscriber** has **Device runtime**, select the device you want to deploy
   on by clicking **Refresh the list of online devices**. This retrieves an
   updated list of online devices.
4. Select **Subscriber Device** from the **Select device for deploying the
   component** drop-down list.
5. Ensure that **ros_workspace** and **ros_distro** are selected.
6. Click **Add dependency** to add a dependent deployment.
7. Select **Communication Broker Deployment** from the drop-down list of
   deployments. Ensure that the **Communication Broker Deployment** is valid
   and is already running.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab.
The package is successfully deployed when the green coloured bar moves from
**In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded**
and the **STATUS** is **Running**.

![ROS Subscriber Deployment](/images/tutorials/local-comm-broker/ros-sub-deployment.png?classes=border,shadow&width=50pc)

Ensure that the dependent deployment **STATUS** is **Running** as well.

You may analyse the corresponding [deployment logs](/core-concepts/logging/deployment-logs) so you may debug
if the deployment fails.

If all of the above three deployments are successfully running, the
logs of _ROS Subscriber Deployment_ will print *hello_world*.


Since the communication broker is deployed on the _Broker Device_ locally,
and the bindable attribute is not selected (value is set to false) for both
the _ROS Publisher_ package and the _ROS Subscriber_ package, the ROS topic
(*/telemetry*) and in general, the data is transferred within the same
local network. Thus, the application's latency is comparatively reduced
provided the _Broker Device_ is in the same network as the _Publisher Device_
and _Subscriber Device_.
