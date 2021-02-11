---

title: "Upload Files from Device"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weigth: 543

versions:
  free-pro-team: '*'
  enterprise-server: '*'

layout: false
permissions: 'rapyuta.io'

showMiniToc: true
miniTocMaxHeadingLevel: 4

allowTitleToDifferFromFilename: false
mapTopic: false
hidden: false


redirect_from: []
gettingStartedLinks : []
popularLinks: []
guideLinks: []
introLinks: {}

---




To DO: Move this to how to section of log upload

By default, device logs are not collected until you explicitly subscribe to a
ROS topic in case of ROS deployments.

Before viewing device logs, it is necessary to have the ROS Master up and running.
Add a _ROS Publisher_ package that has a _Talker_ component with device runtime.
It publishes */telemetry* ROS topic with **High** **QoS**.

#### Parameters for Uploading Log Files
There are certain parameters to take care of while uploading a
log file from a device to rapyuta.io

When providing the absolute path of the log file, ensure it does
not end with a backslash. Hence, folders are not supported. You are
only allowed to upload a single log file at a time.

Sometimes constrained resources can limit a device's ability to
execute tasks while uploading logs. For instance, a significant amount
of network bandwidth is consumed while uploading
enormous log data, which can affect the execution of other high priority
tasks on the device. In this case, rapyuta.io lets you tune network
bandwidth based on the device and its environment limitations. It lets
you upload log files without interfering with task execution. You can
choose the upload rate value in ***Mega bytes***, or ***Giga bytes***.

Select the **purge** option to remove a log file from a device
after successfully uploading it to the cloud storage.

Select the **override** option to replace an existing log file
with a new log file with the same name.

**Metadata** lets you create static tags for log files while uploading.

![Upload Parameters](/images/core-concepts/logging/device-logs/upload-logs/upload-log-dialog-box.png?classes=border,shadow&width=40pc)


#### Direct Links for Sharing Log Files

After successfully uploading the log file, a summary of the log details is shown.
It includes information like the name of the log file, its size, creator and creation time
among other details. It lets you download the log file, and also share it publicly outside
rapyuta.io platform by creating ***direct links***.

![Log information](/images/core-concepts/logging/device-logs/upload-logs/log-information.png?classes=border,shadow&width=40pc)

Sharing a log file requires you to generate a publicly accessible direct link (URL) by
setting an expiration time for the link. The expiration time defines the duration
for which the link will be valid. Multiple publicly accessible direct links can be generated
with different expiration times.

![Direct link](/images/core-concepts/logging/device-logs/upload-logs/direct-link.png?classes=border,shadow&width=40pc)

{{% notice note %}}
A direct link is valid as long as a log file is not deleted
even if the device is deleted or is in a failed state.
{{% /notice %}}

{{% notice info %}}
The private URL is a permanent URL of a log file. It provides access to the log file
to rapyuta.io users in a project.
{{% /notice %}}

You may also:

*   ***view*** a list of all the log files that you uploaded for a device.
*   ***delete*** a log file from the cloud storage.
*   ***filter*** list of log files based on upload status.
*   ***sort*** list of log files based on filename, file size and time of creation.
*   ***Cancel upload*** of an ongoing process of uploading a log file.