---
title: "ROS Support"
description:
type: developer-guide
date: 2019-10-25T13:27:22+05:30
pre: "c. "
weight: 541
---
## ROS Data Collection
You can collect data by subscribing to ROS topics of deployed
ROS applications. rapyuta.io supports primitive data types:

* boolean
* integer (8, 16, 32, 64-bit)
* floating-point (32, 64-bit)
* byte
* character
* string
* time and duration

{{% notice info %}}
It also supports ***user-defined*** or ***custom ROS message types***.
{{% /notice %}}

Nested ROS messages are flattened and are displayed as a dictionary.
For example, consider a nested message ***geometry_msgs/PoseArray***
as shown below:

```bash
{
    header: {
        frame_id: 'base_frame'
    },
    poses: [
        {
            position: {
                x: 1.0,
                y: 0.0,
                z: 0.0
            },
            orientation: {
                x: 0.0,
                y: 0.0,
                z: 0.0,
                w: 1.0
            }
        },
        {
            position: {
                x: 1.1,
                y: 0.0,
                z: 0.0
            },
            orientation:{
                x: 0.0,
                y: 0.0,
                z: 0.0,
                w: 1.0
            }
        }
    ]
}
```

After flattening the above nested ROS message, it will look like:

```bash
{
    "poses_0_orientation_w":1,
    "poses_0_orientation_x":0,
    "poses_0_orientation_y":0,
    "poses_0_orientation_z":0,
    "poses_0_position_x":1,
    "poses_0_position_y":0,
    "poses_0_position_z":0,
    "poses_1_orientation_w":1,
    "poses_1_orientation_x":0,
    "poses_1_orientation_y":0,
    "poses_1_orientation_z":0,
    "poses_1_position_x":1.1,
    "poses_1_position_y":0,
    "poses_1_position_z":0,
}
```
Any other data type (like bytearray, empty ROS message type) is
not be supported and will be silently ignored.

{{% notice note %}}
Suppose a ROS topic is defined such that its data type is
string alone (that is the data type contains no other
primitive types). As you subscribe to this ROS topic you will
be instantly unsubscribed from that topic. This is the expected
behaviour for ROS topics of *purely string* data type.
{{% /notice %}}