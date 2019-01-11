---
title: "Dynamic Map Server"
description:
type: dev-tutorials
date: 2018-11-22T13:20:02+05:30
pre: "c. "
weight: 315
---
A deployment may depend on other deployments, and it can access all of the
exposed topics, services, actions, endpoints and configuration parameters of
other deployments at runtime.

## Learning objectives
This tutorial will show you how to create a dependent deployment using
[rapyuta.io console](https://closed-beta.rapyuta.io).

## Prerequisites
1. You are recommended to complete the [ROS publisher subscriber](../ros-publisher-subscriber)
tutorial.
2. Device requirements
	1. You should have access to a device (computer and/or Raspberry PI 2 or 3)
	with an internet connection.
	2. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is
	installed on the computer.
	3. Ensure that the [Robot Operating System (ROS)](https://wiki.ros.org/kinetic/Installation)
	is installed on the device.
3. You should be familiar with the [core concepts](/core-concepts) of rapyuta.io
4. You should be familiar with the [map_server](https://wiki.ros.org/map_server) ROS package.
5. You should be familiar with the below tools:
	1. [Git](https://git-scm.com/doc)
	2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
	3. [ROS topics](https://wiki.ros.org/Topics)
	4. [ROS nodes](https://wiki.ros.org/Nodes)
	5. [ROS services](https://wiki.ros.org/Services)

## Difficulty
Intermediate

## Estimated time
It will take nearly about 30 minutes to finish the tutorial.

## Tutorial Walkthrough

You will add and deploy the _dynamic-map-server_ package. The package offers a
navigation map to other deployments that depend on it. It is a modified version
of the original map_server package. Besides exposing ROS topics such as `/map`
and */map_metadata*, it also exposes an additional service called */set_map*,
which replaces the map published by `/map` topic.

## Create dynamic_map_server package
1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. You should provide information about the package such as the name of the
package, its version, whether it is a singleton package, and a short description.
	1. In the **Package Name** box, type in the name of the package say
	   `dynamic_map_server`
	2. In the **Package Version** box, type in the version of the package. By
	   default, the version is set to _1.0.0_ 
{{% notice info %}}   
Package version must follow semantic versioning specification.
{{% /notice %}}
	3. Ensure **Is a singleton package** checkbox is not selected.
	4. Make sure **Is a bindable package** checkbox is selected.
	5. In the **Description** box, provide a brief summary of the package, for
	   example, `A modified ROS map_server`
	6. Click **NEXT**.
4. In the **Component Name** box, enter a name for the component say
   `DynamicMapServer`
{{% notice info %}}     
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hypen - and
underscore _ character, and must not begin with a digit.
{{% /notice %}}
5. Select **Cloud** for **Component Runtime**.
6. Ensure **Is ROS Component** is selected.
7. Set the value of **Replicas to run the component** to number 1 (default value).
8. In the **Executable Name** box, type in a name for the executable say
   `dmsexecutable`  
{{% notice info %}} 
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9], hypen - and
underscore _ character, and must not begin with a digit.
{{% /notice %}}
9. Select **Git** for **Executable Type**.
10. In the **Git Repository** box, enter the git repository url:
https://github.com/rapyuta/io_tutorials
11. In the **Command to run in the docker container** box, copy and paste the command:
	```bash
	roslaunch dynamic_map_server map_server.launch
	```
	
	Ensure you always execute *roslaunch* command to explicitly start the
	[ROS Master](http://wiki.ros.org/Master) instead of running the *rosrun*
	command, because the ROS Master will fail to start on _rosrun_, and
	eventually, the deployment will fail as well.

	![dmsexecutable](/images/tutorials/dms/dms-exec-details.png?classes=border,shadow&width=50pc)
12. To add a ROS topic, click **Add ROS topic**. In the **Name** box,
    enter `/map_metadata` and set **QoS** to **Low**.
    Similarly, add another ROS topic `/map` and set **QoS** to **Low**.
13. To add a ROS service, click **Add ROS service**. In the **Name** box, enter
    `/set_map`
14. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

The package takes about five minutes to build the source code in the *io_tutorials*
repository into a running container. You may view the corresponding
[build logs](/core-concepts/logging/build-logs), which help in debugging failing builds.

A flickering yellow dot against the package name indicates that the **Build Status**
is **New**, while a green dot against the package name indicates that the **Build
Status** is **Complete**.

Additionally, you may verify if the package is built successfully and is ready
to be deployed by clicking to see if the **Deploy package** button is enabled.

## Deploy dynamic_map_server
To deploy dynamic_map_server package, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select *dynamic_map_server* package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, provide a name for the specific deployment
   you are creating say `Dynamic Map Server Deployment`
5. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page.
The _Dynamic Map Server Deployment_ is successfully running only when the green
coloured bar moves to **Succeeded** and **Status:Running** point indicating that the
**DEPLOYMENT PHASE** is **Succeeded** and the **STATUS** is **Running**.

![Dynamic Map Server Deployment](/images/tutorials/dms/dms-deployment.png?classes=border,shadow&width=50pc)

## Create dependent deployment
If you are using a Raspberry PI as the device, learn
[how to prepare it](/getting-started/prepare-raspberry-pi).

If you are using a UP Board as the device, learn
[how to prepare it](/getting-started/prepare-up-board).

If you are using custom rapyuta.io image on the device, the catkin workspace is already
created, the *io_tutorials* repository is already present in the workspace. Moreover, the
source code is built for you.

If you are using either a computer with ROS installed on it or any device other
than Raspberry PI or a Raspberry PI without custom rapyuta.io image, you will
create a catkin workspace and get the *io_tutorials* repository into the workspace.

{{% notice note %}}
In this tutorial, the catkin workspace is `~/catkin_ws/`, but you may choose to name
your catkin workspace as you like and ensure that you replace all occurrences to
`~/catkin_ws/` with your workspace name.
{{% /notice %}}

Hence, to create a catkin workspace on the device, you have to execute the below commands at the device's terminal prompt.
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
source /opt/ros/kinetic/setup.bash
```
```bash
cd ..
```
To build the source code in the catkin workspace, execute the below commands in the root of
the workspace:
```bash
catkin_make -DCATKIN_WHITELIST_PACKAGES="map_listener"
```
And then, you will [add the device](/getting-started/add-new-device)
to rapyuta.io using the [console](https://closed-beta.rapyuta.io). Ensure that **Use docker compose as default runtime**
checkbox is **_not selected_**.

### Create map_listener package
You will create *map_listener* package, which will be deployed on the device.
To create the package, follow the instructions:

1. Click **CATALOG** > **ADD NEW PACKAGE**.
2. You should provide information about the package such as the name of the
   package, its version number, whether its a singleton package and a short
   description.
	1. In the **Package Name** box, enter a name for the package say `map_listener`
	2. In the **Package Version** box, enter the version of the package. By default,
		the version is set to _1.0.0_
	3. Ensure **Is singleton package** is not selected.
	4. Make sure **Is a bindable package** is selected.
	4. In the **Description** box, provide a brief summary of the package say
	   `Runs a map_listener node on device`
	5. Click **NEXT**.
3. In the **Component Name** box, provide a name for the component say `MapListener`
4. For **Component Runtime**, click **Device**.
5. Ensure **Is ROS Component** is selected.
6. In the **Executable Name** box, enter a name for the executable say
   `map_listener_executable`
7. For **Executable Type**, click **Default**.
8. In the **Command to run on the device** box, copy and paste the command:
	```bash
	roslaunch map_listener listener.launch
	```

	Ensure you always execute the *roslaunch* command to explicitly start the [ROS
	Master](http://wiki.ros.org/Master) instead of running the *rosrun* command,
	because the ROS Master will fail to start on *rosrun* command, and
	eventually, the deployment will fail as well.
	![map_listener_executable](/images/tutorials/dms/maplistener_exec_details.png?classes=border,shadow&width=50pc)
9. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

### Deploy map_listener package
To deploy *map_listener* package, follow the steps:

1. Click **CATALOG** > select *map_listener* package > click **Deploy package**.
2. In the **Name of deployment** box, provide a name for the specific deployment
   say `Map Listener Deployment`
3. Since *map_listener_executable* has device runtime, you must select the device
   you want to deploy the component on. Click **Refresh the list of online devices**
   to retrieve an updated list of online devices.
4. Select the device from the **Select device for deploying the component** drop-down
   list.
5. Ensure that the **ros_workspace** and **ros_distro** are selected.
6. Click **Add dependency** to add a dependent deployment.
7. Select _Dynamic Map Server Deployment_ from the drop-down list of deployments.
   Ensure that the _Dynamic Map Server Deployment_ is valid and is already running.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You can verify if the _Map Listener Deployment_ is successfully running by
checking if the **DEPLOYMENT PHASE** is _Succeeded_ and the **STATUS** is _Running_.

![Map Listener Deployment](/images/tutorials/dms/map-listener-deployment.png?classes=border,shadow&width=60pc)

Ensure that the dependent deployment **STATUS** is _Running_ as well.

To know whether *map_listener* has received the map data, execute the below
command in the device's terminal:

```bash
sudo tail /root/.ros/log/latest/map_listener-2.log
```

Sometimes *map_listener* stores the map data in *map_listener-1.log* file. Therefore,
you are recommended to check all the files of the form ***map_listener-n.log***
where **_n_** is a positive integer, if any file is empty.

You should see a similar output as shown below after executing the above command:

```bash
[rosout][INFO] 2018-01-26 06:18:56,565: Received map data
[rosout][INFO] 2018-01-26 06:18:56,578: Read a 4000 X 4000 map @ 0.0500000007451 m/cell
```

### Update navigation map
In the device's terminal window, execute the command:

```bash
sudo tail -f /root/.ros/log/latest/rosout.log
```

Open another terminal window, and run the command:

```bash
source ~/catkin_ws/devel/setup.bash
```
To pass a service argument to */set_map*, ensure you press the tab key (more than twice) before executing the below command:
```bash
rosservice call /set_map "map:
  header:
    seq: 0
    stamp:
      secs: 0
      nsecs: 0
    frame_id: ''
  info:
    map_load_time: {secs: 0, nsecs: 0}
    resolution: 0.0
    width: 0
    height: 0
    origin:
      position: {x: 0.0, y: 0.0, z: 0.0}
      orientation: {x: 0.0, y: 0.0, z: 0.0, w: 0.0}
  data: [0]
initial_pose:
  header:
    seq: 0
    stamp: {secs: 0, nsecs: 0}
    frame_id: ''
  pose:
    pose:
      position: {x: 0.0, y: 0.0, z: 0.0}
      orientation: {x: 0.0, y: 0.0, z: 0.0, w: 0.0}
    covariance: [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]"
```

In the former terminal window, you should see that the *map_listener* will
receive a new map. The result may appear as shown below:
```bash
... INFO [listener.py:7(callback) [topics: /rosout, /map] Received map data
... INFO [listener.py:11(callback) [topics: /rosout, /map] Read a 0 X 0 map @ 0.0 m/cell
```
