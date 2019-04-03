---
title: "Adding New Device"
description:
type: getting-started
date: 2018-11-26T14:37:01+05:30
pre: "h. "
weight: 319
---
## Device requirements

* Mandatory
    * Python >=2.7.8, <3
    * Ubuntu 16.04
* Optional
    * [curl](https://curl.haxx.se/)
    * [Robot Operating System](http://wiki.ros.org/kinetic) (ROS)

## Supported devices

* [Raspberry PI 2](/getting-started/prepare-raspberry-pi)
* [Raspberry PI 3](/getting-started/prepare-raspberry-pi)
* [UP board](/getting-started/prepare-up-board)

#### Registering a device

To register a new device on [rapyuta.io console](https://console.rapyuta.io),
follow the below steps:

1. On the left navigation bar, click **DEVICES**.
2. Click **ADD NEW DEVICE**.
3. You will provide a name for the device in the **Device Name** box.
4. If you prefer to build source code in rapyuta.io and push the build
   remotely to the device, select **Use docker compose
   as default runtime** option. Thus, you can use docker compose for
   application deployment.
5. You will provide the absolute path of your catkin workspace as
   the **ROS Catkin Workspace** value. If you are using custom rapyuta.io
   image on the device, your catkin workspace will be
   `/home/rapyuta/catkin_ws` where *catkin_ws* is the name of the catkin workspace.
   Otherwise, you will have a different absolute path for your catkin workspace.
   {{% notice info %}}
   The **ROS Catkin Workspace** can be empty, and you may provide this value on
   the device's **Details** page.
   {{% /notice %}}
6. In the **Description** box, enter a brief summary of the device.
7. Click **CONTINUE**.
    ![Device Details](/images/getting-started/add-new-device/device-details.png?classes=border,shadow&width=40pc)
8. To copy the generated token (a unique device setup link), click **COPY**.    
   You must copy the token before it expires in *ten* minutes. To generate
   the token again, click **Token** on the **Devices** page.
   ![Device Token](/images/getting-started/add-new-device/device-token.png?classes=border,shadow&width=40pc)

#### Setting up a device
Copy, paste and run the device's token in the command terminal
of the device. The token sets up the rapyuta.io device client on
the device. Sometimes, you may need root permission to execute
the token on tthe device.
{{% notice note %}}
You may access the command terminal of the device through either the
serial TTY method or the SSH method.
{{% /notice %}}

In this example, since an executable source is already installed in the
device (preinstalled), its token is of the form:

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
When the device is successfully registered, you will see a
<span style="color:green">***green***</span> dot next to the
device's name, which indicates that the device is online.
If you do not see the green dot after couple of minutes,
**refresh** the web page (that is click the refresh button of
Google Chrome browser).

![Registered Status of Device](/images/getting-started/add-new-device/demo-device.png?classes=border,shadow&width=40pc)

rapyuta.io assigns a unique identifier, ***UUID***, to the device.

The status of a device is colour coded. The following lists the various statuses
the device may be in:

* Registered (<span style="color:blue">***blue***</span>) indicates that the device is successfully added, but an
active connection is yet to be established.
* Initialising Device (<span style="color:orange">***yellow***</span>) indicates that the device is being initialised.
* Online (<span style="color:green">***green***</span>) indicates that the device is ready to receive commands.
* Offline (<span style="color:grey">***grey***</span>) shows that the device is registered, but is currently offline.
* Rejected (<span style="color:red">***red***</span>) indicates that the device is blocked from communicating with
rapyuta.io
* Delete (<span style="color:red">***red***</span>) indicates that all traces of the device's data is removed from
rapyuta.io
* Failed (<span style="color:red">***red***</span>) indicates that a failure occurred while managing the device.

{{% notice info %}}
You may read the [list of error codes](/getting-started/add-new-device/device-failed-error-codes) for more details about specific failure cases.
{{% /notice %}}

On the **Details** page of the device, you may modify its description or
its catkin workspace as shown in the below image.

![Device's Details tab](/images/getting-started/add-new-device/demo-device-details.png?classes=border,shadow&width=60pc)

{{% notice note %}}
Read [device management](/core-concepts/device-management) topic to learn more
about device manager concepts.
{{% /notice %}}
