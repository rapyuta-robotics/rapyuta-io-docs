---

title: "System Metrics"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weigth: 544

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


Subscribing to system metrics will display a graphical visualization (like a graph with metrics data plotted along x-axis and time along the y-axis) of the metrics.

Read the metrics reference to know the data fields included in each system metric.

## Network IO Interface
You can monitor and analyze real-time network performance metrics. For instance, you can collect upload and download rate per second for all interfaces for the last hour. The following metrics reference includes the kind of data measured in a network IO graph.

Some of the metrics data measured in a network IO interface graph are:

* **bytes_sent** is the total number of bytes sent by the network interface
* **bytes_recv** is the total number of bytes received by the network interface
* **packets_sent** is the total number of packets sent by the network interface
* **packets_recv** is the total number of packets received by the network interface
* **error_in is** the total number of receive errors detected by the network interface
* **error_out** is the total number of transmit errors detected by the network interface
* **drop_in** is the total number of received packets dropped by the network interface
* **drop_out** is the total number of transmitted packets dropped by the network interface

## Disk usage
Subscribing to disk usage metrics displays a graph that shows the information on disk usage metrics like available disk space, percentage of disk space used, etc.

Some of the metrics data measured in a disk usage graph are:

* **free** is the amount of disk space that is freely available. It is an integer value shown as byte.
* **total** is the total amount of disk space. It is an integer value shown as byte.
used is the amount of disk space that is in use. It is an integer value shown as byte.
* **used_percent** is the percentage of disk space used. It is a floating-point value shown as percentage.
* **inodes_free** is the number of free inodes. It is an integer value shown as files.
* **inodes_used** is the number of used inodes. It is an integer value shown as files.
* **inodes_total** is the total number of inodes. It is an integer value shown as files.

## Disk IO
You can gather metrics about disk traffic and timing by subscribing to the disk IO. Read more to know the kind of information collected by disk IO metric.

Some of the metrics data measured in a disk IO interface graph are:

* **reads** is a counter that increments when a read request completes. It is an integer value.
* **writes** is a counter that increments when a write request completes. It is an integer value.
* **read_bytes** is the count of the number of bytes read from the device. It is an integer value shown as byte.
* **write_bytes** is the count of the number of bytes written to the device. It is an integer value shown as byte.
* **read_time** is the count of the number of milliseconds that read requests have waited on the device. It is an integer value shown as milliseconds.
* **write_time** is the count of the number of milliseconds that write requests have waited on the device. It is an integer value shown as milliseconds.
* **io_time** is the count of the number of milliseconds during which the device has had IO requests queued. It is an integer value shown as milliseconds.
* **weighted_io_time** is the count of the number of milliseconds that IO requests have waited on the device.
* **iops_in_progress** is the count of the number of IO requests that have been issued to the device but have not yet completed. It does not include IO requests that are in the queue but not yet issued to the device.

## Memory usage
You can collect and visualize device memory metrics by subscribing to the memory usage system metric. To know more about the data fields associated with memory usage, read here.

Some of the metrics data measured in a memory usage graph are:

* **available** is the amount of memory that is available. It is an integer value shown as byte.
* **available_percent** is the percentage of memory that is available. It is a floating-point value shown as percentage
* **buffered** is the amount of physical RAM used as cache memory. It is an integer value shown as byte
* **cached** is the amount of physical RAM used as cache memory. It is an integer value shown as byte
* **free** is the amount of free RAM. It is an integer value shown as byte
inactive is the amount of memory that hasn’t been used in some way. It is an integer value shown as byte
* **slab**   is the amount of memory used by the kernel to cache data structures for its use. It is an integer value shown as byte
* **total** is the total amount of physical RAM. It is an integer value shown as byte.
* **used** is the amount of RAM in use. It is an integer value shown as byte.
* **used_percent** is the percentage of memory currently in use. It is a floating-point value shown as percentage
* **active** is the amount of memory that has been used in some way. It is an integer value shown as byte.
* **wired** is the memory where the kernel and other low-level components like device drivers and virtual memory objects are stored.

## CPU load average

You can determine the percentage of CPU used by a user, process, or system by subscribing to the CPU load average metric. Read the CPU load average reference to understand the several data measurements plotted in the graph.

Some of the metrics data measured in a CPU load average graph are:

* **usage_guest** is the percentage of time that the CPU is running a virtual CPU for a guest operating system
* **usage_guest_nice** is the percentage of time that the CPU is running a virtual CPU for a guest operating system, which is low priority and can be interrupted by other processes.
* **usage_idle** is the percentage of time that the CPU is idle
usage_iowait is the percentage of time that the CPU is waiting for IO operations to complete
* **usage_irq** is the percentage of time that the CPU is servicing interrupts
* **usage_nice** is the percentage of time that the CPU is in user mode with a low priority process, which a higher priority process can interrupt
* **usage_softirq** is the percentage of time that the CPU is servicing software interrupts
* **usage_steal** is the percentage of time that the CPU is in stolen time or time spent in other operating systems in a virtualized environment
* **usage_system** is the percentage of time that the CPU is in system mode
* **usage_user** is the percentage of time that the CPU is in user mode

## Wireless

You can monitor and analyze the signal strength of a wifi connection by subscribing to the wireless metric. This information is extracted from /proc/net/wireless when a device is connected to a wifi connection. Read the wireless reference to understand what kind of data will be collected when it is subscribed. For more information, [click here](https://linux.die.net/man/8/iwconfig)


## Matrics Visualization


1. Click **DEVICES** > select the device which is publishing ***/random*** topic > click **Metrics**.
2. To visualize the data being published by a ROS topic, you will have to first subscribe to the ROS topic by clicking **Subscribe**. In this example, subscribe to the ***/random*** ROS topic.
![Subscribe topic](/images/chapters/developer-guide/tooling-automation/metrics/click-subscribe.png?classes=border,shadow&width=50pc)
![Subscribed topic](/images/chapters/developer-guide/tooling-automation/metrics/subscribe-rostopic.png?classes=border,shadow&width=50pc)
1. To add a new visualization, click **Add Cell**.
![Add Cell](/images/getting-started/add-cell.png?classes=border,shadow&width=70pc)
1. Click **Add a Query**.
![Add Query](/images/getting-started/add-query.png?classes=border,shadow&width=70pc)
5. Select the ROS topic whose metrics need to be plotted on a graph. In this example, select the ***/random*** topic.
![Select topic](/images/chapters/developer-guide/tooling-automation/metrics/select-random.png?classes=border,shadow&width=50pc)
6. Select the topic's field like **data** in this example.
![Select Data](/images/chapters/developer-guide/tooling-automation/metrics/select-data.png?classes=border,shadow&width=50pc)
7. You may plot multiple functions such as mean, sum, median in the same graph. Click on **1Function** button to open the list of fuctions available. Select the functions you want to visualize on the graph like *mean* in this example, and then click **Apply**.
![Plot Function](/images/chapters/developer-guide/tooling-automation/metrics/select-function.png?classes=border,shadow&width=50pc)
8. You may change the type of the graph by selecting one of the available graph forms like ***line***, ***stacked***, ***step-plot*** or ***bar***. In this example, a **Bar** graph is selected. To confirm the current settings, click the red colored checkmark at the top-right corner.
![Bar graph](/images/chapters/developer-guide/tooling-automation/metrics/bar-graph.png?classes=border,shadow&width=50pc)
9. To edit the ***title*** of the graph, click the pencil icon at the top right corner of the cell as indicated by 1 in the below image.
10. To modify the ***current graph settings***, click the wheel icon at the top right corner of the cell as indicated by 2 in the below image.
11. To ***delete*** the cell, click on the cross mark at the top right corner of the cell as indicated by 3 in the below picture.
![Graph Window Options](/images/getting-started/graph-window.png?classes=border,shadow&width=70pc)
12. To change the refresh interval, click **Every 60 seconds** drop-down list and select your desired interval.
13. To change the time range, click **Past 5 minutes** drop-down list and select your desired range.
14. The final graph may look like the one below:
![Final graph](/images/chapters/developer-guide/tooling-automation/metrics/graph-1.png?classes=border,shadow&width=50pc)


{{% notice note %}}
The procedure to visualize the system metrics is the same as
the procedure to visualize metrics from a ROS topic as explained
above.
{{% /notice %}}


