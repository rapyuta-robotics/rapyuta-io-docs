---
title: "Turtlebot Navigation Simulation"
description:
type: build-solutions
date: 2019-11-20T14:46:28+05:30
pre: "8. "
weight: 651
---
## Learning Objective
The walkthrough demonstrates a navigation application that controls
turtlebot3 in a Gazebo simulation on rapyuta.io

It shows the separation of launch files into application and simulation.
It is recommended to run the simulation on the cloud and the
application is run on either a computer or an instance of the cloud.

## Prerequisites

1. The CPU architecture of the device is **AMD64**
2. Install **ROS Melodic** on the device.
3. Install **catkin-tools** package on the device.
4. Install Google Chrome web browser on a computer.
5. Familiarity with tools like git, UNIX/LINUX command terminal.
6. ***Optional***: If you want to run your applications with Gazebo on rapyuta.io in future, it is recommended that you understand ROS launch system concepts and ROS navigation stack structure. It will help you understand the usage better.

## Difficulty
Intermediate

## Estimated Time
25 minutes

## Background
The package, ***io_gazebo_turtlebot_bringup***, includes files
that start a demo application for navigating a turtlebot3 model
in a Gazebo simulation. These files are:

* **app.launch**    
  * loads common configuration parameters that are shared between
    ***app.launch*** and ***sim.launch*** files by including
    ***common.launch*** file if ***load_common_param*** variable is
    true.
  * includes ***demo_app.launch*** file.
  * loads ***io_turtle_gazebo_navigation.launch*** file.
* **sim.launch**    
  * loads common configuration parameters that are shared between
    ***app.launch*** and ***sim.launch*** files by including ***common.launch***
    file if ***load_common_param*** variable is true.
  * loads Gazebo simulation of turtlebot3 by launching
    ***io_gazebo_turtlebot_gazebo.launch*** file.
* **common.launch**    
  * loads common configuration parameters that are shared between
    ***app.launch*** and ***sim.launch*** files by including ***common_config.yaml***
    file. The shared configuration parameters are the *initial
    location of turtlebot3* and *use_sim_time*.
  * robot description used in ***app.launch*** and ***sim.launch*** files.
* **bringup.launch**    
  * gets ***sim.launch*** up and running.
  * gets ***app.launch*** up and running.
  * the variable, ***load_common_param***, is set to true only at
    one place while launching ***sim.launch*** files so as to load common configurations shared between
    ***app.launch*** and ***sim.launch*** files only once.

## Prepare Device
On the device's command line terminal, execute the following commands
in sequence to set up a catkin workspace, install ROS dependencies
and build the catkin workspace.

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
git clone https://github.com/rapyuta-robotics/io_tutorials.git
```

```bash
sudo rosdep init
```

```bash
sudo rosdep update
```

```bash
rosdep install --from-paths --ignore-src . -y
```

```bash
cd ../
```

```bash
catkin build
```

```bash
source catkin_ws/devel/setup.bash
```

## Onboard Device

1. On the left navigation bar, click DEVICES.
2. Click ADD NEW DEVICE.
3. The name of the device is Turtlebot3 Navigation Simulation Device.
4. Provide the absolute path of the catkin workspace in the ROS Catkin Workspace box. In this case, the workspace will be /home/rapyuta/catkin_ws
5. Define the purpose of the device in the Description box.
6. Click CONTINUE.
7. Click COPY to copy the generated device token.
8. Execute the token at the device's terminal so as to set up rapyuta.io's device agent on the device.

## Create Packages
You will create and add two packages, namely, Navigation Application and Turtlebot3 Simulation.

#### Navigation Application Package

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. The name of the package: `Navigation Application`
4. Make sure **Is a singleton package** is ***not selected***.
5. Ensure **Is a bindable package** is ***selected***.
6. The version of the package is `1.0.0`
7. The purpose of the package is to `Controlled navigation of turtlebot3`
8. Click **NEXT**.
9. The name of the component: `navigate_component`
10. The runtime of the component is **Device**.
11. Ensure **Is ROS Component** is selected.
12. Choose **Melodic** for **ROS Version**.
13. Set **Restart Policy** to **No**.
14. The name of the executable: `navigation_executable`
15. The **Executable Type** is **Default**.
16. In the **Command to run in the docker container** box, enter the command: `roslaunch io_gazebo_turtlebot_bringup app.launch`
17. Click on **Add ROS topic**. The name of the ROS topic is `/cmd_vel`, and its **QoS** is set to **Low**.
18. Add a configuration parameter by clicking on **Add Parameter**. The name of the parameter is `SPAWN_TURTLEBOT_ROBOT`. The **Default** value is `true`.
19.  Click **NEXT** > **CONFIRM PACKAGE CREATION**.

#### Simulation Package

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. The name of the package: `Simulation`
4. Make sure **Is a singleton package** is ***not selected***.
5. Ensure **Is a bindable package** is ***selected***.
6. The version of the package is `1.0.0`
7. The purpose of the package is to `Run simulation of turtlebot3`
8. Click **NEXT**.
9. The name of the component: `simulate_component`
10. The runtime of the component is **Cloud**.
11. Ensure **Is ROS Component** is selected.
12. Choose **Melodic** for **ROS Version**.
13. The number of **Replicas to run the component** is **1**
14. The name of the executable: `simulation_executable`
15. The **Executable Type** is **Git**.
16. The **Git Repository** is `https://github.com/rapyuta-robotics/io_tutorials`
17. The context directory: `gazebo_examples`
18. In the **Command to run in the docker container** box, enter the command: `roslaunch io_gazebo_turtlebot_bringup sim.launch gui:=true`
19. Select **Simulation** option.
20. Set **Resource Limit** to **Med:2 cpu cores, 8 GiB memory**
{{% notice warning %}}
For simulation, the resource limit should either be **Med** or **High**. Simulation has issues with **Low** resource limits.
{{% /notice %}}
21. Add the following **ROS topics**:
    1.  **Name**: `/joint_states`, **QoS**: Low
    2.  **Name**: `/tf`, **QoS**: Low
    3.  **Name**: `/scan`, **QoS**: Low
    4.  **Name**: `/odom`, **QoS**: Low
22. Click **NEXT**.
23. Under **Inbound ROS Interfaces**, Click on **Add Topic** to add the ROS topic `/cmd_vel` as an inbound ROS topic.
24. Click **CONFIRM PACKAGE CREATION**.

## Deploy Packages

You will first deploy the Simulation package, and then the Navigation Application package.

#### Deploy Simulation Package

1. On the left navigation bar, click **CATALOG**.
2. Select **Simulation** package.
3. Click **Deploy package**.
4. The name of deployment: `SIMULATION`
5. Enter the value for **VNC_PASSWORD**
6. Click **CREATE DEPLOYMENT** > **Confirm**

You will be redirected to the **Details** tab of the newly
created deployment. The **SIMULATION** is successfully running
if the progress bar reaches **Succeeded** and the status is **Running**.

#### Deploy Navigation Application Package

1. On the left navigation bar, click **CATALOG**.
2. Select **Navigation Application** package.
3. Click **Deploy package**.
4. The name of deployment: **NAVIGATION**
5. Select **Turtlebot3 Navigation Simulation Device** as the device for deploying the **navigate_component** on.
6. Check if the **SPAWN_TURTLEBOT_ROBOT** parameter has the value *true*.
7. Check if the **ros_wokspace** and **ros_distro** device configuration variables have values */home/rapyuta/catkin_ws* and *melodic* respectively.
8. Click **Add dependency** to add **SIMULATION** deployment as a dependent deployment.
9. Click **CREATE DEPLOYMENT** > **Confirm**

You can verify if **NAVIGATION APPLICATION** is running successfully by
checking if the progress bar reaches **Succeeded** and status is
**Running**.

## Result

1. On the **Details** tab of **SIMULATION** deployment, copy the value of the network endpoint ***vnc***.
2. Paste the copied URL address in the address bar of the web browser and press Enter.
3. Enter the value of ***VNC_PASSWORD***, which you provided while deploying the package, when prompted.

## Advanced Tips
If you want to run your software with Gazebo on rapyuta.io,

Time synchronization: Since the set up runs two ROS Masters-in cloud with Gazebo and on computer with navigation nodes, these two system clocks need to be in sync. This is achieved by /clock ROS topic, which is published by Gazebo.

* /use_sim_time is enabled in launch files to use /clock topic
* rospy.wait_for_message(/clock, Time) on line 13 in demo_app.py is the waiting /clock arrived in sync. Otherwise jump in time may happen. 

