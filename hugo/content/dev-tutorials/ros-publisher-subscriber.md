---
title: "ROS Publisher Subscriber"
description:
type: dev-tutorials
date: 2018-11-22T13:18:57+05:30
pre: "a. "
weight: 305
---
A _ROS publisher_ is part of a ROS package. It is a public git repository, which
is built into a docker container on the fly when the package is being deployed.
A _ROS subscriber_ is also a part of the same ROS package. It is downloaded on a
device, and is launched when the package is deployed.

## Learning objectives
The tutorial will show you how to deploy a basic ROS package with a _ROS publisher_
running on the cloud and a _ROS subscriber_ running on a device such as Raspberry
PI.

## Prerequisites
1. Device requirements
	1. You should have access to a device (computer and/or Raspberry PI 2 or 3)
	with an internet connection.
	2. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is
	installed on the computer.
	3. Ensure that the [Robot Operating System (ROS)](https://wiki.ros.org/kinetic/Installation)
	is installed on the device.
2. You should be familiar with the [core concepts](/core-concepts/) of rapyuta.io
3. You should be familiar with the below tools:
	1. [Git](https://git-scm.com/doc)
	2. UNIX/LINUX [command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
	3. [ROS topics](https://wiki.ros.org/Topics)
	4. [ROS services](https://wiki.ros.org/Services)

## Difficulty
Beginner

## Estimated time
It will take nearly about 15 minutes to finish the tutorial.

## Preparing your device
The tutorial will use Raspberry PI as the device.
Learn [how to prepare your Raspberry PI](/getting-started/prepare-raspberry-pi)

If you are using either a computer with ROS installed on it or any device other
than Raspberry PI, you need to execute the below commands as _root user_ at the
device's terminal prompt:
```bash
cd ~
mkdir -p catkin_ws/src
cd catkin_ws/src
git clone https://github.com/rapyuta/io_tutorials
cd ..
source /opt/ros/kinetic/setup.bash
catkin_make --pkg listener
```

## Setting up your device
To integrate the device into rapyuta.io using the [console](https://closed-beta.rapyuta.io):

1. [Create a user account](/getting-started/create-new-user) if you do not
have one yet.
2. [Add the device](/getting-started/add-new-device) to the console.
Ensure that you do not select the **Use docker compose as default runtime** checkbox
while adding the device.

## Creating the package
To create a package using the [console](https://closed-beta.rapyuta.io), follow
the steps:

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. In the **Package Name** box, type in a name for the package say _ROS publisher
   subscriber_.
4. In the **Package Version** box, enter the version of the package you are creating.
   The default value is _1.0.0_
5. Make sure **Is singleton package** is not selected.
6. Ensure **Is a bindable package** is not selected.
5. In the **Description** box, provide a brief summary of the package.
6. Click **NEXT**.

The package has two components: the **talker** running on the cloud and the
**listener** running on the device.

1. Talker component (aka _ROS publisher_)
	1. In the **Component Name** box, enter a name for the component say _talker_      
	The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
	and an underscore _ character. It must not begin with a digit.
	2. For **Component Runtime**, click **Cloud**.
	3. Ensure **Is ROS Component** is selected.
	4. Set the value of **Replicas to run the component** to a number greater than
	1 (default value) if you require to do so.
	5. In the **Executable Name** box, enter a name for the executable say
	   _talkerExecutable_      
	  The name of an executable must consist of alphabets [A-Z, a-z], digits[0-9]
	  and an underscore _ character, and must not start with a digit.
	6. For **Executable Type**, click **Git**.
	7. In the **Git repository** box, enter the url address:
	   https://github.com/rapyuta/io_tutorials
	8. In the **Command to run in the docker container** box, enter the command:
	   	```bash
	   	roslaunch talker talker.launch
	   	```

	   	Ensure you always execute the command `roslaunch` to explicitly start the
	   	[ROS Master](https://wiki.ros.org/Master) instead of running the `rosrun`
	   	command, because the ROS Master will fail to start on `rosrun`, and
	   	eventually, the deployment will fail as well.
	   ![talkerExecutable](/images/tutorials/ros-pub-sub/ros-pubsub-talker-exec-details.png?classes=border,shadow&width=50pc)
	9. The _talkerExecutable_ publishes a ROS topic, `/telemetry`    
	   To add a ROS topic, click **Add ROS topic**. In the **Name** box, enter the
	   name of the ROS topic. Select **Maximum** for **QoS**.
2. Listener component (aka _ROS subscriber_)
	1. In the **Component Name** box, type in a name for the component say _listener_     
	The name of a component must consist of alphabets [A-Z, a-z], digits [0-9]
	and an underscore _ character, and must not begin with a digit.
	2. For **Component Runtime**, click **Device**.
	3. Ensure **Is ROS Component** is selected.
	5. In the **Executable Name** box, type in a name for the executable say
	   _listenerExecutable_      
	   The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9]
       and an underscore _ character, and must not begin with a digit.
	6. Since the _ROS subscriber_ is already installed on the device, select
	   **Default** as **Executable Type**.
	7. In the **Command to run in the docker container** box, enter the command:
		```bash
		roslaunch listener listener.launch
	   	```

	   	Ensure you always execute the command `roslaunch` to explicitly start the
	   	[ROS Master](https://wiki.ros.org/Master) instead of running the `rosrun`
	   	command, because the ROS Master will fail to start on `rosrun`, and
	   	eventually, the deployment will fail as well.
	   ![listenerExecutable](/images/tutorials/ros-pub-sub/ros-pubsub-listener-exec.png?classes=border,shadow&width=50pc)
	8. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

The package takes about two to five minutes to build the source code in the git
repository into a running docker container. You may analyse the corresponding
[build logs](/core-concepts/logging/build-logs), which help debug failing builds.
A flickering yellow dot against the name of the package indicates that the
**Build Status** is **New**, while a green dot indicates that the **Build Status**
is **Complete**.

Alternately, when the **Deploy package** button is automatically enabled, it
indicates that the _ROS publisher subscriber_ package has been successfully
deployed and can be deployed.

## Deploying the package
To deploy a package using the [console](https://closed-beta.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the _ROS publisher subscriber_ package.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the deployment you are
creating say _ROS Publisher Subscriber Deployment_.
5. Since _listener_ has device runtime, you must select the device you want to
deploy the component on. Click **Refresh the list of online devices** to retrieve
an updated list of online devices.
6. Select the device from the **Select device for deploying the component**
drop-down list.
7. For the _listener_ component, ensure that **ros_workspace** and **ros_distro**
are selected.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You are redirected to the deployment details page where an yellow dot flickers
against the deployment name indicating that the deployment is in progress.
Once the dot turns green, it implies that the **DEPLOYMENT PHASE** has **Succeeded**
and the **STATUS** is **Running**.

![ROS  Publisher Subscriber Deployment](/images/tutorials/ros-pub-sub/ros-pub-sub-deployment.png?classes=border,shadow&width=50pc)

You may also analyse the corresponding [deployment logs](/core-concepts/logging/deployment-logs)
to check if everything is working OK.
