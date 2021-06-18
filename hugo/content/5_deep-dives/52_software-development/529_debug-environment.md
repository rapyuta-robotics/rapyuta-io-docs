---
title: "Cloud Debug Environment"
description:
type: developer-guide
date: 2019-10-25T12:34:38+05:30
# pre: "3. "
weight: 529
tags:
    - Deep Dive
---
The rapyuta.io provides you a debug environment to test or modify  ROS and non-ROS applications/components running with cloud runtime in a deployment. The debug environment provides you a graphical user interface to visualize your application and helps you to debug.

For ROS components/applications, the following capabilities are supported in the debug environment.
* IDE
* Shell
* RVIZ
* RQT

| Capability | Description |
| ------ | ----------- |
| IDE |  A browser based VS Code editor that uses the open source tool https://github.com/cdr/code-server.|
| Shell | A GUI based Shell that is useful for running any command or tool. It can also be used to open RQT environment with custom parameters.|
| RQT | A software framework of ROS for implementing the various GUI tools in the form of plugins. For more information, [click here](http://wiki.ros.org/rqt) |
| RVIZ | A 3D visualizing tool for sensor data and state information from ROS. For more information, [click here](http://wiki.ros.org/rviz)|

You can run a debug environment to any cloud runtime component of a running deployment. This can be very useful to develop or debug applications running on the cloud.  

{{%notice note%}}
The debug environment installs openssh-server in your running deployment with one time shared ssh-rsa keys thus making it secure, we install other required utilities like  rviz/rqt if required based on capability selected.
{{%/notice%}}

{{%notice note%}}
The debug environment uses 1 CPU core, and contributes to the cloud cost only for the time the environment is connected. For example, if your deployment has a cloud runtime thet uses 4 cores, and you attach a debug environment that uses 1 core for 1 hour. You will be charged 0.10(cloud cost) *1 core * 1 hour = 0.10USD for the debug environment.
{{%/notice%}}

{{%notice note%}}
The rapyuta.io platform supports connecting a debug environment with the following build recipe types.

* Catkin builds: Debug environment is fully supported for docker images build with rapyuta.io build. You can modify your code via IDE and run restart-deployment-executable command to restart your executable process.

* Docker build: Ubuntu/Alpine based docker images are supported, please reach out to us if you have any other operating system, or you are facing any other issues. If you will need to restart your application after making code changes, make sure your process is running under supervisor or s6-overlay so that container doesn’t die.
{{%/notice%}}