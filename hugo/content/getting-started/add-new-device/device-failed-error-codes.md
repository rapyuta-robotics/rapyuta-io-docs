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
| DEV_E101 | Downloading internal artifact failed | Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device. |
| DEV_E102 | Pulling internal docker image failed | Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device.<br>Ensure the docker version on device is:  <ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li>    If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again. |
| DEV_E103 | Installing pip package failed | Ensure the Python version on device is ***Python>=2.7.8, <3***. If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again.<br>Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device. |
| DEV_E104 | Installing docker failed | Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device.<br>Ensure the docker version on device is:  <ul><li>***docker-ce==17.12.1~ce-0~ubuntu*** for Ubuntu 16.04</li><li>***docker-ce==18.09.7~3-0~ubuntu-bionic*** for Ubuntu 18.04</li>    If not, uninstall it and [set up the device](/getting-started/add-new-device/#setting-up-a-device) again. |
| DEV_E105 | Installing system package failed | Try installing the package manually and check if it fails.<br>Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device. |
| DEV_E106 | Managing files on device failed | Ensure device has an active internet connection.<br>Ensure there is adequate disk space on device. |
| DEV_E107 | Internal service failed to start | <a href="#" onclick="javascript:FreshWidget.show();">Contact support</a> |