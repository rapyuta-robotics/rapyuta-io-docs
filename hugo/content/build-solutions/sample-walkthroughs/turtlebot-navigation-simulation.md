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
source catkin_ws/devel/setup.bash
```

```bash
catkin build
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

1. On the left navigation bar, click CATALOG.
2. Click ADD NEW PACKAGE.
3. The name of the package: Navigation Application
4. Make sure Is a singleton package is not selected.
5. Ensure Is a bindable package is selected.
6. The version of the package is 1.0.0
7. The purpose of the package is to Controlled navigation of turtlebot3
8. Click NEXT.
9. The name of the component: navigate_component
10. The runtime of the component is Device.
11. Ensure Is ROS Component is selected.
12. Choose Melodic for ROS Version.
13. Set Restart Policy to No.
14. The name of the executable: navigation_exec
15. The Executable Type is Default.
16. In the Command to run in the docker container box, enter the command: `roslaunch io_gazebo_turtlebot_bringup app.launch`
17. 