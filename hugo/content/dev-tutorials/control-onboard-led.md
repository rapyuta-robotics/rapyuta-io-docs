---
title: "Controlling on-board LED"
description:
type: core-concepts
date: 2018-11-15T10:06:24+05:30
pre: "f. "
weight: 440
---
The tutorial will teach you how to deploy a basic non-ROS package that will change
the trigger of the on-board LED (ACT/LED0) on Raspberry PI 2 or 3.

## Learning objectives
The goal is to learn how to deploy a basic non-ROS package on a
Raspberry PI 2 or 3 with docker compose runtime.

## Prerequisites
1. Device requirements
	* You should have access to a computer with an internet connection.
	* Ensure that the [Google Chrome](https://www.google.com/chrome/) browser
	  is installed on the computer.
	* Raspberry PI 2 or 3
2. You should be familiar with the [core concepts](/core-concepts) of rapyuta.io
3. You should be familiar with
   [Docker image](https://docs.docker.com/v17.09/engine/userguide/storagedriver/imagesandcontainers/)
   concept.

## Difficulty
Beginner

## Estimated time
15 minutes

## Preparing your device
Learn how to [prepare your Raspberry PI](/getting-started/prepare-raspberry-pi).

## Setting up Raspberry PI
To integrate the device into [rapyuta.io console](https://console.rapyuta.io):

1. [Create a user account](/getting-started/create-new-user) if you do not
   have one yet.
2. [Add the device](/getting-started/add-new-device) to the console.
   Ensure that you select the **Use docker compose as default runtime** checkbox
   while adding the device.

## Creating the package
To create *led_trigger* package, follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Click **ADD NEW PACKAGE**.
3. In the **Package Name** box, enter the name for the package as `led_trigger`
4. In the **Package Version** box, type in the version of the package. By default, it is set to _1.0.0_
5. In the **Description** box, enter a brief summary of the package.
6. Click **NEXT**.
7. In the **Component Name** box, enter a name for the component say `led_trigger`
{{% notice info %}}
The name of a component must consist of alphabets [A-Z, a-z], digits [0-9], hyphen -
and an underscore _ character, and must not start with a digit.
{{% /notice %}}
8. Select **Device** as **Component Runtime**.
9.  Deselect **Is ROS Component** checkbox.
10. Select **arm32v7** as **Architecture**.
11. In the **Executable Name** box, type in a name for the executable say `led_trigger_executable`
{{% notice info %}}
The name of an executable must consist of alphabets [A-Z, a-z], digits [0-9], hyphen -
and an underscore _ character, and must not start with a digit.
{{% /notice %}}
12. Click **Docker** for **Executable Type** as the executable is a docker image.
13. In the **Docker image** box, specify the docker image: `rrdockerhub/led-trigger-arm32v7`
14. In the **Command to run in the docker container** box, enter the command `led_trigger led0 heartbeat`
15.  Deselect **Run command from bash shell**.
16.  Click **NEXT** > **CONFIRM PACKAGE CREATION**.

A flickering yellow dot next to the package name indicates that the **Build Status**
is **New**, while a green dot indicates that the **Build Status** is **Complete**.

Additionally, you may verify if the package is built successfully and is ready
to be deployed by clicking to see if the **Deploy package** button is enabled.

## Deploying the package
To deploy a package from the [rapyuta.io console](https://console.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **CATALOG**.
2. Select the ***led_trigger*** package that you just created.
3. Click **Deploy package**.
4. In the **Name of deployment** box, enter a name for the deployment say `LED Trigger Deployment`
5. Since *led_trigger* has device runtime, you must select the device you want to
   deploy the component on. Click **Refresh the list of online devices** to retrieve
   an updated list of online devices.
6. Select the device from the **Select device for deploying the component**
   drop-down list.
7. Click **CREATE DEPLOYMENT** > **Confirm**.

You will be redirected to the newly created deployment's **Details** page.
The _LED Trigger Deployment_ is successfully running only when the green
coloured bar moves to **Succeeded** and **Status:Running** point indicating that the
**DEPLOYMENT PHASE** is **Succeeded** and the **STATUS** is **Running**.

You may also analyse the corresponding [deployment logs](/core-concepts/logging/deployment-logs)
to check if everything is working good.

To verify that everything is working correctly, you should observe the trigger
of the on-board LED(ACT/LED0) on Raspberry PI 2 or 3 switch to heartbeat.

![Onboard LED](/images/core-concepts/device-management/control-onboard-led.gif?classes=border,shadow&width=30pc)
