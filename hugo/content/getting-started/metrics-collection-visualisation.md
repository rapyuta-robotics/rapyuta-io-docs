---
title: "Collecting and Visualising Device Metrics"
description:
type: getting-started
date: 2018-11-29T16:25:57+05:30
pre: "o. "
weight: 350
---
[rapyuta.io](https://console.rapyuta.io) enables you to visualize metrics data that is
collected from a device like a sensor measuring the temperature of its surroundings.
A graph is generated with the data plotted against the time intervals.

1. Click **DEVICES** > select a device for visualizing its metrics > click **Metrics**.
2. You will have to first subscribe to a ROS topic so as to visualize the data being published by the topic. To subscribe to a topic, click **Subscribe**.
![Subscribe Topic](/images/getting-started/collect-visualise-metrics/subscribe-sys-metrics.png?classes=border,shadow&width=40pc)
3. To add a new visualization, click **Add Cell**.
![Add Cell](/images/getting-started/add-cell.png?classes=border,shadow&width=70pc)
4. Click **Add a Query**.
![Add Query](/images/getting-started/add-query.png?classes=border,shadow&width=70pc)
5. Select a metric, for instance, **TestIntTopic** in this example.
6. Select field like **data** in this example.
![Select Data](/images/getting-started/select-field-data.png?classes=border,shadow&width=70pc)
7. You may plot multiple functions such as mean, sum, median by clicking **1 Function**. Select the functions you want to visualize on the graph like *mean* in this example, and then click **Apply**.
![Plot Function](/images/getting-started/function.png?classes=border,shadow&width=70pc)
8. You may change the shape of the graph by selecting one of the available graph forms like *line*, *stacked*, *step-plot* or *bar*. In this example, a **Bar** graph is selected. To confirm the current settings, click the red colored check mark box at the top-right corner.
![Bar chart](/images/getting-started/bar-chart.png?classes=border,shadow&width=70pc)
9. To edit the ***title*** of the graph, click the pencil icon at the top right corner of the cell as indicated by 1 in the below image.
10. To modify the ***current graph settings***, click the wheel icon at the top right corner of the cell as indicated by 2 in the below image.
11. To ***close*** the cell, click on the cross mark at the top right corner of the cell as indicated by 3 in the below picture.
![Graph Window Options](/images/getting-started/graph-window.png?classes=border,shadow&width=70pc)
12. To change the refresh interval, click **Every 5 seconds** drop-down list and select your desired interval.
![Refresh Interval](/images/getting-started/refresh-interval.png?classes=border,shadow&width=70pc)
13. To change the time range, click **Past 5 minutes** drop-down list and select your desired range.
![Time Range](/images/getting-started/time-range.png?classes=border,shadow&width=70pc)
