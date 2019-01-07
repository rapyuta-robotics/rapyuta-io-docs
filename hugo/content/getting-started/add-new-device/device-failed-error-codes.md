---
title: "Error Codes in Failed State"
description:
type: getting-started
pre: "d.1. "
date: 2019-01-07T11:43:33+05:30
weight: 221
---
The below table lists all of the error codes together with their description
and recommended actions when the status of a device is Failed.

| Error Code | Description | Recommended User Action |
| ---------- | ----------- | ----------------------- |
| DEV_E100 | Internal error | Contact Support |
| DEV_E101 | Downloading internal artifact failed | Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E102 | Pulling internal docker image failed | Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E103 | Installing python-pip package failed | Ensure that the Python version on device is *Python>=2.7.8* If not, remove it and install the required Python version, and then run the device token at its terminal.<br>Ensure that the pip version on device is *pip>8.1.0, <10.0.0* If not, remove it and install the required pip version, and then run the device token at its terminal.<br>Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E104 | Installing Docker failed | Ensure that the Docker version on device is *docker-ce == 17.12.1~ce-0~ubuntu*<br>If not, remove it and install the required Docker version, and then run the device token at its terminal.<br>Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E105 | Installing system package failed | Install the package manually and check if the installation fails.<br>Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E106 | Managing files on device failed | Check if device has an active internet connection.<br>Check if there is adequate disk space left on device. |
| DEV_E107 | Internal service failed to start | Contact Support |
