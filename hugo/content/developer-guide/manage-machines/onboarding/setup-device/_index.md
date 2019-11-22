---
title: "Setup Device"
description:
type: developer-guide
date: 2019-10-24T11:48:58+05:30
pre: "a. "
weight: 250
---
Copy, paste and run the device's token in the command terminal
of the device. The token sets up the rapyuta.io device client on
the device. Sometimes, you may need root permission to execute
the token on tthe device.
{{% notice note %}}
You may access the command terminal of the device through either the
serial TTY method or the SSH method.
{{% /notice %}}

If the device is set up successfully, you should see the following output
on the command terminal:

```bash
Initialising the Rapyuta Platform

########(100%)
Successfully installed!
root@ubuntu:/home/ubuntu#
```
The process of installing a device progresses through various stages to successful completion. The stages are:

1. **Package Installation**: Install system and pip packages on the device
2. **Prerequisites Check**: check for prerequisites on the device
3. **Device Setup**: Set up the device for onboarding
4. **DM Collector Installation**: Install metrics collector on the device
5. **DM Communication Service Installation**: Install communication service on the device
6. **DM Publisher Service Installation**: Install publisher service on the device
7. **Collector Component Installation**: Pull metrics collector docker component on to the device
8. **Communication Component Installation**: Pull communication docker component on to the device
9. **Publisher Component Installation**: Pull publisher docker component on to the device
10. **Supervisor Installation**: Start supervisor on the device
11. **ROS Component Installation**: Pull ROS docker component on to the device


{{% notice warning %}}
In case you face issues on-boarding the device. Please refer to the [section on failure codes](./failure-codes) to help you troubleshoot.
{{% /notice %}}

When the device is successfully registered, you will see a
<span style="color:green">***green***</span> dot next to the
device's name, which indicates that the device is online.
If you do not see the green dot after couple of minutes,
**refresh** the web page (that is click the refresh button of
Google Chrome browser).

![Registered Status of Device](/images/getting-started/add-new-device/demo-device.png?classes=border,shadow&width=40pc)