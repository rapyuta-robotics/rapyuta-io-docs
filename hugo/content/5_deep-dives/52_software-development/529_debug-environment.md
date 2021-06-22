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
The rapyuta.io provides you a debug environment to debug your application, modify your code, and provides ROS visualization tools. The debug environment also provides you a graphical Shell interface that you can use to run any custom command to open a graphical user interface.

The debug environment allows you to select the following capabilities.

* **IDE**: A browser-based [VS Code editor](https://github.com/cdr/code-server) that uses the open-source tool, you can use the editor to modify your source code, and also provides you a terminal to push your changes to the source version control like git.

* **Shell**: A GUI-based Shell that is useful for running any command or tool. You can execute any command with a custom variable, for example, rviz -d `rospack find custompkg`/rviz/path_planning.rviz. It can also be used to open RQT tool with custom parameters.

* **RVIZ**:  A 3D visualizing tool for sensor data and state information from ROS. It can capture various data from the sensors of a robot and play the captured data. For more information, [click here](http://wiki.ros.org/rviz).  This capability is applicable only for ROS component.

* **RQT**: A software framework of ROS for implementing the various GUI tools in the form of plugins. The framework also allows you to write custom plugins that can be useful to visualize your robot. For more information, [click here](http://wiki.ros.org/rqt). This capability is applicable only for ROS component.

You can run a debug environment to any cloud runtime component of a running deployment. This can be very useful to develop or debug applications running on the cloud.  

#### How does the debug environment work?

The debug environment installs openssh-server in your running deployment with one-time shared ssh-rsa keys thus making it secure, we install other required utilities like  rviz/rqt if required based on capability selected.

##### CPU Usage of a Debug Environment

The debug environment uses 1 CPU core, and contributes to the cloud cost only for the time the environment is connected. Creating a debug environment to a running deployment for 1 hour will be charged as 0.10(cloud cost) *1 core * 1 hour = 0.10USD for the debug environment.


##### Docker Image Support for Debug Environment

The rapyuta.io platform supports connecting a debug environment with the following types of docker images.

* Docker image built using [Catkin build recipe](/5_deep-dives/52_software-development/527_build-recipe/#catkin-recipe): Debug environment is fully supported for docker images build with rapyuta.io build. You can modify your code via IDE and run restart-deployment-executable command to restart your executable process.

* Docker image built using [docker recipe](/5_deep-dives/52_software-development/527_build-recipe/#docker-recipe) or [custom docker image](): Ubuntu/Alpine based docker images are supported, please reach out to us if you have any other operating system, or you are facing any other issues. If you want to modify your code via IDE, and restart your application, make sure your process is running under [supervisor](http://supervisord.org/) or [s6-overlay](https://github.com/just-containers/s6-overlay) so that the container doesn’t die after you restart your executable. After that, you can use supervisor restart to restart your executable process.

{{%notice note%}}
Since the deployment is already running, and if no persistent storage is attached to your deployment, updating or restarting your deployment will lead to losing your changes. So ensure that you push your changes to your source version control system carefully.

{{%/notice%}}

## Related Links
* [Creating a  Debug Environment](/3_how-tos/33_software-development/336_create-debug-environment/)