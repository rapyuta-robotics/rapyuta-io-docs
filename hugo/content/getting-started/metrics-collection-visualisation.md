---
title: "Collecting and Visualising Device Metrics"
description:
type: getting-started
date: 2018-11-29T16:25:57+05:30
pre: "n. "
weight: 250
---
rapyuta.io enables a device to push metrics data out, and lets you visualise
the telemetry data in the [console](https://closed-beta.rapyuta.io).

## Collect Device Metrics
You can collect telemetry data that a ROS topic publishes on a device and
store it in rapyuta.io.

To collect device metrics, follow the steps:

1. Create a ROS publisher on the device to publish telemetry data.
	```bash
	rostopic pub -r 1 /test_topic std_msgs/Float32 5.0
	```

2. click **DEVICES** > select the device on which you just created the ROS publisher > click **Metrics** tab.
3. You will see a list of published ROS topics. If you cannot view an updated list of ROS topics, try refreshing the web page.
4. To subscribe to a ROS topic you want to visualise, click **Subscribe**.

## Visualise device metrics
You can visualise a device's telemetry data and metrics data in [rapyuta.io console](https://closed-beta.rapyuta.io).

1. Click **DEVICES** > select a device for visualising its metrics > click **Metrics**.
2. To subscribe to a topic, click **Subscribe**.
![Subscribe Topic](/images/getting-started/subscribe-topic.png?classes=border,shadow&width=70pc)
3. To add a new visual, click **Add Cell**.
![Add Cell](/images/getting-started/add-cell.png?classes=border,shadow&width=70pc)
4. Click **Add a Query**.
![Add Query](/images/getting-started/add-query.png?classes=border,shadow&width=70pc)
5. Select a metric such as **TestIntTopic** in this example.
6. Select field such as **data** in this example.
![Select Data](/images/getting-started/select-field-data.png?classes=border,shadow&width=70pc)
7. To plot a function say mean, sum, median etc. against the time axis, click **1 Function**. You can apply more than one function.
![Plot Function](/images/getting-started/function.png?classes=border,shadow&width=70pc)
8. To change the form of visualisation, click one of the available visualisation graphs such as **Bar**. To close settings, click the red colored check mark box at the top-right corner.
![Bar chart](/images/getting-started/bar-chart.png?classes=border,shadow&width=70pc)
10. To edit the title of the graph, click the pencil icon at the top right corner of the cell as indicated by 1 in the below image.
11. To change settings of the graph, click the wheel icon at the top right corner of the cell as indicated by 2 in the below image.
12. To close the cell, click on x at the top right corner of the cell as indicated by 3 in the below picture.
![Graph Window Options](/images/getting-started/graph-window.png?classes=border,shadow&width=70pc)
13. To change the refresh interval, click **Every 5 seconds** drop-down list and select your desired interval.
![Refresh Interval](/images/getting-started/refresh-interval.png?classes=border,shadow&width=70pc)
14. To change the time range, click **Past 5 minutes** drop-down list and select your desired range.
![Time Range](/images/getting-started/time-range.png?classes=border,shadow&width=70pc)
