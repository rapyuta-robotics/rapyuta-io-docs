---
title: Working with Rosbags
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 355
slug: working-with-rosbags
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
## ROS Bag Jobs for Packages
If you want to record the topics for any ROS component of a package, you can follow the steps below


### Adding Ros Bag Jobs

**Pre-requisite**: Ensure that you have selected the component runtime as cloud or device (device runtime must be docker) while creating a package and **Is ROS Component** is selected during [package creation](/3_how-tos/33_software-development/333_create-packages/).

1. In the rapyuta.io console, navigate to the **Create New Package** page, select the **Components** tab, and click **Add ROS Bag Job**.

| Field | Description |
| ---   | --- |  
| Name | Enter a name for the ROS bag job. |
| Topic Names | Enter the name of the topic that you want to record.|
| All Topics | Enable this toggle button if you want to record all the topics available in the component.|
| Include Regex | To record a series of topics that should match a regular expression value or regex, enter the regex here. |
| Exclude Regex | to exclude the recording of a series of topics that should match a regular expression value or regex, enter the regex here. {{% notice info %}}
If you have enabled the **All Topics?** toggle-button, **Topic Name** and  **Include Regex** fields are disabled.
{{% /notice %}}|
| Compression | You can also provide either **BZ2** or **LZ4** compression to the recorded topics based on your requirement and available disk sizes.
BZ2 generally produces smaller bags than LZ4. For more information about ROS compression, [click here](http://wiki.ros.org/rosbag/command-line#compress).  <!--link is not working, check the link-->|
| Advanced Options | The advanced option allows you to record the topics with a more granular report. Click **Show Advanced Option** to view the options.|
| Node Name | Enter the node for which you want to record all the topics subscribed by the specific node. <validate> |
| No. of Message | Enter the number of messages that you want to store for each topic.|
| Max Splits | Defines the maximum number of ROS bag file splits that are saved. Older splits are deleted after the **Max Splits** count is reached. {{% notice info %}}
Maximum 10 splits are allowed for each ROS bag job. After the message recording reaches the maximum allowed splits, the older split files are deleted to maintain the specified memory limit. 
{{% /notice %}} |
| Split Size | Enter the memory size for each split of the recorded messages in MB.{{% notice info %}}
Each split size must be more than 10 MB and less than 1024 MB or 1GB. </br> Maximum 10 splits are allowed with the split size of more than 10 MB and less than 1 GB. However, the disk storage for the ROS bag file can not go beyond 5120 MB (5 GB).</br>
For example, you can configure 10 splits and each split can store up to 500 MB (10X500 MB=5 GB)  of recorded data or you configure 5 splits and each split can store up to 1024 MB (5x1024 MB=5 GB)  of recorded data. After the message recording reaches the maximum allowed splits, the older splits are deleted to maintain the specified memory limit. 
{{% /notice %}}|
| Upload Rate | (Applicable only for device runtime) Specify the upload rate for the ROS bag file to be uploaded in the rapyuta.io platform.|
| Rate Units | (Applicable only for device runtime) Specify the unit for the upload rate from the drop-down menu. You can select **Bytes/s**, **KB/s**, or**MB/s**.|
| Purge After | (Applicable only for device runtime) Enable the toggle button if you want to delete the ROS bag file after it has been successfully uploaded to the rapyuta.io platform. |
| Upload mode | Select one of the upload mode to define the frequency of ROS bag job uploads: <br> * **Continuous** - The recorded ROS bags will get uploaded continuously. <br> * **On-demand** - ROS bags recorded during the specified time period will get uploaded.<br> * **On-stop** - The ROS bags will get uploaded only after the recording stops.|
| Configure latching and throttling | Latching enables us to persist the last message published on a channel in every split of the bag file and throttling enables the recorder to record messages at a lower frequency, for example, 5 msgs/sec. To configure latching and throttling:<br> * Topic - Specify the topic name. <br> * **Latch** - Click to enable. <br> * **Throttle** - Click to enable. <br> * **Throttle frequency** - Specify the frequency at which messages should be recorded. |
    
## Viewing ROS Bag Job

The rapyuta.io platform lists all the available ROS bag jobs under each component. To view the details of a ROS bag job, click the ROS bag job and then click the **Job Details** tab. You can view the ROS bag details, for example, the topics that are being recorded by the job or the message compression detail as displayed in the following image.
![rosbag-job-details](/images/dev-guide/rosbag-jobs/rosbag-job-details.png?classes=border,shadow&width=30pc)

You can also view all the ROS bag jobs running on the device on the device's details page. The **ROS Bags Jobs** tab displays all the ROS bag jobs running on the device and you can download the ROS bag files.
![rosbag-job-details](/images/dev-guide/rosbag-jobs/rosbag-job-device-details.png?classes=border,shadow&width=60pc)



## Access ROS Bag Files

 A ROS bag file is uploaded to the platform automatically if the ROS bag job is stopped or if the deployment is de-provisioned. To stop the ROS bag job, click **Stop** next to the ROS bag job name. A pop-up warning message appears. Click **Yes**. The platform takes some time and the details of the recorded topics are available. You can view the following details.
The **ROS Bag Jobs** tab lists all the running ROS bag jobs for the deployment. 
![rosbag-jobs](/images/dev-guide/rosbag-jobs/rosbag-jobs.png?classes=border,shadow&width=55pc)

* **Bag Name**: Displays the name of the ROS bag file.
* **Status**: Displays whether the recorded ROS bag file is uploading, uploaded, or in the error state. If the status is **Uploading**, it implies that the ROS bag file is getting uploaded to the platform after the ROS bag job is stopped or the deployment is de-provisioned. If the status is **Uploaded**, it implies that the file is uploaded to the platform successfully and you can download the file to your local system for further analysis and troubleshooting. If the status is in **Error** state, it implies that the recording of the ROS bag file is not successful and the ROS bag file is not available. If the ROS bag job goes into error state, click the **Error** link to raise a support ticket for a resolution.

* **Messages**: Displays the number of recorded messages.
* **Size**: Displays the file size.
* **Start**: Displays the start time of the recording.
* **End**: Displays when the recording is stopped.
* **Duration**: Displays the total time duration for the ROS bag job that was run.
* **Indexed**: If the **Indexed** field is marked with a green tick icon, it implies that the ROS bag file is indexed and contains valid recordings of topics. If the **Indexed** field is marked with a red cross icon, it implies that the ROS bag file is not indexed and does not contain valid recordings of topics.
* **Actions**: You can either download the ROS bag file or delete the file.

### Available Actions on a ROS Bag File

After a running ROS bag job is uploaded to the platform, you can perform the following available actions.

* To have a quick view of the details of the recorded topics, click the ROS bag file that is uploaded. A pop-up message box appears detailing the recorded topics. 
![bag-topics](/images/dev-guide/rosbag-jobs/topic-bags.png?classes=border,shadow&width=30pc)
* To download the available ROS bag file, click the download icon.
* To delete the uploaded ROS bag file, click the delete icon.
