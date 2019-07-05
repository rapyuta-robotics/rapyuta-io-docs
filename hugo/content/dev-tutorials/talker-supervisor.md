---
title: "Talker Supervisor"
description:
type: dev-tutorials
date: 2019-07-04T11:53:21+05:30
pre: "h. "
weight: 450
---
The *Talker Supervisor* is a ROS package that will be deployed on a device, which has been configured based on a set of parameters.

## Learning objective
The tutorial will show you how to apply configuration parameters to a device before deploying a rapyta.io package on it.

## Prerequisites
1. Device requirements
   1. You should have access to a device (computer and/or Raspberry PI 2 or 3) with an internet connection.
   2. Ensure that the [Google Chrome](https://www.google.com/chrome) browser is installed on the computer.
   3. Ensure that the [Robot Operating System (ROS Kinetic)](https://wiki.ros.org/kinetic/Installation) is installed on the device.
2. You should be familiar with the configuration parameters concept and its corresponding quick starting guide.
3. You should be familiar with the following tools:
   1. [Git](https://git-scm.com/doc)
   2. [UNIX/Linux command terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)

## Difficulty
Beginner

## Estimated time
15 minutes

## Tutorial walkthrough
The tutorial consists of the below steps:

1. Define a configuration
2. Prepare a device
3. Add the device to rapyuta.io
4. Apply configuration to the device
5. Add a ROS package to rapyuta.io
6. Deploy package on the device
7. Verify deployment logs

## Defining configuration
You will define the configuration ***robots*** as shown in the figure below by following the instructions:

1. On the left navigation bar, click **CONFIGURATIONS**.
2. Click **ADD NEW CONFIGURATION**.
3. Provide a name say ***robots*** for the configuration in the **Configuration Name** box.
4. Click **CONFIRM**.
5. Add a new file, ***name.yaml***, below the root node ***robots***.
6. Define parameters in the ***name.yaml***, refer to the quick starting guide to learn how to define parameters.
![robots configuration](/images/tutorials/talker-supervisor/robots-configuration.png?classes=border,shadow&width=40pc)

## Preparing device
The tutorial will use Raspberry PI as the device. Learn [how to prepare the device](/getting-started/prepare-raspberry-pi).

If you are using the custom rapyuta.io image on the device, you need to execute the following command to update the ***io_tutorials*** repository at the root of your catkin workspace.

```bash
git pull https://github.com/rapyuta/io_tutorials
```

To build the package, run the below command at the root of your catkin workspace.

```bash
catkin build param_talker
```

## Adding device to rapyuta.io
While onboarding the device to rapyuta.io the environment variable **RIO_CONFIGS_DIR** is set locally on the device. It represents the location of the directory where all of the configurations that will be applied to the device are stored. The value of **RIO_CONFIGS_DIR** is set to **/opt/rapyuta/configs**
![configuration environment variable](/images/tutorials/talker-supervisor/configurations-on-device.png?classes=border,shadow&width=40pc)

{{% notice info %}}
**RIO_CONFIGS_DIR** is available to all the executables of a running deployment.
{{% /notice %}}

## Applying configuration to device
To apply an existing configuration to the device:

1. On the left navigation bar, click **DEVICES**.
2. Select the device you would want to apply the configuration to.
3. Click **Apply Configuration Parameters**.
   ![apply configuration parameters](/images/tutorials/talker-supervisor/apply-config-params.png?classes=border,shadow&width=60pc)
4. Click **CONFIRM APPLY**.
   ![confirm configuration parameters application](/images/tutorials/talker-supervisor/confirm-config-params-application.png?classes=border,shadow&width=30pc)

{{% notice note %}}
You may apply more than one configuration to a single device.
{{% /notice %}}

{{% notice info %}}
You may have to define labels for a device if you want to apply a configuration (that contains attribute and value nodes) to it. Learn how to define labels in the quick starting guide.
{{% /notice %}}

The robots configuration is stored in **RIO_CONFIGS_DIR** and its parameters file ***name.yaml*** is stored in the **robots** directory as shown in the figure below.
![robots configuration directory](/images/tutorials/talker-supervisor/content-rio-configs-dir.png?classes=border,shadow&width=40pc)

![configuration parameters file](/images/tutorials/talker-supervisor/parameter-file.png?classes=border,shadow&width=40pc)

You can use **RIO_CONFIGS_DIR** in ROS launch files for loading configurations.
![configuration environment variable in ROS launch file](/images/tutorials/talker-supervisor/launch-file-content.png?classes=border,shadow&width=50pc)

You can remotely access **RIO_CONFIGS_DIR** by [SSH-ing into the device via rapyuta.io](/getting-started/how-to-webssh/)
![SSH access](/images/tutorials/talker-supervisor/SSH-into-device.png?classes=border,shadow&width=40pc)

## Creating the package
To create the *Talker Supervisor* package, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. Provide a name for the package say `Talker Supervisor` in the **Package Name** box.
4. Make sure **Is singleton package** is ***not selected***.
5. Ensure **Is a bindable package** is ***indeed selected***.
6. In the **Description** box, provide a brief summary of the package.
7. Click **NEXT**.
8. In the **Component Name** box, enter a name for the component say `Talker`.
9. Select **Device** for **Component Runtime**.
10. Ensure **Is ROS Component** is selected.
11. In the **Executable Name** box, enter a name for the executable say `talker_executable`.
12. Select **preinstalled** for **Executable Type**.
13. Enter the following command in the **Command to run in the docker docker container** box.
```
roslaunch param_talker talker.launch
```
14. Click **NEXT** > **CONFIRM PACKAGE CREATION**.

## Deploying the package
To deploy the *Talker Supervisor* package, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the **Talker Supervisor** package.
3. Click **Deploy package**.
4. Provide a name for the deployment you are creating say `Talker Supervisor Deployment` in the **Name of deployment** box.
5. Since *Talker* has device runtime, you must select the device you want to deploy the component on. Click **Refresh the list of online devices** to retrieve an updated list of online devices.
6. Select the device from the **Select device for deploying the component** drop-down list.
7. For the **Talker** component, ensure that **ros_workspace** and **ros_distro** are selected.
8. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page. The **Talker Supervisor Deployment** is successfully running only when the green coloured bar moves to **Succeeded** and **Status:Running** point indicating that the **DEPLOYMENT PHASE** is **Succeeded** and the **STATUS** is **Running**.

![talker supervisor deployment](/images/tutorials/talker-supervisor/talker-supervisor-deployment.png?classes=border,shadow&width=40pc)

## Verifying deployment logs
You may verify the correctness of the tutorial by analysing the corresponding deployment logs by clicking on the **Historical Logs**.

The historical logs will display an output as shown in the figure below.
![Successful deployment logs](/images/tutorials/talker-supervisor/successful-logs.jpg?classes=border,shadow&width=60pc)



