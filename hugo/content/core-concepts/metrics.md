---
title: "Device Metrics & QoS Guarantee"
description:
type: core-concepts
date: 2018-11-21T19:32:57+05:30
pre: "l. "
weight: 197
---
You can visualise various system metrics of a device. Metrics like:

* CPU load average
* Memory usage
* Disk usage
* Disk IO
* Network IO interface

will be available to you by default. You have to susbcribe to a
specific metric to collect and visualise data measurements.

## Network IO Interface
You can monitor and analyse real-time network performance metrics.
For instance, you can collect upload and download rate per second for all interfaces for the last hour. When you subscribe to network IO per interface metric,
you will be shown a visualisation (like a graph with x-axis and y-axis) with the following measurements:

* ***bytes_sent*** is the total number of bytes sent by the network interface
* ***bytes_recv*** is the total number of bytes received by the network interface
* ***packets_sent*** is the total number of packets sent by the network interface
* ***packets_recv*** is the total number of packets received by the network interface
* ***error_in*** is the total number of receive errors detected by the network interface
* ***error_out*** is the total number of transmit errors detected by the network interface
* ***drop_in*** is the total number of received packets dropped by the network interface
* ***drop_out*** is the total number of transmitted packets dropped by the network interface

## Disk usage
When you subscribe to disk usage metrics, a graph is shown with the following data measurements:

* ***free*** is the amount of disk space that is freely available. It is an integer value shown as byte.
* ***total*** is the total amount of disk space. It is an integer value shown as byte.
* ***used*** is the amount of disk space that is in use. It is an integer value shown as byte.
* ***used_percent*** is the percentage of disk space used. It is a floating-point value shown as percentage.
* ***inodes_free*** is the number of free inodes. It is an integer value shown as files.
* ***inodes_used*** is the number of used inodes. It is an integer value shown as files.
* ***inodes_total*** is the total number of inodes. It is an integer value shown as files.

## Disk IO
You can gather metrics about disk traffic and timing by subscribing
to the disk IO, the graph of which displays a list of data measurements as given below:

* ***reads*** is a counter that increments when a read request completes. It is an integer value.
* ***writes*** is a counter that increments when a write request completes. It is an integer value.
* ***read_bytes*** is the count of the number of bytes read from the device. It is an integer value shown as byte.
* ***write_bytes*** is the count of the number of bytes written to the device. It is an integer value shown as byte.
* ***read_time*** is the count of the number of milliseconds that read requests have waited on the device. It is an integer value shown as milliseconds.
* ***write_time*** is the count of the number of milliseconds that write requests have waited on the device. It is an integer value shown as milliseconds.
* ***io_time*** is the count of the number of milliseconds during which the device has had IO requests queued. It is an integer value shown as milliseconds.
* ***weighted_io_time*** is the count of the number of milliseconds that IO requests have waited on the device.
* ***iops_in_progress*** is the count of the number of IO requests that have been issued to the device but have not yet completed. It does not include IO requests that are in the queue but not yet issued to the device.

## Memory usage
You can collect and visualise device memory metrics by subscribing to the memory usage system metric. A graph is displayed with a list of data measurements as given below:

* ***available*** is the amount of memory that is available. It is an integer value shown as byte
* ***available_percent*** is the percentage of memory that is available. It is a floating-point value shown as percentage
* ***buffered*** is the amount of physical RAM used as cache memory. It is an integer value shown as byte
* ***cached*** is the amount of physical RAM used as cache memory. It is an integer value shown as byte
* ***free*** is the amount of free RAM. It is an integer value shown as byte
* ***inactive*** is the amount of memory that hasn't been used in some way. It is an integer value shown as byte
* ***slab*** is the amount of memory used by the kernel to cache data structures for its own use. It is an integer value shown as byte
* ***total*** is the total amount of physical RAM. It is an integer value shown as byte.
* ***used*** is the amount of RAM in use. It is an integer value shown as byte.
* ***used_percent*** is the percentage of memory currently in use. It is a floating-point value shown as percentage
* ***active*** is the amount of memory that has been used in some way. It is an integer value shown as byte.
* ***wired*** is the memory where the kernel and other low level components like device drivers and vitual memory objects are stored.

## CPU load average
You can determine the percentage of CPU used by a user, process or system by subscribing to CPU load average metric. You can analyse the following data measurements from its graph:

* ***usage_guest*** is the percentage of time that the CPU is running a virtual CPU for a guest operating system
* ***usage_guest_nice*** is the percentage of time that the CPU is running a virtual CPU for a guest operating system, which is low priority and can be interrupted by other processes.
* ***usage_idle*** is the percentage of time that the CPU is idle
* ***usage_iowait*** is the percentage of time that the CPU is waiting for IO operations to complete
* ***usage_irq*** is the percentage of time that the CPU is servicing interrupts
* ***usage_nice*** is the percentage of time that the CPU is in user mode with a low priority process, which a higher priority process can interrupt
* ***usage_softirq*** is the percentage of time that the CPU is servicing software interrupts 
* ***usage_steal*** is the percentage of time that the CPU is in stolen time or time spent in other operating systems in a virtualised environment
* ***usage_system*** is the percentage of time that the CPU is in system mode
* ***usage_user*** is the percentage of time that the CPU is in user mode

{{% notice info %}}
Follow how to [visualise device metrics data](/getting-started/metrics-collection-visualisation) guide.
{{% /notice %}}

## QoS guarantee
The QoS guarantee level is an agreement between the sender of a message and the receiver of a message that defines the guarantee of delivery for a specific message. In rapyuta.io, the messages are generally metrics or logs of a device, which are sent to rapyuta.io servers.

{{% notice note %}}
QoS guarantee levels described here are ***different*** from the QoS guarantee that you set while adding a new rapyuta.io package.
{{% /notice %}}

There are three QoS levels:

* Low
* Medium
* High

#### Low QoS guarantee
The minimum QoS level is *Low*. This level guarantees best-effort delivery. There is no guarantee of delivery. The metrics or logs are neither stored nor re-transmitted by the sender. Use Low QoS level when you have a completely or mostly stable connection between sender and receiver. The loss of some metrics or logs can be acceptable if data is not that important.

#### Medium QoS guarantee
*Medium* QoS level guarantees that metrics or logs are delivered at least once to the receiver. It is possible for the data to be delivered multiple times. Use Medium QoS level when you need to get every data and your application can tolerate duplicates and be able to process them accordingly.

#### High QoS guarantee
The maximum QoS level is *High*. This level guarantees that each metric or log is received only once by the receiver. It is the safest and slowest QoS level. Use High QoS level it is critical to your application to receive all data exactly once or if a duplicate delivery can harm your application users or subscribing clients.
