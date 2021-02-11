---

title: "ROS bag Collection"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weigth: 542

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



A ROS bag is a file format in ROS for storing ROS message data. The rapyuta.io platform allows you to record the ROS messages (ROS topics) for ROS enabled components deployed on the cloud.

After you deploy a package, you can view the ROS bag jobs in the **ROS Bag Jobs** tab on the deployment details page.


If you have added a ROS bag job for a component either during package creation or deployment, You can add new ROS bag jobs for the same components in the **ROS Bag Jobs** tab after you have deployed the package. To add new jobs, click **Add new ROS Bag job**. To know more about the field description, [click here](/developer-guide/create-software-packages/ros-support/#creating-rosbag-jobs).

{{% notice note %}}
If you have not added any ROS bag job for a cloud component during deployment or package creation, you cannot add a ROS bag job later in the **ROS Bag Jobs** tab.

{{% /notice %}}

{{% notice info %}}
If the deployed component is a non-ROS component, or you have not added any ROS bag job during package creation or deployment, or the selected runtime is device, the **ROS Bag Jobs** tab is not available.
{{% /notice %}}
