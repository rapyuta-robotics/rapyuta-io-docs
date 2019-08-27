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

{{% notice note %}}
To check if a device has an active internet connection, execute the command `ping 8.8.8.8` at the device's terminal.
{{% /notice %}}
{{% notice note %}}
To check if there is adequate disk space on device, run the command `df -h` at the device's terminal.
{{% /notice %}}

If the issue still persists, please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.

| Error Code | Description | Recommended Actions |
| ---------- | ----------- | ----------------------- |
| DEV_E100 | Internal error | <a href="#" onclick="javascript:FreshWidget.show();">Contact support</a> |
| DEV_E101 | Downloading internal artifact failed | <ul><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df -h***).</li></ul> |
| DEV_E102 | Pulling internal docker image failed | <ul><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df -h***).</li><li>Ensure the docker version on device is:  <ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==5:18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li></ul>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li></ul> |
| DEV_E103 | Installing pip package failed | <ul><li>Try installing the package manually and see if it fails. If it doesn't fail, the issue is transient. Otherwise, [set up the device](/getting-started/add-new-device/#setting-up-a-device), and try installing the package again by executing `/opt/rapyuta/venv/bin/activate && pip install <package>`</li><li>Ensure the version of Python on device is ***Python>=2.7.8,\<3***<br>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df- h***).</li></ul> |
| DEV_E104 | Installing docker failed | <ul><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df -h***).</li><li>Ensure the docker version on device is:  <ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==5:18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li></ul>If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.</li></ul> |
| DEV_E105 | Installing system package failed | <ul><li>Try installing the package manually and see if it fails. If it doesn't fail, the issue is transient. Otherwise, [set up the device](/getting-started/add-new-device/#setting-up-a-device), and try installing the package again by executing `apt-get install <package>`</li><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df -h***).</li></ul> |
| DEV_E106 | Managing files on device failed | <ul><li>Ensure device has an active internet connection (***ping 8.8.8.8***).</li><li>Ensure there is adequate disk space on device (***df -h***).</li></ul> |
| DEV_E107 | Internal service failed to start | <a href="#" onclick="javascript:FreshWidget.show();">Contact support</a> |