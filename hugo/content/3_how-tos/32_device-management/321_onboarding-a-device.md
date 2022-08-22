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
 * 
{{%/notice%}}

### rapyuta.io Runtimes

rapyuta.io supports docker and preinstalled runtime. By default, the docker runtime is enabled. You can also enable both the runtimes for a device. You can disable/enable the runtime during the lifetime of a device. 
{{%notice note%}} 
A device should always have one runtime enabled.
{{%/notice%}} 

### Register a New Device

To register a new device on rapyuta.io:

{{< tabs >}}
{{% tab name="UI" %}}
1. In the left navigation bar, click **Devices > All Devices**.
2. Click **ADD NEW DEVICE** and enter:
   <table>
      <tr style="background-color:#F8F8F8;">
         <td> <b>Field</b></td>
         <td> <b>Description</b></td>
      </tr>
      <tbody>
         <tr>
            <td>Device Name</td>
            <td>Enter a name for the device.</td>
         </tr>
          <tr>
            <td>Description  </td>
            <td>Enter a summary of the device. </td>
         </tr>
           <tr>
            <td>Advanced  </td>
            <td>Expand this option to view additional configurations.</td>
         </tr>
         <tr>
            <td> Docker </td>
            <td>If you want to build the application's source code in rapyuta.io platform and push the build to the device remotely, select this option and specify the <b>ROS mount path</b>. {{%notice note%}} By default, docker runtime is enabled for a device.
      {{%/notice%}} </td> 
         </tr>
          <tr>
            <td> Preinstalled</td>
            <td>If the application's source code is locally built on the device, select this option and specify the <b>ROS Catkin Workspace</b>. {{%notice note%}} Preinstalled devices can now be created even if ros distro is not available on the device, but the ros communication packages for preinstalled runtime will not be installed and you will not be able to create a network. 
      {{%/notice%}} </td> 
         </tr>
         <tr>
            <td> Rosbag mount path </td>
            <td> Enter the path to store the ROS bag files on the device. The default path is <i>/opt/rapyuta/volumes/rosbag</i>. {{%notice note%}} After you onboard a device, you cannot change the mount path to store the ROS bag files. If you want to change the mount path after adding the device, you can re-onboard the device 	and change the mount path. 
      {{%/notice%}}  </td>
         </tr>
         <tr>
            <td> ROS Catkin Workspace </td>
            <td> Enter the absolute path of your catkin workspace. If you are using a custom rapyuta.io image on the device, your catkin workspace will be <i>/home/rapyuta/catkin_ws</i> where <i>catkin_ws</i> is the name of the catkin workspace. Otherwise, you will have a different absolute path for your catkin workspace. {{%notice note%}}The <b>ROS Catkin Workspace</b> value can be empty, and you can provide this value on the device's details page. 
      {{%/notice%}}</td>
         </tr>
      </tbody>
   </table>

3. Click **Add device**.
   {{%notice note%}}
   On clicking <b>Add device</b>, a script is copied to your clipboard. This script is valid for 10minutes. You can run this script to set up the device. For more information, see [Setting Up your Device](/3_how-tos/32_device-management/321_onboarding-a-device/#setting-up-your-device)
   {{%/notice%}}
{{% /tab %}}

{{% tab name="CLI" %}}
To create a project:
```Bash
rio device create <device_name> 
--runtime <device_runtime> 
--ros <ros_distro> 
--python <python_version>
```
{{% /tab %}}
{{< /tabs >}}
 
### Enable a Preinstalled/Docker Runtime for an Onboarded Device

1. Select the onboarded device and navigate to the device details page.
2. Under the config variables section:
   * For preinstalled device: set the value of the **runtime_preinstalled** variable to True.
   * For a ros-based preinstalled runtime deployment: set the value of the **ros_distro** variable to the value of the ros distro present in your device.
   * For a docker device: set the value of the **runtime_docker** variable to True.
3. SSH into the device and run `sudo systemctl restart rapyuta-agent`. You can check the status on the device details page.
4. Once re-onboarded, you should be able to deploy the docker/preinstalled runtime-based packages.


### Setting Up your Device

Set up your device to connect it to the rapyuta.io platform. To set up your device, open the command terminal and run the previously copied script.
The token sets up the rapyuta.io device client on the device. 
{{%notice note%}}
* Sometimes, you may need root permission to execute the token on the device.
* Access the command terminal of the device physically using a screen and keyboard, through SSH, or any other serial TTY method available. 
{{%/notice%}}

Once the device is set up successfully, you should see the following output on the command terminal:
```bash
Initializing the Rapyuta Platform

########(100%)

Successfully installed!

root@ubuntu:/home/ubuntu#
```

Following are the different stages involved in installing and onboarding the device onto rapyuta.io platform:
<!--The process of installing a device consists of different stages towards successful completion of onboarding the device onto rapyuta.io.
These stages are described below: -->
* Checking and installing the required python or apt packages.
* Installing ROS messages collector package.
* Installing communication package.
* Installing metrics collector package.
* Installing monitoring package.
* Pulling ROS base image.

Not all devices go through all of the stages in the device initialization process. For example, devices with docker-compose option set will have ROS base image installed on them, those with preinstalled runtime will have monitoring package installed on them.

In case you face issues onboarding the device. Please refer to the [section on failure codes]({{< ref "/6_troubleshoot/610_device-onboarding-failure-codes.md" >}}) to help you troubleshoot.

When the device is successfully registered, you will see a <span style="color:green">*green*</span> dot beside the device's name, this indicates that the device is online.

### Upgrade Your Device

The rapyuta.io platform allows you to upgrade your python 2 devices to python 3. To upgrade your device:

1. On the device details page, click **Upgrade Device**.
2. Click **Confirm**. The device is successfully upgraded to python 3.

{{%notice note%}}
After you upgrade your device to python 3, you must [set up the device](/3_how-tos/32_device-management/321_onboarding-a-device/#setting-up-your-device) for the changes to reflect.
{{%/notice%}} 

## Related Links
* [About Devices](/1_understanding-rio/12_core-concepts/#device-management)
* [About Docker Runtime](/5_deep-dives/51_managing-devices/511_device-runtime/#dockercompose-runtime-for-device)
