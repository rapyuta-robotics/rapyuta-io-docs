---
title: "Using a Debug Environment"
description:
type: build-solutions
date: 2019-10-24T13:47:13+05:30
# pre: "b. "
weight: 642
tags:
    - Tutorials
---
## Learning objectives
The tutorial will show you how to create and use a debug environment and use IDE capability to modify your executable.

## Estimated time
25 minutes

### Creating the **io-tutorial** build
 
To create the build, follow the below steps. Skip the following steps if you have already created an *io-tutorials* build earlier.

1. On the left navigation bar, click **Development>Builds**.
2. Click on **ADD NEW BUILD**
3. In the Build Name box, enter a name for the build, for example, `io-tutorials`
4. In the Git repository box, enter the URL address: `https://github.com/rapyuta/io_tutorials`, select **Build Recipe** as Catkin and click **Next**.
5. Select the ROS version as **Melodic** .
5. Go to the next step and click on next, the build will be created.

The build takes about two to five minutes to build the source code in the *io_tutorials* repository into a running docker container. You may analyze the corresponding build logs, which helps in debugging failed builds. After you create the build, create the *Talker* package.

### Create Talker Package

1. On the left navigation bar, click **Development>Catalog**.
2. Click **ADD PACKAGE**.
3. In the **Package Name** box, type in a name for the package like `Talker`.
4. In the **Package Verison** box, enter the version of the package you are creating. The default value is *1.0.0*
5. Make sure **Is singleton package** is ***not selected***.
6. Ensure **Is bindable package** is ***selected***.
7. In the **Description** box, explain what the package is about,
   for instance, the description of this package is `ROS Publisher`.
8. Click **NEXT**.
9.  In the **Component Name** box, enter a name for the component, for example, `TALKER`.
10. Select **Cloud** for **Component Runtime**.
11. Ensure **Is ROS Component** is selected.
12. Select **Melodic** for **ROS Version**.
13. The default value of **Replicas to run the component** is set to 1
14. In the **Executable Name** box, enter a name for an executable, for example, `talker_executable`.
15. Click **Development>Builds** for **Executable Type**.
16. Select **io-tutorials** builds from the dropdown
17. In the **Command to run in the docker container** box, enter the command:
    `roslaunch talker talker.launch`
18. The ***talker_executable*** publishes a ROS topic `/telemetry`.
    To add a ROS topic, click **Add ROS topic**. In the **Name** box,
    type in the ROS topic. Select **Maximum** as the value for **QoS**.
19. Click **NEXT** > **CONFIRM PACKAGE CREATION**.


### Create Cloud Routed Network

Follow these steps to create a cloud routed network.

1. On the left navigation bar, click **Networking>Networks**.
2. Click **ADD NEW NETWORK** and select **Routed Network**.
3. Enter a name for routed network. For this tutorial, type `routed_network_1` as the routed network.
4. Select **ROS Distro** as Melodic.
5. Select the **Runtime** as **Cloud**.
6. Click **CONTINUE**.

Deploying a routed network is identical to deploying any other package and has identical corresponding phases and errors.
Once the routed network deployment succeeds, other ROS package deployments can bind to it and communicate.

## Deploying the package
1. Click **Development>Catalog** > and select **Talker** package.
2. Click **Deploy package**.
2. In the **Name of deployment** box, enter a name for the deployment
   , for example, `dep11`
3. Click **Add** next to the **Routed Network** field.
4. From the **Network** drop-down menu, select `routed_network_1` as the routed network.
5. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the **Details** tab of the newly created deployment. The package is successfully deployed when the green colored bar moves from
**In progress** to **Succeeded** indicating that the **DEPLOYMENT PHASE** has **Succeeded**
and the **STATUS** is **Running**.


## Creating a Debug Environment

1. In the deployment details page, click the **Debug Environment** drop-down menu, select the component and then select the executable for which you want to create a debug environment. The **Create New Debug Environment** page is displayed.
  

2. In the **Name** field, type `debugenv-1`as the name for the debug environment.
{{%notice note%}}
The same debug environment with different names throws an error in the same project.
{{%/notice%}}

3. Click the following capabilities.

    * **IDE** 
    * **Shell**
    * **Rviz**
    * **RQT**

4. Click **Connect**. It takes few minutes and the debug environment is created.

  {{%notice note%}}
  After the debug environment is created, copy the **Access Key**. You will need the access key as the password to access any capability of this debug environment.

  {{% /notice%}}


### Debugging Capability using IDE

After you have created a debug environment, click the environment to debug your application. You can use one or more of the following capabilities to debug your executable. 

To modify the code using IDE capability, do the following.

1. After your debug environment is created, navigate to the debug environment by clicking the **Debug environment** drop-down.

2. Click **IDE** as the capability.

3. Enter the access key as the password when prompted. An online VS code editor is displayed. The browser-based editor allows you to do the following.

![IDE](/images/core-concepts/deployments/debug-ide.png?classes=border,shadow&width=50pc)  

4.  By default, the IDE opens */* of your deployment, navigate to the file that you want to edit. In this case, */opt/catkin_ws/src/talk/talker/talker.py* and change the source code to `welcome to rapyuta.io` in the *talker.py* file.

5. Open a terminal from the IDE, click the hamburger menu in the VS code editor and click **Terminal > New Terminal**.

6. After you make the required changes, to restart your executable using catkin build recipe, type `restart-deployment-executable` in the terminal. It takes few minutes to restart and the updated changes are reflected in the deployment.

![IDE](/images/core-concepts/deployments/update-ide.png?classes=border,shadow&width=50pc) 

7. If you want to add the changes to your version control system like git, do the following.

    a. Install git by running `apt-get install git` in the terminal if you are using a ubuntu machine or use `apk add git` if you are using alpine.

    b. Run the git commands to add and commit your changes.

    c. Push your changes to the version control system. 

{{%notice note%}}
When you try to push your changes through the terminal, it prompts you to enter your git authorization token. Ensure that you have the token handy while trying to push your changes.
{{%/notice%}}


