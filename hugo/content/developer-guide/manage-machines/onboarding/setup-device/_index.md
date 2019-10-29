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
When the device is successfully registered, you will see a
<span style="color:green">***green***</span> dot next to the
device's name, which indicates that the device is online.
If you do not see the green dot after couple of minutes,
**refresh** the web page (that is click the refresh button of
Google Chrome browser).

![Registered Status of Device](/images/getting-started/add-new-device/demo-device.png?classes=border,shadow&width=40pc)