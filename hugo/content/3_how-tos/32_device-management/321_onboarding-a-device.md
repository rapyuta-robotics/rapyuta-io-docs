---

title: "On-boarding a Device"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 321
versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - How to
---

### Pre-requisites

The following is the list of requirements for registering devices
on rapyuta.io

* Mandatory
   * Python >=2.7.8, <3
   * [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) (Xenial Xerus)
 or [Ubuntu 18.04](http://releases.ubuntu.com/18.04/) (Bionic Beaver)
* Optional
    * [curl](https://curl.haxx.se/)
    * Robot Operating System (ROS)
    * [Kinetic Kame](http://wiki.ros.org/kinetic) or [Melodic Morenia](http://wiki.ros.org/melodic)

Ubuntu(16.04 and 18.04) by default resolves the hostname to localhost. If you do change this behavior on the host OS, roscore **will** not be able to start. A simple way to check if roscore can be started is to do `nslookup $(hostname)` if it returns a DNS record you are probably good to go.

{{%notice note%}}
As Kinetic has reached the EOL, it is suggested to select **Melodic** as the ROS version.
{{%/notice%}}

### Register a New Device
To register a new device on rapyuta.io, follow the below steps:

1. On the left navigation bar, click **Devices>All Devices**.
2. Click **ADD NEW DEVICE**.
3. Type a name for the device in the **Device Name** box.
4. You can choose to build the application's source code inside the device or outside it.
   1. If the application source code is already built locally in the device, do ***not*** select **Use docker compose as default runtime** option.

      If you have not selected **Use docker compose as default runtime** option, provide the absolute path of your catkin workspace as the **ROS Catkin Workspace** value. If you are using a custom rapyuta.io image on the device, your catkin workspace will be `/home/rapyuta/catkin_ws` where *catkin_ws* is the name of the catkin workspace. Otherwise, you will have a different absolute path for your catkin workspace.
     ![Device Details](/images/getting-started/add-new-device/device-details.png?classes=border,shadow&width=40pc)
   {{% notice info %}}
   The **ROS Catkin Workspace** can be empty, and you can provide this value on the device's **Details** page.
   {{% /notice %}}
    2. If you want to build the application source code in the rapyuta.io platform and push the build to the device remotely, select **Use docker compose as default runtime** option. On selecting this option, you will be asked to choose the version of ROS installed on the device. You can either select **Kinetic** or **Melodic** based on the ROS version of your device.</br>
   ![Select ROS version](/images/getting-started/add-new-device/select-ROS-version.png?classes=border,shadow&width=40pc)
   3. If you have selected **Use docker compose as default runtime** option, provide the path to store the ROS bag files on the device in the **Rosbag mount path** field. By default, the path is `/opt/rapyuta/volumes/rosbag`.
   {{% notice note %}}
After you onboard a device, you cannot change the mount path to store the ROS bag files. If you want to change the mount path after adding the device, you can re-onboard the device and change the mount path.
   {{% /notice %}}

6. In the **Description** box, enter a summary of the device.
7. Click **CONTINUE**.
8.  To copy the generated token (a unique device setup link), click **COPY**.    
   You must copy the token before it expires in *ten* minutes. To generate
   the token again, click **Token** on the **Devices** page.
   ![Device Token](/images/getting-started/add-new-device/device-token.png?classes=border,shadow&width=40pc)


**What to do next:** Adding a device to the rapyuta.io platform does not mean that the device is connected. To connect your device to the platform, you must set up the device.

### Setting Up Your Device

Copy, paste, and run the device's token in the command terminal
of the device. The token sets up the rapyuta.io device client on
the device. Sometimes, you may need root permission to execute
the token on the device.

>  You may access the command terminal of the device physically using a screen and keyboard, through SSH, or any other serial TTY method available.



If the device is set up successfully, you should see the following output
on the command terminal:

```bash

Initializing the Rapyuta Platform

########(100%)

Successfully installed!

root@ubuntu:/home/ubuntu#

```

The process of installing a device consists of different stages towards
successful completion of onboarding the device onto rapyuta.io.
These stages are described below:

* Checking and installing required python or apt packages.
* Installing ROS messages collector package.
* Installing communication package.
* Installing metrics collector package.
* Installing monitoring package.
* Pulling ROS base image.



Not all devices go through all of the stages in the device initialization
process. For example, while devices with docker-compose option set will
have ROS base image installed on them, those with preinstalled runtime
will have monitoring package installed on them.





In case you face issues onboarding the device. Please refer to the [section on failure codes]({{< ref "/6_troubleshoot/610_device-onboarding-failure-codes.md" >}}) to help you troubleshoot.




When the device is successfully registered, you will see a
<span style="color:green">*green*</span> dot next to the
device's name, which indicates that the device is online.


![Registered Status of Device](/images/getting-started/add-new-device/demo-device.png?classes=border,shadow&width=40pc)


## Related Links
* [About Devices](/1_understanding-rio/12_core-concepts/#device-management)
* [About Docker Runtime](/5_deep-dives/51_managing-devices/511_device-runtime/#dockercompose-runtime-for-device)