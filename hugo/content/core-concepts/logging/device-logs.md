---
title: "Device Logs"
description:
type: core-concepts
date: 2018-11-20T18:51:11+05:30
pre: "3. "
weight: 196
---
By default, device logs are not collected until you explicitly subscribe to a
ROS topic in case of ROS deployments.

Before viewing device logs, it is necessary to have the ROS Master up and running.
Add a _ROS Publisher_ package that has a _Talker_ component with device runtime.
It publishes */telemetry* ROS topic with **High** **QoS**.

1. On left navigation bar, click **Devices**.
2. Select a device whose device logs you want to view. In this example,
   _ROS Publisher Subscriber Device_ is selected.
3. Under **Logs** tab, to subscribe to a ROS topic, click **Subscribe** against
   the topic. In this example, the topic `/telemetry` is subscribed to.
   Ensure the status of the subscribed topic(s) is **Subscribed** and is highlighted
   in green.

![To subscribe](/images/core-concepts/logging/device-logs/yet-to-subscribe.png?classes=border,shadow&width=60pc)

Once you subscribe to a topic, the device logs are displayed in the
_logging area_ (a terminal-like window).

Initially, you will see the latest 500 logs in the logging area. As you scroll
up to the top of the terminal window previous 500 logs are displayed. You may
continue scrolling up till all the logs are exhausted.

![Logging Area](/images/core-concepts/logging/device-logs/logging-terminal-window.png?classes=border,shadow&width=60pc)

To get updated logs, scroll down to the bottom of the logging area, and then
click **Get recent logs**.

To switch between the topics, click the drop-down list (at the top-left corner
of logging area) and select one of the subscribed topics. A tick mark against
the topic `/telemetry` indicates that you are currently viewing the logs
belonging to `/telemetry`.

You can search the logs for matching phrases using the **Search** bar. All
occurrences of a match are highlighted.

If you prefer to view the timestamp of every log displayed in the logging area,
select **Show timestamps** checkbox.

Topics such as `/rosout` and `/rosout_agg` are already available for a
ROS-based device.

## Upload Device Logs
You can upload logs collected from a device (like dmesg,
journalctl, rosbags etc.) to rapyuta.io. This lets you:

* *Save* logs for future reference
* *Process* logs for information retrieval
* *Analyze* logs to gain useful insights
* *Visualise* logs for identifying patterns and trends
* *Remotely debug* device failures

The log data can be text, images or videos. You can upload
log files (of a device) by clicking on the **Upload** button.
You can only upload one file at a time. If you want to upload
another log file, you have to click the button again to upload
it to the device’s log folder.

A list of statuses indicates the progress of an ongoing upload.
They are:

* **In Progress**: uploading a log file (to the cloud storage) is underway
* **Failed**: uploading a log file failed due to an error
* **Complete**: uploading a log file (to the storage) succeeded

{{% notice note %}}
You can *cancel* an ongoing upload process if you want to
by clicking on the cancel icon.
{{% /notice %}}

Sometimes log files are large in size, and a significant
amount of network bandwidth is consumed while uploading
enormous log data. rapyuta.io lets you tune network
bandwidth so as to upload massive log data even in
slow network bandwidths.

### Operations on Log Files
After uploading a log file to rapyuta.io, you can perform
the following operations with ease.

#### List Files
View a list of all the log files that you uploaded for a device.

#### Download
Download a log file locally on your system.

#### Delete
Delete a log file from the cloud storage.

#### Purge
Remove a log file at the source (that is, from the device) after
uploading the file to rapyuta.io. You can still view the log file
in the list of files, but the file is deleted on the device.

#### Override
Lets you replace an existing log file with a new log file.