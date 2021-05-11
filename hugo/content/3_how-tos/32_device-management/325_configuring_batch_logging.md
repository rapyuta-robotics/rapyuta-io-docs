---

title: "Creating and Updating Batch Logging on a Device"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
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

Perform the following procedure to configure batch logging on a device.

**Pre-requisite**: Ensure that you have onboarded a device to the rapyuta.io console and the device is online.

1. In the rapyuta.io console, click the device for which you want to configure batch logging.
2. In the device **Details** page, click the **Enable batch logging** toggle button.
![sample file of Japan](/images/core-concepts/configurations/batch-logging.png?classes=border,shadow&width=45pc)
The **Batch Logging Configuration** dialog box is displayed.
3. In the **Batch Logging Configuration** dialog box, configure the following fields. For more details about fields, [click here](/5_deep-dives/51_managing-devices/513_device-config-variables/#batch-logging-configuration)
* **Backup Directory**
* **Rotation size** 
* **Rotation interval**
* **Rotated Archive Limit**
4. Click **OK**. The batch logging on a device is completed.

## Updating Batch Logging on a Device

Perform the following procedure to update a batch logging configuration.
**Pre-requisite**: Ensure that the device is online.

1. In the device **Details** page, under **BATCH LOGGING CONFIG VARIABLES** section, click **Update**.
![sample file of Japan](/images/core-concepts/configurations/batch-logging-update.png?classes=border,shadow&width=45pc)
The **Batch Logging Configuration** dialog-box is displayed. 
2.  In the **Batch Logging Configuration** dialog-box, you can edit and update the following fields. For more details about fields, [click here](/5_deep-dives/51_managing-devices/513_device-config-variables/#batch-logging-configuration)
* **Backup Directory** 
* **Rotation size**
* **Rotation interval**  
* **Rotated Archive Limit**
3. Click **OK**. the batch logging configuration is updated.