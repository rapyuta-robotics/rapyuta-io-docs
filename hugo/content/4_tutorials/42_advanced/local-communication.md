---
title: "Device Routed Network for Local Communication"
description:
type: build-solutions
date: 2019-10-24T13:47:47+05:30
# pre: "6. "
weight: 640
tags:
    - Tutorials
---
Complex robotic applications involving multi-device communication can be
latent when the service is distributed across WAN. This tutorial demonstrates
how to have multi-device communication within the same LAN.

## Learning objectives
This tutorial will show you how to deploy a device routed network locally for inter-device communication using [rapyuta.io console](https://console.rapyuta.io).

## Prerequisites
1. Device requirements
   1. You should have access to three devices (computer or Raspberry PI 2 or 3)
      with an internet connection.
   2. Install the latest [Google Chrome](https://www.google.com/chrome/)
      browser on the device.
   3. Ensure the [ROS Melodic Morenia](http://wiki.ros.org/melodic) is installed on the device.
1. You should be familiar with the following tools:
   1. ROS [topics](http://wiki.ros.org/Topics)
   2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)

## Estimated time
20 minutes

## Tutorial walkthrough

In this tutorial, you will add three devices namely _device_rn,
_Publisher Device_ and _Subscriber Device_. You will also create and deploy
_ROS Publisher_ and _ROS Subscriber_ packages.

#### Add a Device 
Ensure that the device must be of **amd64** CPU architecture.

1. Click **Devices>All Devices** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device, for example, `device_rn`
3. Use **docker compose as the default runtime** option.
4. Ensure the ROS Version is Melodic.
4. In the **Description** box, provide a summary of the device, for example,
   `I am a Device Routed Network`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**. 

Paste and execute the token in the device's terminal to set up the
rapyuta.io client on the device.

If the device is set up successfully, you should see the following output
at the device's terminal:
```bash
Initializing the Rapyuta Platform

############(100%)
Successfully Installed!
```

Ensure that there's a <span style="color:green">**green**</span> dot next to
the ***Publisher Device***, which indicates that it is online on rapyuta.io.

#### Prepare Publisher Device
The _Publisher Device_ is:

* Raspberry PI 2 or 3
* can have either **arm64v8** or **arm32v7** CPU architecture
* must have ROS Melodic installed on it
* must have rapyuta.io tutorials installed on it

{{% notice info %}}
The custom rapyuta.io image comes with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/) OS and
[ROS Melodic Morenia](http://wiki.ros.org/melodic)software installed on them.
Moreover, the [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials) are also installed on these custom images.
{{% /notice %}}

{{% notice info%}}
Learn how to [prepare Raspberry PI](/4_tutorials/41_beginner/417_preparing-a-raspberry-pi)
{{% /notice %}}

If you are using a custom rapyuta.io image on the device, the catkin workspace is
already set up for you, the ***io_tutorials*** repository is already downloaded
in the workspace, and the source code is already built for you.

{{% notice note %}}
In this tutorial, the catkin workspace is `~/catkin_ws/`, but you
may choose to name your catkin workspace as you like and ensure
that you replace all occurrences to `~/catkin_ws/` with your
workspace name.
{{% /notice %}}

If you are using either a computer with ROS Melodic installed on it, or
a Raspberry PI without custom rapyuta.io image, you will create a catkin
workspace and get the ***io_tutorials*** repository into the workspace.

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
source /opt/ros/melodic/setup.bash
```
```bash
cd ..
```

For the custom rapyuta.io image to support the build command, ***catkin build***, you will set up the device by executing the following:
```bash
cd $HOME && 
mv catkin_ws catkin_old && 
curl https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm32v7.tar.gz | tar xz
``` 

The argument to the ***curl*** command, i.e., the URL address,
changes based on the architecture of the device.

* For a device with an *arm64* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm64v8.tar.gz
* For a device with an *arm32* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm32v7.tar.gz
* For a device with an *amd64* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_amd64.tar.gz

To build the source code in the catkin workspace, execute the below
command in the root of the workspace:
```bash
catkin build talker
```
{{% notice note%}}
If you experience the error ***catkin:command not found***, then the *python-catkin-tools* package is missing on the device, which is required for executing *catkin build* command. Install the package by running the command `sudo apt-get install python-catkin-tools` at the device terminal.
{{% /notice %}}

## Add Publisher Device

1. Click **Devices>All Devices** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device, for example, `Publisher Device`
3. In the **ROS Catkin Workspace** box, enter the absolute path of the catkin workspace found on the device.
   If rapyuta.io custom image is installed on the device, the absolute path of the catkin workspace is `/home/rapyuta/catkin_ws`.    
   Otherwise, the absolute path of the catkin workspace will be different for the device.
4. In the **Description** box, provide a summary of the device, for example,
   `I am a ROS Publisher`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**.

Paste and execute the token in the device's terminal to set up the
rapyuta.io client on the device.

If the device is set up successfully, you should see the following output
at the device's terminal:
```bash
Initializing the Rapyuta Platform

############(100%)
Successfully Installed!
```

Ensure that there's a <span style="color:green">**green**</span> dot next to
the ***Publisher Device***, which indicates that it is online on rapyuta.io.

## Prepare Subscriber Device
The _Subscriber Device_ is a:

* Raspberry PI 2 or 3
* can have either **arm64v8** or **arm32v7** CPU architecture
* must have ROS Melodic installed on it
* must have rapyuta.io tutorials installed on it

{{% notice info %}}
The custom rapyuta.io image comes with [Ubuntu Xenial](http://releases.ubuntu.com/xenial/)
OS and [ROS Melodic Morenia](http://wiki.ros.org/melodic) software installed on them.
Moreover, the [rapyuta.io tutorials](https://github.com/rapyuta-robotics/io_tutorials)
are also installed on these custom images.
{{% /notice %}}

{{% notice info %}}
Learn how to [prepare Raspberry PI](/4_tutorials/41_beginner/417_preparing-a-raspberry-pi)
{{% /notice %}}

If you are using a custom rapyuta.io image on the device, the catkin workspace is
set up for you, the ***io_tutorials*** repository is downloaded in the workspace, and the source code is built for you.

{{% notice note %}}
In this tutorial, the catkin workspace is `~/catkin_ws/`, but you
may choose to name your catkin workspace as you like and ensure
that you replace all occurrences to `~/catkin_ws/` with your
workspace name.
{{% /notice %}}

If you are using either a computer with ROS installed on it or a
Raspberry PI without custom rapyuta.io image, you will create a
catkin workspace and get the ***io_tutorials*** repository into
the workspace.

To create the catkin workspace, you have to execute the below commands
at the device's terminal:

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
source /opt/ros/melodic/setup.bash
```

```bash
cd ..
```

For the custom rapyuta.io image to support the build command, ***catkin build***, you will set up the device by executing the following:

```bash
cd $HOME && 
mv catkin_ws catkin_old && 
curl https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm32v7.tar.gz | tar xz
``` 

The argument to the ***curl*** command, i.e., the URL address,
changes based on the architecture of the device.

* For a device with an *arm64* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm64v8.tar.gz
* For a device with an *arm32* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_arm32v7.tar.gz
* For a device with an *amd64* architecture, use https://storage.googleapis.com/artifacts.rapyuta.io/io_tutorials/catkin_ws_amd64.tar.gz

To build the source code in the catkin workspace, execute the
below command in the root of the workspace:
```bash
catkin build listener
```
{{% notice note%}}
If you experience the error ***catkin:command not found***, then the *python-catkin-tools* package is missing on the device, which is required for executing *catkin build* command. Install the package by running the command `sudo apt-get install python-catkin-tools` at the device terminal.
{{% /notice %}}

## Add Subscriber Device

1. Click **Devices>All Devices** > **ADD NEW DEVICE**.
2. In the **Device Name** box, enter the name of the device, for example, `Subscriber Device`
3. In the **ROS Catkin Workspace** box, enter the absolute path of the catkin workspace found on the device.    
   If rapyuta.io custom image is installed on the device, the absolute path
   of the catkin workspace is `/home/rapyuta/catkin_ws`    
   Otherwise, the absolute path of the catkin workspace will be
   different for the device.
4. In the **Description** box, provide a summary of the device, for example,
   `I am a ROS Subscriber`
5. Click **CONTINUE**.
6. Click **COPY** to copy the generated **Token**.

Paste and execute the token in the device's terminal to set up the device
manager client on the device.

If the device is set up successfully, you should see the following output:
```bash
Initializing the Rapyuta Platform

############(100%)
Successfully Installed!
```

Ensure that there's a <span style="color:green">**green**</span> dot next to
the ***Subscriber Device***, which indicates that it is online on rapyuta.io.

## Create ROS Publisher package

1. Click **Development > Packages** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the package, its version, whether it is a singleton package, and a
   description.
   1. In the **Package Name** box, enter the name of the package, for example, `ROS Publisher`
   2. In the **Package Version** box, type in the package's version. By default,
      the version is set to _1.0.0_
   3. Ensure **Is a singleton package** checkbox is ***not selected***.
   4. Ensure **Is a bindable package** checkbox is ***not selected***.
   5. In the **Description** box, provide a summary of the package, for example,
      `Publishes ROS topic for a subscriber`
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component, for example, `Publisher`
4. Select **Device** as the **Component Runtime**.
5. Ensure **Is ROS Component** is selected.
6. Ensure the **ROS Version** is **Melodic**.
7. In the **Executable Name** box, type in a name for the executable, for example, `talker`
8. For **Executable type**, select **Default** because the source code is already installed on the _Publisher Device_.
9. In the **Command to run in the docker container** box, copy and paste the command:
      ```bash
      roslaunch talker talker.launch
      ```

   Ensure you always execute *roslaunch* command for explicitly starting the
    [ROS Master](http://wiki.ros.org/Master) instead of running the *rosrun* command, because the ROS Master will fail to start on _rosrun_, and eventually, the deployment will fail as well.
9. To add a ROS topic, click **Add ROS topic**. In the **Name** box, enter `/telemetry`
   and set **QoS** to **Maximum**.
10. Click **NEXT** > **CONFIRM PACKAGE CREATION**.



## Create ROS Subscriber package

1. Click **Development > Packages** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
   package, its version, whether it is a singleton package, and a
   short description.
   1. In the **Package Name** box, enter the name of the package , for example, `ROS Subscriber`
   2. In the **Package Version** box, type in the package's version. By default,
      the version is set to _1.0.0_
   3. Ensure **Is a singleton package** checkbox is ***not selected***.
   4. Ensure **Is a bindable package** checkbox is ***not selected***.
   5. In the **Description** box, provide a summary of the package , for example,
      `Subscribes to ROS topic published by a publisher`
   6. Click **NEXT**.
3. In the **Component Name** box, enter a name for the component, for example, `Subscriber`
4. Select **Device** as the **Component Runtime**.
5. Ensure **Is ROS Component** is selected.
6. Ensure the **ROS Version** is **Melodic**.
7. In the **Executable Name** box, type in a name for the executable, for example, `listener`
8. For **Executable type**, select **Default** because the source code is already installed on the _Subcriber Device_.
9. In the **Command to run in the docker container** box, copy and paste the command:
   ```bash
   roslaunch listener listener.launch
   ```

   Ensure you always execute *roslaunch* command for explicitly starting the
   [ROS Master](http://wiki.ros.org/Master) instead of running the *rosrun*
   command, because the ROS Master will fail to start on _rosrun_, and eventually, the deployment will fail as well.
9. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Create a Device Routed Network
Follow these steps to create a device routed network. Make sure you have a rapyuta.io registered
device with docker runtime.


1. On the left navigation bar, click **NETWORKS**.
2. Click **ADD NETWORK**. Select **Routed network** in the pop-up..
3. Enter  `device_routed_network_1` as the name for the routed network.
4. Select **ROS Distro** as Melodic.
5. Select the **Runtime** as **Device**.
6. You will see a list of online device with docker runtime and AMD64 architecture in the drop-down list. 
Select the **Device** as  `Routed_Network_Device` and its **IP Interface**. 
7. Select the [Restart policy](/5_deep-dives/52_software-development/528_deployment-phase/#restart-policy).
![goo](/images/tutorials/routed-networks/create-device-routed-network.png?classes=border,shadow&width=40pc)
8. Click **CONTINUE**.

The routed network is getting deployed and is identical to the deployment of any other package and has identical corresponding phases and errors.
Once the routed network deployment succeeds, other ROS package deployments can bind to it and communicate.

## Deploy ROS Publisher package

1. Click **Development > Packages** > select **ROS Publisher** package > click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment
   , for example, `ROS Publisher Deployment`
3. Since **Publisher** has **Device runtime**, select the device you want to deploy on by clicking **Refresh the list of online devices**. It retrieves an
updated list of online devices.
4. Select **Publisher Device** from **Select device for deploying the component** drop-down list.
5. Under **Device Config Variables**, ensure that the **ros_workspace** and
   **ros_distro** are selected.
6. Click **Add** next to the **Routed Network** field.
7. From the **Network** drop-down menu, select `device_routed_network_1` as the device routed network.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the **Details** tab of the newly created deployment. The package is successfully deployed when the green colored bar moves from
**In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded**
and the **STATUS** is **Running**.

![ROS Publisher Deployment](/images/tutorials/local-comm-broker/ros-pub-deployment.png?classes=border,shadow&width=50pc)


You may analyze the corresponding [deployment logs](/3_how-tos/35_tooling_and_debugging/debugging-logs/) so you may debug
if the deployment fails.

The corresponding dependency graph of **ROS Publisher Deployment** looks like:
![Dependency graph](/images/tutorials/local-comm-broker/dgraph-pub-broker.png?classes=border,shadow&width=50pc)

## Deploy ROS Subscriber package

1. Click **Development>Catalog** > select **ROS Subscriber** package > click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment, for example,
   `ROS Subscriber Deployment`
3. Since **Subscriber** has **Device runtime**, select the device you want to deploy on by clicking **Refresh the list of online devices**. This retrieves an
updated list of online devices.
4. Select **Subscriber Device** from the **Select device for deploying the component** drop-down list.
5. Ensure that **ros_workspace** and **ros_distro** are selected.
6. From the **Network** drop-down menu, select `device_routed_network_1` as the device routed network.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** tab.
The package is successfully deployed when the green colored bar moves from
**In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded**, and the **STATUS** is **Running**.

![ROS Subscriber Deployment](/images/tutorials/local-comm-broker/ros-sub-deployment.png?classes=border,shadow&width=50pc)


You may analyze the corresponding [deployment logs](/3_how-tos/35_tooling_and_debugging/debugging-logs//) so you may debug
if the deployment fails.

The corresponding dependency graph of **ROS Subscriber Deployment** looks like:
![Dependency graph](/images/tutorials/local-comm-broker/dgraph-sub-broker.png?classes=border,shadow&width=50pc)

If all of the above three deployments are successfully running, the
logs of **ROS Subscriber Deployment** will print ***hello_world***.


Since the device routed network is deployed on the **device_rn** locally,
and the bindable attribute is not selected (value is set to false) for both
the **ROS Publisher** package and the **ROS Subscriber** package, the ROS topic
(***/telemetry***) and in general, the data is transferred within the same
local network. Thus, the application's latency is comparatively reduced
provided the **device_rn** is in the same network as the **Publisher Device**, and **Subscriber Device**.