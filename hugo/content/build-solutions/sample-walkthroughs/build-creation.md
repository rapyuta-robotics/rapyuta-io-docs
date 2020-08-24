---
title: "Build Creation"
description:
type: build-solutions
date: 2019-10-24T13:46:19+05:30
pre: "10. "
weight: 652
---

## Learning Objective
The tutorial will show you how to create a build.

## Prerequisites

1. Install the [Chrome web browser](https://www.google.com/chrome/) on a computer.
2. You should be familiar with the [developer guide](https://userdocs.rapyuta.io/) of rapyuta.io

## Difficulty
Easy

## Estimated Time
20 minutes

## Creating Build by Catkin recipe 
Follow below steps to create the build by catkin recipe : 

1. On the left navigation bar, click **BUILDS**
2. Click on **ADD NEW BUILD**
3. In the Build Name box, enter a name for the build
4. In the Git repository box, enter the url address of git for example : https://github.com/rapyuta/io_tutorials and select Build Recipe as Catkin.
5. In the Context directory box, enter the name of the parent directory that contains the dockerfile.
6. If it is a **Private Git**, then select **Private Git** and select the applicable **Credentials** from the drop-down list. 
You will need to [create a source secret](/developer-guide/create-software-packages/secrets/sourcecode-repository/#creating-source-secret), 
if already not created.
![goo](/images/tutorials/build-creation/catkin-recipe.png?classes=border,shadow&width=40pc)
7. Click on next, select appropriate **Architecture**, **ROS Version** and select the **Has Simulation** option if applicable.
8. Click on **Add Parameter** against **CATKIN BUILD PARAMETERS** to add any valid catkin parameters,
 you can use this to include/exclude packages from being built.
8. Click on next, the build will be created.

![goo](/images/tutorials/build-creation/catkin-recipe-sim-ros-arch.png?classes=border,shadow&width=40pc)

You can see the progress of the build, by clicking on the Build created in the **Builds** page. 
Click on **SHOW MORE** to get more details about the build, it will take you to the **Details** tab of the build.

![goo](/images/tutorials/build-creation/catkin-recipe-build-details.png?classes=border,shadow&width=30pc)


## Creating Build by Docker recipe 
Follow below steps to create the build by docker recipe : 

1. On the left navigation bar, click **BUILDS**
2. Click on **ADD NEW BUILD**
3. In the Build Name box, enter a name for the build 
4. In the Git repository box, enter the url address of git for example : https://github.com/rapyuta/io_tutorials and select Build Recipe as Docker.
5. In the Context directory box, enter the name of the parent directory that contains the dockerfile. 
6. If it is a **Private Git**, then select **Private Git** option 
![goo](/images/tutorials/build-creation/docker-recipe.png?classes=border,shadow&width=40pc)
7. Click on next, select appropriate **Architecture** and Dockerfile path
	1. if it has ROS components then select **Has ROS Components** , select **ROS Version** and select the Has Simulation option if applicable.
	2. if it has no ROS components, click on next
8. Click on next, the build will be created.

![goo](/images/tutorials/build-creation/docker-recipe-ros-arch.png?classes=border,shadow&width=40pc)

You can see the progress of the build, by clicking on the Build created in the **Builds** page. 
Click on **SHOW MORE** to get more details about the build, it will take you to the **Details** tab of the build.


## Deleting the build
Follow below steps to delete the build :

1. On the left navigation bar, click **BUILDS**. It will display all the builds in a given project.
2. Select the build which you want to delete. 
3. Click on **Delete**.
4. Confirm on the build deletion message.


