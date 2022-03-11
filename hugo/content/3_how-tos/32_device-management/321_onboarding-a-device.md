---

title: "On-boarding a Device"
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

* Mandatory
   * Python >=2.7.8, < 3 or Python >=3.6, <=3.9
   * [Ubuntu 16.04](http://releases.ubuntu.com/16.04/) (Xenial Xerus)
   * [Ubuntu 18.04](http://releases.ubuntu.com/18.04/) (Bionic Beaver) or [Ubuntu 20.04](https://releases.ubuntu.com/20.04/) (Focal Fossa)
* Optional
    * [curl](https://curl.haxx.se/)
    * Robot Operating System (ROS)
    * [Kinetic Kame](http://wiki.ros.org/kinetic), [Melodic Morenia](http://wiki.ros.org/melodic), or [Noetic Ninjemys](http://wiki.ros.org/noetic)

{{%notice note%}}
 * By default, Ubuntu(16.04 and 18.04) resolves the hostname to localhost. If this is changed on the host OS, roscore will not start. 
 * To check if roscore starts, do `nslookup $(hostname)`, this should return a DNS record.
{{%/notice%}}

### Register a New Device
To register a new device on rapyuta.io:

1. In the left navigation bar, click **Devices > All Devices**.
2. Click **ADD NEW DEVICE** and enter:

   | Field | Description |
   | ------- | ---------- |
   | Device Name | Enter a name for the device. |
   | Use docker compose as default runtime | You can choose to build the application's source code inside the device or outside it. <br> If you want to build the application's source code in rapyuta.io platform and push the build to the device remotely, select this option and specify the **ROS version** and **ROS mount path**. <br> If the application's source code is locally built on the device, deselect this option and specify the **ROS Catkin Workspace** {{%notice note%}}
 * By default, Ubuntu(16.04 and 18.04) resolves the hostname to localhost. If this is changed on the host OS, roscore will not start. 
 * To check if roscore starts, do `nslookup $(hostname)`, this should return a DNS record.
{{%/notice%}} |
   | ROS version | From the drop-down, select the version based on the ROS version of your device. |
   | Rosbag mount path | Enter the path to store the ROS bag files on the device. The default path is `/opt/rapyuta/volumes/rosbag`. <br> **Note:** After you onboard a device, you cannot change the mount path to store the ROS bag files. If you want to change the mount path after adding the device, you can re-onboard the device and change the mount path. |
   | ROS Catkin Workspace | Enter the absolute path of your catkin workspace. If you are using a custom rapyuta.io image on the device, your catkin workspace will be `/home/rapyuta/catkin_ws` where *catkin_ws* is the name of the catkin workspace. Otherwise, you will have a different absolute path for your catkin workspace. <br> **Note:**  The **ROS Catkin Workspace** value can be empty, and you can provide this value on the device's **Details** page. |
   | Description | Enter a summary of the device. |
   | Python Version | Select the device's python version from the drop-down menu. |

3. Click **CONTINUE**.
4. Click **COPY**, to copy the generated token (a unique device setup link).  
   {{%notice note%}}
   The token expires in **10** minutes. To re-generate the token, click **Token** on the **Devices** page.
   {{%/notice%}}
   
**What to do next:** Adding a device to the rapyuta.io platform does not mean that the device is connected. To connect your device to the platform, you must [set up the device](/3_how-tos/32_device-management/321_onboarding-a-device/#setting-up-your-device).


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

### Upgrade Your Device

The rapyuta.io platform allows you to upgrade your python 2 devices to python 3. Do the following to upgrade your device.

1. On the device details page, click **Upgrade Device**.
![Upgrade device](/images/getting-started/add-new-device/upgrade-device.png?classes=border,shadow&width=40pc)
2. A confirmation pop-up message is displayed. Click **Confirm**. The device is successfully upgraded to python 3.
![set up upgraded device](/images/getting-started/add-new-device/set-up-upgraded-device.png?classes=border,shadow&width=40pc)

{{%notice note%}}
After you upgrade your device to python 3, you must [set up the device](/3_how-tos/32_device-management/321_onboarding-a-device/#setting-up-your-device) for the changes to take place.
{{%/notice%}} 

## Related Links
* [About Devices](/1_understanding-rio/12_core-concepts/#device-management)
* [About Docker Runtime](/5_deep-dives/51_managing-devices/511_device-runtime/#dockercompose-runtime-for-device)