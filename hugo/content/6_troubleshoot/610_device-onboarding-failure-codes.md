---
title: Device Error Codes
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 611
versions:
  free-pro-team: '*'
  enterprise-server: '*'
layout: false
permissions: rapyuta.io
showMiniToc: true
miniTocMaxHeadingLevel: 4
allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false
redirect_from: []
gettingStartedLinks: []
popularLinks: []
guideLinks: []
introLinks: {}
tags:
  - Troubleshoot
---
A device may **fail** due to several reasons. The below table lists all the possible error codes together with their description and recommended actions.



If the issue still persists, please <a href="#" onclick="javascript:FreshWidget.show();">contact support</a>.


| Error code         | Description | Recommended action |
| ------------------ | ----------- | ------------------ |
| DEV_E100 | Internal error | Contact support |
| DEV_E101 | Downloading internal artifact failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li></ul> |
| DEV_E102 | 	Pulling internal docker image failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li><li>Ensure that the docker version on device is:<li>**docker-ce==17.12.1~ce-0~ubuntu** for Ubuntu 16.04</li><li>docker-ce==5:18.09.7~3-0~ubuntu-bionic for Ubuntu 18.04</li></li></ul> If not, uninstall it and set up the device again.  |
| DEV_E103 | Installing pip package failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li><li>Ensure that the version of Python on device is Python>=2.7.8,<3
If not, uninstall it and set up the device again.</li><li>Try installing the package manually by executing `source /opt/rapyuta/venv/bin/activate && pip install <python-package>` and see if it fails.
If it doesn’t fail, the issue may be transient.</li></ul> Now, set up the device on successful installation of python package. |
| DEV_E104 | Installing docker failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li><li>Ensure that the docker version on device is:<li>**docker-ce==17.12.1~ce-0~ubuntu** for Ubuntu 16.04</li><li>docker-ce==5:18.09.7~3-0~ubuntu-bionic for Ubuntu 18.04</li></li></ul> If not, uninstall it and set up the device again. |
| DEV_E105 | Installing system package failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li><li>Try installing the package manually by executing `apt-get install <system-package>` and see if it fails.
If it doesn’t fail, the issue may be transient.</li></ul> Now, set up the device on successful installation of python package. |
| DEV_E106 | Managing files on device failed | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that there is adequate disk space on device.</li></ul> |
| DEV_E107 | Internal service failed to start | Contact Support |
| DEV_E108 | Initialization time exceeded | <ul> <li>Contact Support</li><li>Set up the device again.</li></ul> |
| DEV_E109 | Initialization failed due to network error | Ensure that device has an active internet connection.|
| DEV_E110 | Initialization failed due to docker login error | <ul><li>Ensure that device has an active internet connection.</li><li>Ensure that the package **golang-docker-credential-helpers** is not installed. If present, remove it manually by executing `apt-get remove golang-docker-credential-helpers`</li></ul> Now, set up the device again |

#### Check for active internet connection

To check if a device has an active internet connection, execute the command:

`ping -c 4 8.8.8.8` at the device's terminal.

The **[**ping**]**(*https://linux.die.net/man/8/ping*) command will try

to reach [Google Public DNS](https://en.wikipedia.org/wiki/Google_Public_DNS).

If successful, you should see an output as:

**4 packets transmitted, 4 received, 0% packet loss.**



#### Check for disk space

To check if there is adequate disk space on device, run the command: `df -h`

at the device's terminal. The **[**df**]**(*https://linux.die.net/man/1/df*) command

will display your disk usage. Ensure the value of percentage used for

your main filesystem is not nearly 100%.
