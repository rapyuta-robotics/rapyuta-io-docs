---
title: "Onboarding"
description:
type: developer-guide
date: 2019-10-24T11:47:21+05:30
pre: "3. "
weight: 240
---
To register a new device on rapyuta.io, follow the below steps:

1. On the left navigation bar, click **DEVICES**.
2. Click **ADD NEW DEVICE**.
3. Type a name for the device in the **Device Name** box.
4. You can choose to build the application's source code inside the device or outside it.
   1. If the application source code is already built locally in the device, do ***not*** select **Use docker compose as default runtime** option.

      If you have not selected **Use docker compose as default runtime** option, provide the absolute path of your catkin workspace as the **ROS Catkin Workspace** value. If you are using custom rapyuta.io image on the device, your catkin workspace will be `/home/rapyuta/catkin_ws` where *catkin_ws* is the name of the catkin workspace. Otherwise, you will have a different absolute path for your catkin workspace.
     ![Device Details](/images/getting-started/add-new-device/device-details.png?classes=border,shadow&width=40pc)
   {{% notice info %}}
   The **ROS Catkin Workspace** can be empty, and you can provide this value on the device's **Details** page.
   {{% /notice %}}
    2. If you want to build the application source code in rapyuta.io platform and push the build to the device remotely, select **Use docker compose as default runtime** option. On selecting this option, you will be asked to choose the version of ROS installed on the device. You can either select **Kinetic** or **Melodic** based on the ROS version of your device.</br>
   ![Select ROS version](/images/getting-started/add-new-device/select-ROS-version.png?classes=border,shadow&width=40pc)
   3. If you have selected **Use docker compose as default runtime** option, provide the path to store the ROS bag files on the device in the **Rosbag mount path** field. By default, the path is `/opt/rapyuta/volumes/rosbag`.
   {{% notice note %}}
After you register a device, you cannot change the mount path to store the ROS bag files. If you want to change the mount path after adding the device, you can re-onboard the device and change the mount path.
   {{% /notice %}}

6. In the **Description** box, enter a brief summary of the device.
7. Click **CONTINUE**.
8.  To copy the generated token (a unique device setup link), click **COPY**.    
   You must copy the token before it expires in *ten* minutes. To generate
   the token again, click **Token** on the **Devices** page.
   ![Device Token](/images/getting-started/add-new-device/device-token.png?classes=border,shadow&width=40pc)