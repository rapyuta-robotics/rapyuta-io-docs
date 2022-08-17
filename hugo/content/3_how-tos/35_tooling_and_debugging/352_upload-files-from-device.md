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
You can upload logs collected from a device (like dmesg, journalctl, rosbags etc.) to rapyuta.io. The log data can be text, images, or videos. This enables you to:

* *Save* logs in the cloud for future reference. 
* *Process* and *analyze* logs for insights as per your requirements.

To Upload logs:
1. In the rapyuta.io console, select a device and click the **Manage** tab.
2. Click **Upload** to start uploading the files.

{{%notice note%}}
You can:
* Choose the table or card option to view the log file.
* Download the log lines per page, select either 10, 20, 30, or 40 lines of logs to be downloaded per page.
{{%/notice%}}

An upload can be in any one of the following states:

| Field | Description |
| ---   | --- |  
| In Progress | Upload is in progress.|
| Failed | Upload failed due to an error.|
| Complete | Upload successful.|



