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
---
TODO
## Defining ROS Bag Jobs for Packages
If you want to record the topics for any ROS component of a package, you can follow the steps below


### Creating Ros Bag Jobs

> **Pre-requisite**: Ensure that you have selected the runtime as cloud while creating a package and **Is ROS Component** is selected during [package creation](/developer-guide/create-software-packages/package-creation-tutorial/#creating-the-package).

1. Under the **Components** tab on the **Create New Package** page, click **Add ROS Bag Job**.
![add-rosbags](/images/dev-guide/rosbag-jobs/add-rosbag.png?classes=border,shadow&width=20pc)
2. In the **Name** field, type a name for the ROS bag job.
3. In the **Topic Names** field, type the name of the topic that you want to record.
4. Optionally, if you want to record all the topics available in the component, click the **All Topics?** toggle button.
![add-rosbags](/images/dev-guide/rosbag-jobs/rosbag-config.png?classes=border,shadow&width=35pc)
5. Optionally, if you want to record a series of topics that should match a regular expression value or regex, type the regex in the **Include Regex** field. 
6. Optionally, if you want to exclude the recording of a series of topics that should match a regular expression value or regex, type the regex in the **Exclude Regex** field. 
{{% notice info %}}
If you have enabled the **All Topics?** toggle button, **Topic Name** and  **Include Regex** fields are disabled.
{{% /notice %}}
7. You can also provide either **BZ2** or **LZ4** compression to the recorded topics based on your requirement and available disk sizes.
BZ2 generally produces smaller bags than LZ4. For more information about ROS compression, [click here](http://wiki.ros.org/rosbag/Commandline#compress). 

8. The advanced option allows you to record the topics with a more granular report. Optionally, to use the advanced option, click **Show Advanced Option** and do the following.</br>

![add-rosbags](/images/dev-guide/rosbag-jobs/advanced-rosbagjob.png?classes=border,shadow&width=55pc)
    a. In the **Node Name** field, type the node for which you want to record all the topics subscribed by the specific node.</li></br>
    b. In the **No. of Message** field, type the number of messages that you want to store for each topic.
    c. **Max Splits** field defines the maximum number of splits of the ROS bag files that are saved. Older splits are deleted after the **Max Splits** count is reached. To split the ROS bag file, in the **Max Splits** field, type the number of split that you want to allow. </br>
{{% notice info %}}

Maximum 10 splits are allowed for each ROS bag job. After the message recording reaches the maximum allowed splits, the older split files are deleted to maintain the specified memory limit. 
{{% /notice %}}
    d. Split Size is the file size after which the file is split. In the **Split Size** field, type the memory size for each split of the recorded messages in MB.</br>
{{% notice info %}}
Each split size must be more than 10 MB and less than 1024 MB or 1GB. 
{{% /notice %}}

{{% notice info %}}

Maximum 10 splits are allowed with the split size of more than 10 MB and less than 1 GB. However, the disk storage for the ROS bag file can not go beyond 5120 MB (5 GB).</br>
For example, you can configure 10 splits and each split can store up to 500 MB (10X500 MB=5 GB)  of recorded data or you configure 5 splits and each split can store up to 1024 MB (5x1024 MB=5 GB)  of recorded data. After the message recording reaches the maximum allowed splits, the older splits are deleted to maintain the specified memory limit. 
{{% /notice %}}
    e. To add the ROS bag job and start recording the defined topics, click **Add**.

{{% notice info %}}

You can also update the value of the ROS bag jobs during the time of deployment. The values added during the deployments overrides the values added during the package creation. 
{{% /notice %}}
    

## Recording rosbag on running deployments

## Downloading & viewing rosbags
