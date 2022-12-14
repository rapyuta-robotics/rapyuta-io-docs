---

title: "User Metrics"
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

Metrics help you to monitor applications. rapyuta.io platform can now collect custom metrics based on user requirement. rapyuta.io also provides Grafana with its custom data source to visualize such metrics.

Suppose a user application requires monitoring, additional metrics apart from the existing system metrics can now be collected to monitor their application.

## Device User Metrics
Device user metrics are custom metrics collected from devices to monitor your applications. <br>For example, a robot.battery_charge metric provides information on the amount of charge present in the battery of the robot and a robot.distance_traveled metric provides information on the distance traveled across the warehouse. Suppose the application fails to send the robot to the charging station in case of low battery, additional information will not be present as the robot might shut itself down. In such a situation you can view the metric robot.battery_charge to conclude the reason for failure. 

### Rapyuta IO Metrics Collector
For collecting user metrics for ROS device deployments, the **Rapyuta IO Metrics Collector** is enabled by default. **/io_metrics_collector** ROS node will try to contact ROS master, and expose **/io_metrics** topic. Messages are sent from this ROS topic to the metrics pipeline, which is stored in the cloud. The metrics can be visualized using the Grafana data source.
For more information on **/io_metrics topic**, see [/io_metrics ROS topic](/5_deep-dives/54_tooling-and-debugging/545_user_metrics/#io_metrics-ros-topic)

To collect and send user metrics for non-ROS device deployments, use the UDP endpoint 127:0.0.1:8092. 

Following is a sample UDP request using netcat:

```bash
echo -n '{"name": "http_duration", "tags": {"method": "GET", "path": "/api/v0", "is_user_metric": "true"}, "fields": {"seconds": 1.2}}' | netcat -u  127.0.0.1 8092
```

{{% notice note%}}
The user application needs to set the mandatory tag "is_user_metric" to "true" while publishing metrics. 
The user application can also use the environment variable `RIO_DeploymentId` as tags to identify the user metrics based on the deployment id.
{{% /notice %}}

## Cloud User Metrics
Cloud user metrics are custom metrics collected from Cloud Deployments. They help you analyze your applications that are running on the Cloud. <br>For example, an HTTP server application uses the request_duration metric to collect information about the number of requests and the request duration. The *Deployment ID* and *Name* are automatically added as tags to these metrics. This helps you distinguish metrics of different deployments.

### ROS Endpoint
ROS deployments can use the /io_metrics ROS topic for publishing metrics. For more information, see [/io_metrics ROS topic](/5_deep-dives/54_tooling-and-debugging/545_user_metrics/#io_metrics-ros-topic).

### UDP Endpoint
Use UDP endpoint in applications where speed is more critical and when no connection needs to be established between the source and destination before you transmit data. UDP provides low overhead data transport.<br>
You can send UDP messages to host `$IO_METRICS_HOST` at port `$IO_METRICS_UDP_PORT`, where the $IO_METRICS_HOST and $IO_METRICS_UDP_PORT are environment variables that are automatically available for your Deployment Executables.

Following is a sample UDP request using netcat:

```bash
echo -n '{"name": "http_duration", "tags": {"method": "GET", "path": "/api/v0"}, "fields": {"seconds": 1.2}}' | netcat -u  $IO_METRICS_HOST $IO_METRICS_UDP_PORT
```
You can view a complete sample Python application [here](https://github.com/rapyuta-robotics/io_tutorials/tree/master/talk/cloud_metrics_publisher). 

### HTTP Endpoint
Use HTTP endpoint for reliable data transfer. <br>
You can send HTTP request to host `$IO_METRICS_HOST` at port `$IO_METRICS_HTTP_PORT`, where the $IO_METRICS_HOST and $IO_METRICS_HTTP_PORT are environment variables that are automatically available for your Deployment Executables.

Following is a sample HTTP request using curl:

```sh
curl -XPOST $IO_METRICS_HOST:$IO_METRICS_HTTP_PORT/io_metrics --data '{"name": "http_duration", "tags": {"method": "GET", "path": "/api/v0"}, "fields": {"seconds": 1.2}}'
```
You can view a complete sample Python application [here](https://github.com/rapyuta-robotics/io_tutorials/tree/master/talk/cloud_metrics_publisher). 

{{% notice note%}}
rapyuta.io now supports django middleware. It collects the duration metrics for an HTTP request. For more information see, [django-riometrics-middleware](https://pypi.org/project/django-riometrics-middleware/)
{{% /notice %}}
<!--
TODO: remove comment after user metrics GA release. also, remove "Rapyuta IO Metrics Collector" section after that

{{% notice note%}}
Currently, user metrics is only supported on docker devices. For more information, see [Containerized: Docker Runtime](/5_deep-dives/51_managing-devices/511_device-runtime/#containerized-docker-runtime)
{{% /notice %}}

### /io_metrics ROS topic

A ROS deployment automatically starts the [ROS master](/5_deep-dives/52_software-development/526_package-ros-support/#implicit-ros-master) and the **io_metrics_collector** ROS node which subscribes and listens to the **/io_metrics** ROS topic. Messages are sent from this ROS topic to the metrics pipeline which in turn is stored in the cloud. The metrics can be visualized using the Grafana data source.
-->

## /io_metrics ROS topic
### ROS Message Types

The ROS message type for **/io_metrics** uses the [ros_monitoring_msgs](https://github.com/aws-robotics/monitoringmessages-ros1) package, which also has binary Ubuntu packages. <br>
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

## Install packaged Grafana data source

To install the packaged Grafana data source:

1. Execute the following commands to fetch the packaged data source:
   ```bash
   sudo mkdir -p /var/lib/grafana-plugins
   sudo chown $USER:$USER /var/lib/grafana-plugins
   wget -P /tmp https://grafanadatasource.blob.core.windows.net/grafanadatasource/rr-io-datasource-v0.1.0.zip
   unzip /tmp/rr-io-datasource-v0.1.0.zip -d /var/lib/grafana-plugins
   ```
2. Add the following to grafana-server's config. For more information, see [Config file locations](https://grafana.com/docs/grafana/latest/administration/configuration/#config-file-locations).
   ```bash
   [paths]
   plugins = /var/lib/grafana-plugins
   [plugins]
   allow_loading_unsigned_plugins = rr-io-datasource
   ```
3. Restart Grafana.
