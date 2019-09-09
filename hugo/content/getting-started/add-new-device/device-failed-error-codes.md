---
title: "Error Codes in Failed State"
description:
type: getting-started
pre: "1. "
date: 2019-01-07T11:43:33+05:30
weight: 321
---
A device may ***fail*** due to several reasons. The below table
lists all the possible error codes together with their
description and recommended actions.

If the issue still persists, please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.

| Error Code | Description | Recommended Actions |
| ---------- | ----------- | ----------------------- |
| DEV_E100 | Internal error | <a href="#" onclick="javascript:FreshWidget.show();">Contact support</a> |
| DEV_E101 | Downloading internal artifact failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li></ul> |
| DEV_E102 | Pulling internal docker image failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li><li>Ensure the docker version on device is:  <ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==5:18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li></ul>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li></ul> |
| DEV_E103 | Installing pip package failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li><li>Ensure the version of Python on device is ***Python>=2.7.8,\<3***<br>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li><li>Try installing the package manually by executing `/opt/rapyuta/venv/bin/activate && pip install <python-package>` and see if it fails. If it doesn't fail, the issue may be transient. Now, [set up the device](/getting-started/add-new-device/#setting-up-a-device) on successful installation of python package.</li></ul> |
| DEV_E104 | Installing docker failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li><li>Ensure the docker version on device is:<ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==5:18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li></ul>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li></ul> |
| DEV_E105 | Installing system package failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li><li>Try installing the package manually by executing `apt-get install <system-package>` and see if it fails. If it doesn't fail, the issue may be transient. Now, [set up the device](/getting-started/add-new-device/#setting-up-a-device) on successful installation of system package.</li></ul> |
| DEV_E106 | Managing files on device failed | <ul><li>[Ensure device has an active internet connection.](#check-for-active-internet-connection)</li><li>[Ensure there is adequate disk space on device.](#check-for-disk-space)</li></ul> |
| DEV_E107 | Internal service failed to start | <a href="#" onclick="javascript:FreshWidget.show();">Contact support</a> |

## Check for active internet connection
To check if a device has an active internet connection, execute the command:
`ping -c 4 8.8.8.8` at the device's terminal.
The *[ping](https://linux.die.net/man/8/ping)* command will try
to reach *[Google Public DNS](https://en.wikipedia.org/wiki/Google_Public_DNS)*.
If successful, you should see an output as:
***4 packets transmitted, 4 received, 0% packet loss.***

## Check for disk space
To check if there is adequate disk space on device, run the command: `df -h`
at the device's terminal. The *[df](https://linux.die.net/man/1/df)* command
will display your disk usage. Ensure the value of percentage used for
your main filesystem is not nearly 100%.