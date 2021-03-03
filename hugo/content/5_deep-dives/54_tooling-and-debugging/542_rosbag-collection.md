---

title: "ROS bag Collection"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 542

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
    - Deep Dive
---

A ROS bag is a file format in ROS for storing ROS message data. The rapyuta.io platform allows you to record the ROS messages (ROS topics) for ROS enabled components deployed on the cloud or device (with docker runtime).

After you deploy a package, you can view the ROS bag jobs in the **ROS Bag Jobs** tab on the deployment details page.


If you have added a ROS bag job for a component either during package creation or deployment, You can add new ROS bag jobs for the same components in the **ROS Bag Jobs** tab after you have deployed the package. To add new jobs, click **Add new ROS Bag job**. For more information, [click here](/3_how-tos/35_tooling_and_debugging/working-with-rosbags/).

{{% notice note %}}
If you have not added any ROS bag job for a component during deployment or package creation, you cannot add a ROS bag job later in the **ROS Bag Jobs** tab.

{{% /notice %}}

{{% notice info %}}
If the deployed component is a non-ROS component, or you have not added any ROS bag job during package creation or deployment, the **ROS Bag Jobs** tab is not available.
{{% /notice %}}

{{%notice note%}}
The port for the ROS Bag recorder (the component responsible for collecting ROS bags in a device) has been changed from 9001 to 9010 and uses 8008. Avoid using these ports in your applications.
{{%/notice%}}