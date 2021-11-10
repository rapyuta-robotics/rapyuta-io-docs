---

title: "User Metrics"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 545

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

Metrics helps you to manage and monitor applications. The applications deployed on rapyuta.io platform can now produce customized metrics based on the user requirement. 

Suppose a user application requires monitoring, additional metrics apart from the existing system metrics are required to monitor their application.
<br>For example, the robot.battery_charge metric provides information on the amount of charge present in the battery of the robot and robot.distance_travelled metric provides information on the distance travelled across the warehouse. Suppose the app fails to inform the robots that it should go to the charging station, additional information will not be present as the robot might shut itself down. In such a situation you can use the user metrics to conclude the reason for failure by viewing the graph of the robot.battery_charge metric using the Grafana plugin.

{{% notice note%}}
Custom metrics are now sent using the User Metrics. <br>
Currently, user metrics is only supported on docker devices. For more information, see [Containerized: Docker Runtime](https://userdocs.rapyuta.io/5_deep-dives/51_managing-devices/511_device-runtime/#containerized-docker-runtime)
{{% /notice %}}

#### io_metrics ROS topic

A ROS deployment automatically starts the ROS master and the io_metrics_collector ROS node which subscribes and listens to the io_metrics ROS topic. Messages are sent from this ROS topic to the metrics pipeline which in turn is stored in the cloud. The messages can be visualized using the Grafana plugin.

#### ROS Message Types

The ROS topics message type uses the [ros_monitoring_msgs](https://github.com/aws-robotics/monitoringmessages-ros1#aws-ros-monitoringmessages-ros1) package as they provide pre-existing ubuntu packages. <br>
To view the message types, add `<depend>ros_monitoring_msgs</depend>` to the package.xml file. Alternatively, you can manually install it using the following commands.

```bash
. /opt/ros/<distro>/setup.bash
sudo apt-get update
sudo apt-get install -y ros-$ROS_DISTRO-ros-monitoring-msgs
```
#### Message Type Format
Following is a sample message format:
```python
 MetricData(
            metric_name='robot.battery_charge',
            unit=MetricData.UNIT_PERCENTAGE,
            value=100 - (count * 10),
            dimensions=robot_dimensions,
        )
```
The following table describes the message format:
| Field  | Description |
| ------------- | ------------- |
| metric_name  | Defines the subsystem/group and the metric field that is being collected. <br> Format: `<group>.<field>` <br> Example: robot.battery_charge, robot.distance_travelled etc.
| unit | Measurement unit of the metric field. <br> Custom: any string. <br> For a list of predefined units, see  [Commonly used units](https://github.com/aws-robotics/monitoringmessages-ros1/blob/master/ros_monitoring_msgs/msg/MetricData.msg#L4-L20). |
| value | Float value of the metric. For example, the value for the metric robot.battery_charge can be 10,20,100 etc.
| timestamp | Automatically sets to device's time. |  
| dimensions | Key-value pairs to augment metric with relevant data. For example, charge cycle can be set for the metric robot.battery_charge.|

You can view a sample application [here](https://github.com/shivamMg/io_tutorials/blob/feature/user_metrics/talk/metrics_publisher/publisher.py).

These metrics can be visualized using the Grafana Plugin. For more information, see <add link>


