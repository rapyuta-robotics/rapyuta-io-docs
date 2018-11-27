---
title: "Adding New Device"
description:
type: getting-started
date: 2018-11-26T14:37:01+05:30
pre: "<b>d. </b>"
weight: 220
---
## Device requirements

* Mandatory
    * Python >= 2.7.8
    * Ubuntu 16.04
    * pip >8.1.0, <10.0.0
* Optional
    * curl
    * Robot Operating System (ROS)

## Current supported devices

* Raspberry PI 2
* Raspberry PI 3
* UP board

## Registering a device

To register a new device with rapyuta.io using the [console](https://closed-beta.rapyuta.io),
follow the steps:

1. On the left navigation bar, click **DEVICES**.
2. Click **ADD NEW DEVICE**.
3. In the **Device Name** box, type in a name for the device you are adding.
4. If you prefer to build the source code in the console using rapyuta.io
   resources, and remotely push the build to the device, select **Use docker compose
   as default runtime** checkbox. As a result, you can use docker compose for application
   deployment.
5. In the **ROS Catkin Workspace** box, enter the absolute path of your catkin workspace.
   If you are using the rapyuta.io custom image on the device, enter
   */home/rapyuta/catkin_ws* where *catkin_ws* is the name of the catkin workspace.
   Otherwise, you will have a different absolute path for your catkin workspace.
   The **ROS Catkin Workspace** can be empty, and you may provide its value on the
   device's **Details** page later.
6. In the **Description** box, enter a brief summary of the device.
7. Click **CONTINUE**.
8. To copy the generated token (a unique device setup link), click **COPY**.    
   You must copy the device setup link before it expires in _ten_ minutes. To generate
   the token again, click **Token** on the devices list page.

## Setting up a device
Copy, paste and run the device setup link in the command terminal of the device.
The device setup link starts setting up the rapyuta.io device client. Sometimes,
you may need to run the setup link as the root user.    
You may access the command terminal of the device either through the serial TTY
method or the SSH method.

In this example, since an executable source has already been installed in the
device (preinstalled), its device setup link is of the form:

```bash
curl -O -H '...' https://bootstrap.rapyuta.io/start && bash start -w /home/rapyuta/catkin_ws
```
If the device is set up successfully, you should see the following output:

```bash
Initialising the Rapyuta Platform

########(100%)
Successfully installed!
root@ubuntu:/home/ubuntu#
```
As soon as the device is successfully registered, you will see a
<span style="color:blue">blue</span> dot against the device's name.

Then you will see a flickering yellow dot against the device's name indicating
that the device is being initialised.

After a while, the device will be online, which is indicated by a green dot
against the device's name. If you do not see a green dot after couple of minutes,
**refresh** the web page (that is click the refresh button of Google Chrome browser).

rapyuta.io assigns a unique identifier, *UUID*, to the device.

The state of a device is colour coded. The following lists the various statuses
the device may be in:

* Registered (blue) indicates that the device is successfully added, but an
active connection is yet to be established.
* Initialising Device (yellow) indicates that the device is being initialised.
* Online (green) indicates that the device is ready to receive commands.
* Offline (grey) shows that the device is registered, but is currently offline.
* Rejected (red) indicates that the device is blocked from communicating with
rapyuta.io
* Delete (red) indicates that all traces of the device's data is removed from
rapyuta.io

The device's **Details** tab displays a summary of the device:

1. SYSTEM INFO
2. DESCRIPTION
3. HOST NAME
4. REGISTRATION TIME
5. DEVICE OS
6. SALT VERSION
7. IP INTERFACES
8. LABELS
9. CONFIG VARIABLES

Read device management section to learn more about device manager concepts.
