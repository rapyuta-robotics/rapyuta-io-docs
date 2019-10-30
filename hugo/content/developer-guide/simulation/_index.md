---
title: "Simulation"
description:
type: developer-guide
date: 2019-10-30T15:55:25+05:30
pre: "VI. "
weight: 575
---
> A robotics simulator is a simulator used to create application for a physical robot without depending on the actual machine, thus saving cost and time. In some case, these applications can be transferred onto the physical robot (or rebuilt) without modifications. — [Wikipedia](https://en.wikipedia.org/wiki/Robotics_simulator)

During application development a robotics simulator can greatly help by cutting down the cost and time associated with managing real robots. This effect is more pronounced during initial phases of development where more code and configuration iterations happen with higher rate of trial-and-error phases.

[Gazebo](http://gazebosim.org) is popular open-source 3D robotics simulator that has been around for more than a decade, and is used by robotics developers around the world. It has an active [community](http://answers.gazebosim.org/questions) and plethora of [documentation](http://gazebosim.org/tutorials) that helps new users get on-board easily. Gazebo team maintains quite a few 3D [models](https://bitbucket.org/osrf/gazebo_models/) that are readily available for use in projects. The team also maintains [ROS packages](http://wiki.ros.org/gazebo_ros_pkgs) for applications that want to interact with Gazebo through ROS interfaces (topics and services).

rapyuta.io lets users run their simulation application with Gazebo simulator on the cloud. It provides a web interface to watch and interact with Gazebo GUI client running on the cloud. ROS interfaces provided by its ROS packages compliments rapyuta.io’s application architecture, and enhances the ways users architect their simulation and robotics applications. For instance, robotics application **running on a device** can interact with Gazebo (get model state, set physics properties, etc) **running on cloud** through ROS interfaces.

{{% notice note %}}
We only support **Gazebo version 9** as of now. Users are expected to use gazebo9 ROS packages for their corresponding ROS distros. For instance, `ros-melodic-gazebo-ros-pkgs` on ROS melodic, and `ros-kinetic-gazebo9-ros-pkgs` on ROS kinetic.
{{% /notice %}}

{{% notice note %}}
Gazebo simulation is only supported for
[Source code strategy](/developer-guide/create-software-packages/builds/#source-code-strategy) as of now.
{{% /notice %}}

{{% notice info %}}
Follow the sample walkthrough: [Turtlebot Simulation](/build-solutions/sample-walkthroughs/turtlebot-simulation/)
{{% /notice %}}