---

title: "Creating and Updating Batch Logging on a Device"
weight: 325
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
tags:
  - How to
---

## Configuring Batch Logging on a Device

You can configure the batch logging feature on a device that allows you to create a backup of device deployment logs in a single file in JSON format.

To configure batch logging on a device: </br>

**Pre-requisite**: Ensure that you have onboarded a device to the rapyuta.io console and the device is online.

1. In the rapyuta.io console, select the device for which you want to configure batch logging.
2. In the device **Details** tab, turn on the **Enable batch logging** toggle.
The **Batch logging configuration** dialog box is displayed.
3. In the **Batch logging configuration** dialog box, configure the following fields: For more details, see [Configuration Variables](/5_deep-dives/51_managing-devices/513_device-config-variables/#batch-logging-configuration)
* **Backup Directory**
* **Rotation size** 
* **Rotation interval**
* **Rotated Archive Limit**
4. Click **OK**. The batch logging configuration on a device is completed.

{{% notice note %}}
To update the batch logging configuration, in the device **Details** page, under **BATCH LOGGING CONFIG VARIABLES** section, click **Update**. 
{{% /notice%}}
