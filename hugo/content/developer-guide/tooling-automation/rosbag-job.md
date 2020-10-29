---
title: "Rosbag Jobs"
description:
type: developer-guide
date: 2020-10-28T13:22:44+05:30
pre: "2. "
weight: 515
---
A rosbag is a file format in ROS for storing ROS message data. The rapyuta.io platform allows you to record the ROS messages (ros topics) for ROS enabled components deployed on the cloud.

After you deploy a package, you can view the rosbag jobs in the **ROS Bag Jobs** tab on the deployment details page.


You can also add new rosbag jobs in the **ROS Bag Jobs** tab after you have deployed a package. To add new jobs, click **Add new ROS Bag job**. To know more about the field description, [click here](/developer-guide/create-software-packages/ros-support/#creating-rosbag-jobs).

### Viewing Details of a ROS Bag Job

* To view the details of the job, click **Stop** next to the rosbag job name. A pop-up warning message appears. Click **Yes**. The platform takes some time and the details of the recorded topics are available. You can view the following details.
The **ROS Bag Jobs** tab lists all the running rosbag jobs for the deployment. 
![rosbag-jobs](/images/dev-guide/rosbag-jobs/rosbag-jobs.png?classes=border,shadow&width=55pc)

    * **Bag Name**: Displays the name of the rosbag file.
    * **Status**: Displays whether the recorded rosbag file is uploaded or in the error state. If the status is **Uploaded**, that implies that the file is uploaded to the platform successfully and you can download the file to your local system for further analysis and troubleshooting. If the status is in **Error** state, it implies that the recording of the rosbag job is not successful and the rosbag file is not available.
    * **Messages**: Displays the number of recorded messages.
    * **Size**: Displays the memory size of the recorded files.
    * **Start**: Displays the start time of the recording.
    * **End**: Displays when the recording is stopped.
    * **Duration**: Displays the total time duration for the rospag job that was run.
    * **Indexed**: If the **Indexed** field is marked with a green tick icon, it implies that the rosbag file is indexed and contains valid recordings of topics. If the **Indexed** field is marked with a red cross icon, it implies that the rosbag file is not indexed and does not contain valid recordings of topics.
    * **Actions**: You can either download the rosbag file or delete the file.

#### Available actions on a ROS Bag Job

After a running rosbag job is stopped, you can perform the following available actions.

* To have a quick view of the details of the recorded topics, click the rosbag file that is uploaded. A pop-up message box appears detailing the recorded topics. 

* To download the available rosbag file, click the download icon.
* To delete the stopped rosbag job, click the delete icon.




