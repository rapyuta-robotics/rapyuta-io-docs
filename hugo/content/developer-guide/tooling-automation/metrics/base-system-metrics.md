---
title: "System Metrics"
description:
type: developer-guide
date: 2019-10-25T13:27:01+05:30
pre: "a. "
weight: 535
---
Subscribing to system metrics will display a graphical visualization
(like a graph with data plotted along x-axis and time along y-axis) of the metric.

{{% notice info %}}
Read the [metrics reference](/developer-guide/tooling-automation/metrics/reference/) to know the data fields included in each system metric.
{{% /notice %}}

## Network IO Interface
You can monitor and analyze real-time network performance metrics.
For instance, you can collect upload and download rate per second for all interfaces for the last hour.

## Disk usage
Subscribing to disk usage metrics displays a graph that shows
the information on disk usage metrics like available disk space,
percentage of disk space used, etc.

## Disk IO
You can gather metrics about disk traffic and timing by subscribing
to the disk IO.

## Memory usage
You can collect and visualize device memory metrics by subscribing to
the memory usage system metric.

## CPU load average
You can determine the percentage of CPU used by a user, process, or system by subscribing to CPU load average metric.

## Wireless
You can monitor and analyze the signal strength of a wifi connection by subscribing to the wireless metric. This information is extracted from ***/proc/net/wireless*** when a device is connected to a wifi connection.