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

Metrics help you to monitor applications. rapyuta.io platform can now collect custom metrics based on user requirement.

Suppose a user application requires monitoring, additional metrics apart from the existing system metrics can now be collected to monitor their application.
<br>For example, a robot.battery_charge metric provides information on the amount of charge present in the battery of the robot and a robot.distance_traveled metric provides information on the distance travelled across the warehouse. Suppose the application fails to send the robot to the charging station in case of low battery, additional information will not be present as the robot might shut itself down. In such a situation you can view the metric robot.battery_charge to conclude the reason for failure. rapyuta.io also provides Grafana with its custom data source to visualize such metrics.

{{% notice note%}}
Currently, user metrics is only supported on docker devices. For more information, see [Containerized: Docker Runtime](https://userdocs.rapyuta.io/5_deep-dives/51_managing-devices/511_device-runtime/#containerized-docker-runtime)
{{% /notice %}}

### /io_metrics ROS topic

A ROS deployment automatically starts the [ROS master](https://user-v12docs.apps.okd4v2.okd4beta.rapyuta.io/5_deep-dives/52_software-development/526_package-ros-support/#implicit-ros-master) and the **io_metrics_collector** ROS node which subscribes and listens to the **/io_metrics** ROS topic. Messages are sent from this ROS topic to the metrics pipeline which in turn is stored in the cloud. The metrics can be visualized using the Grafana data source.

### ROS Message Types

The ROS message type for **/io_metric** uses the [ros_monitoring_msgs](https://github.com/aws-robotics/monitoringmessages-ros1) package, which also has binary Ubuntu packages. <br>
To use them in your ROS applications, add  `<depend>ros_monitoring_msgs</depend>` to the package.xml file as shown in this [sample application](https://github.com/shivamMg/io_tutorials/blob/feature/user_metrics/talk/metrics_publisher/package.xml).  
Alternatively, you can manually install it using the following commands.

```bash
. /opt/ros/<distro>/setup.bash
sudo apt-get update
sudo apt-get install -y ros-$ROS_DISTRO-ros-monitoring-msgs
```
### Message Fields
Following is a sample python code that defines a metric. You can view a complete sample ROS package [here](https://github.com/shivamMg/io_tutorials/blob/feature/user_metrics/talk/metrics_publisher).
```python
MetricList([
    MetricData(
        metric_name='robot.battery_charge',
        unit=MetricData.UNIT_PERCENTAGE,
        value=42,
        dimensions=[
            MetricDimension(name='cycle', value='cycle1'),
        ],
    )
])
```
The following table describes the message format:
| Field  | Description |
| ------------- | ------------- |
| metric_name  | Defines the subsystem/group and the metric field that is being collected. <br> Format: `<group>.<field>` <br> Example: `robot.battery_charge`, `robot.distance_travelled` etc.
| unit | Measurement unit of the metric field. <br> It can be any string or a predefined unit. <br> For a list of predefined units, see  [Commonly used units](https://github.com/aws-robotics/monitoringmessages-ros1/blob/master/ros_monitoring_msgs/msg/MetricData.msg#L4-L20). |
| value | Float value of the metric. For example, the value for the metric robot.battery_charge can be 10,20,100 etc.
| time_stamp | It is automatically set using device’s time before sending it to the cloud. |  
| dimensions | Key-value pairs to augment metric with relevant data. For example, charge cycle can be set for the metric robot.battery_charge.|

These metrics can be visualized using the Grafana data source. For more information, see <add link>

### Install packaged Grafana data source

Use the following steps to install the packaged Grafana data source.

1. Execute the following commands to fetch the packaged data source:
   ```bash
   sudo mkdir -p /var/lib/grafana-plugins
   sudo chown $USER:$USER /var/lib/grafana-plugins
   wget -P /tmp https://grafanadatasource.blob.core.windows.net/grafanadatasource/rr-io-datasource-v0.0.0.zip
   unzip /tmp/rr-io-datasource-v0.0.0.zip -d /var/lib/grafana-plugins
   ```
2. Add the following to grafana-server's config (See [Config file locations](https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations)):
   ```bash
   [paths]
   plugins = /var/lib/grafana-plugins
   [plugins]
   allow_loading_unsigned_plugins = rr-io-datasource
   ```
3. Restart Grafana.
