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
## Rosbag Jobs for Packages
If you want to record the topics for any ROS component of a package, you can follow the steps below.

### Adding Rosbag Jobs

**Pre-requisite**: Ensure that you have selected the component runtime as cloud or device (device runtime must be docker) while creating a package and also select the **Is ROS Component** field during [package creation](/3_how-tos/33_software-development/333_create-packages/).

1. In the rapyuta.io console, navigate to the **Create New Package** page, select the **Components** tab, and click **Add ROS Bag Job**.

| Field | Description |
| ---   | --- |  
| Name | Enter a name for the rosbag job. |
| Topic Names | Enter the name of the topic that you want to record.|
| All Topics? | Enable this toggle button if you want to record all the topics available in the component. {{% notice info %}}
If you have enabled the **All Topics** toggle-button, **Topic Name** and  **Include Regex** fields are disabled.
{{% /notice %}}|
| Include Regex | Specify a series of topics or a regular expression that should be recorded. |
| Exclude Regex | Specify a series of topics or a regular expression that should be excluded from being recorded.|
| BZ2 or LZ4 | You can also provide either **BZ2** or **LZ4** compression to the recorded topics based on your requirement and available disk sizes. BZ2 generally produces smaller bags than LZ4. For more information about ROS compression, see [rosbag compress](http://wiki.ros.org/rosbag/Commandline#rosbag_compress). |
| Advanced Options | The advanced option allows you to record the topics with a more granular report. Click **Show Advanced Option** to view the options.|
| Node Name | Enter the node for which you want to record all the topics subscribed by the specific node. <validate> |
| No. of Message | Enter the number of messages that you want to store for each topic.|
| Max Splits | Defines the maximum number of rosbag file splits that are saved. Older splits are deleted after the **Max Splits** count is reached. {{% notice info %}}
Maximum 10 splits are allowed for each rosbag job. After the message recording reaches the maximum allowed splits, the older split files are deleted to maintain the specified memory limit. 
{{% /notice %}} |
| Split Size | Enter the memory size for each split of the recorded messages in MB.{{% notice info %}}
Each split size must be more than 10 MB and less than 1024 MB or 1GB. </br> Maximum 10 splits are allowed with the split size of more than 10 MB and less than 1 GB. However, the disk storage for the rosbag file can not go beyond 5120 MB (5 GB).</br>
For example, you can configure 10 splits and each split can store up to 500 MB (10X500 MB=5 GB)  of recorded data or you configure 5 splits and each split can store up to 1024 MB (5x1024 MB=5 GB)  of recorded data. After the message recording reaches the maximum allowed splits, the older splits are deleted to maintain the specified memory limit. 
{{% /notice %}}|
| Upload Rate | (Applicable only for device runtime) Specify the upload rate for the rosbag file to be uploaded in the rapyuta.io platform.|
| Rate Units | (Applicable only for device runtime) Specify the unit for the upload rate from the drop-down menu. You can select **Bytes/s**, **KB/s**, or**MB/s**.|
| Purge After | (Applicable only for device runtime) Enable the toggle button if you want to delete the rosbag file after it has been successfully uploaded to the rapyuta.io platform. |
| Upload Mode | (Applicable only for device runtime) Select one of the options to choose when the rosbags should be uploaded to the cloud: <br> * **Continuous** - The recorded rosbags will get uploaded continuously. <br> * **On-demand** - rosbags recorded during the specified time period will get uploaded. <!--note needs to be added --><br> * **On-stop** - The rosbags will get uploaded only after the job stops.|
| Configure latching and throttling | Latching enables us to persist the last message published on a channel in every split of the bag file and throttling enables the recorder to record messages at the frequency specified, for example, 5 msgs/sec. To configure latching and throttling:<br> * **Topic** - Specify the topic name. <br> * **Latch** - Click enable to enable latching. <br> * **Throttle** - Click enable to enable throttling. <br> * **Throttle frequency** - Specify the frequency at which messages should be recorded. |

2. To add the rosbag job on a running deployment and start recording the defined topics, click **Add**.
{{% notice info %}}
You can also update the value of the rosbag jobs during the time of deployment. The values added during the deployments override the values added during the package creation. 
{{% /notice %}}    

## Viewing Rosbag Job

The rapyuta.io platform lists all the available rosbag jobs under each component. To view the details of a rosbag job, click the rosbag job and then click the **Job Details** tab. You can view the rosbag details, for example, the topics that are being recorded by the job or the message compression detail as displayed in the following image.
![rosbag-job-details](/images/dev-guide/rosbag-jobs/rosbag-job-details.png?classes=border,shadow&width=30pc)

You can also view all the rosbag jobs running on the device on the device's details page. The **ROS Bags Jobs** tab displays all the rosbag jobs running on the device and you can download the rosbag files.
![rosbag-job-details](/images/dev-guide/rosbag-jobs/rosbag-job-device-details.png?classes=border,shadow&width=60pc)

## Rosbag Files

A rosbag file is uploaded to the platform automatically if the rosbag job is stopped, if the deployment is de-provisioned, or if the upload mode is continuous. 
You can access the rosbag files and change the upload mode on the deployments page. 

In the rapyuta.io console, navigate to the **Deployments** page, select the deployment, and click **ROSBag Jobs** tab to view all the running rosbag jobs for the deployment. You can also perform the following operations:

1. Click **Add new ROS Bag job** to add a new rosbag job.

2. Click **Stop** to stop a rosbag job. A pop-up warning message appears. Click **Yes**.

3. To view the rosbags within a specific time frame, select the date and time in the start and end date fields and click **Ok**.

4. For on-demand upload mode, click the **Get rosbags** icon to initiate the collection of rosbags.

5. You can also view the following details:
 
![rosbag-jobs](/images/dev-guide/rosbag-jobs/rosbag-jobs.png?classes=border,shadow&width=55pc)

| Field | Description |
| ---   | --- |  
| Bag Name | Displays the name of the rosbag file. |
| Status | Displays whether the recorded rosbag file is uploading, uploaded, or in the error state. The rosbag file can be in any one of the following states: <br> * Uploading: The rosbag file is getting uploaded to the platform after the rosbag job is stopped or the deployment is de-provisioned. <br> * Uploaded:  The file is uploaded to the platform successfully and you can download the file to your local system for further analysis and troubleshooting. <br> * Error: The recording of the rosbag file is not successful and the rosbag file is not available. You can click the **Error** link to raise a support ticket for a resolution. |
| Messages | Displays the number of recorded messages.|
| Size | Displays the file size.|
| End | Displays when the recording is stopped.|
| Duration | Displays the total running time of the rosbag jobs.|
| Indexed | If the **Indexed** field is marked with a green tick icon, it implies that the rosbag file is indexed and contains valid recordings of topics. If the **Indexed** field is marked with a red cross icon, it implies that the rosbag file is not indexed and does not contain valid recordings of topics. |
| Actions | You can either download or delete the rosbag file. Click the **webviz** icon to visualize the rosbags in the webviz app. |

6. To change the upload mode, click **Job Details** and select the mode.

![rosbag-upload](/images/dev-guide/rosbag-jobs/rosbag-upload.png?classes=border,shadow&width=55pc)


### Available Actions on a Rosbag File

After a running rosbag job is uploaded to the platform, you can perform the following available actions.

* To have a quick view of the details of the recorded topics, click the rosbag file that is uploaded. A pop-up message box appears detailing the recorded topics. 
![bag-topics](/images/dev-guide/rosbag-jobs/topic-bags.png?classes=border,shadow&width=30pc)
* To download the available rosbag file, click the download icon.
* To delete the uploaded rosbag file, click the delete icon.
