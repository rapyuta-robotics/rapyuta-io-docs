---
title: File Management on Devices
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 352
slug: file-management-devices
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
  - How to
---

### Batch Upload
You can upload logs collected from a device (like dmesg,
journalctl, rosbags etc.) to rapyuta.io. It allows you to do the following:

* *Save* logs for future reference. The logs are saved to the
  cloud storage.
* *Process* and *analyze* logs for insights as per your requirements.


The log data can be text, images, or videos. You can upload
log files by clicking on the **Upload** button under the **Manage** tab. You can select either **Table** or **Card** options to view the log files. The rapyuta.io platform also allows you to download the log lines per page. You can select either 10, 20, 30, or 40 lines of logs to be downloaded per page.
![Manage Tab](/images/core-concepts/logging/device-logs/upload-logs/manage-tab.png?classes=border,shadow&width=40pc)


A list of statuses indicates the progress of an ongoing upload.
They are:

* **In Progress**: uploading a log file (to the cloud storage) is underway.
* **Failed**: uploading a log file failed due to an error.
* **Complete**: uploading a log file (to the storage) is succeeded.


