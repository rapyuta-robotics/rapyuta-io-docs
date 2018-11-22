---
title: "Device Logs"
description:
type: core-concepts
date: 2018-11-20T18:51:11+05:30
weight: 140
---
By default, device logs are not collected until you explicitly subscribe to a
ROS topic.

Before viewing device logs, it is necessary to have the ROS Master up and running.
Add a _ROS Publisher_ package that has a _Talker_ component with device runtime.
It publishes `/telemetry` ROS topic with **High** **QoS**.

1. On left navigation bar, click **Devices**.
2. Select a device whose device logs you want to view. In this example,
   _ROS Publisher Subscriber Device_ is selected.
3. Under **Logs** tab, to subscribe to a ROS topic, click **Subscribe** against
   the topic. In this example, the topic `/telemetry` is subscribed to.
   Ensure the status of the subscribed topic(s) is **Subscribed** and is highlighted
   in green.

![To subscribe](/images/core-concepts/logging/device-logs/yet-to-subscribe.png?classes=border)

Once you subscribe to a topic, the device logs are displayed in the
_logging area_ (a terminal-like window).

Initially, you will see the latest 500 logs in the logging area. As you scroll
up to the top of the terminal window previous 500 logs are displayed. You may
continue scrolling up till all the logs are exhausted.

![Logging Area](/images/core-concepts/logging/device-logs/logging-terminal-window.png?classes=border)

To get updated logs, scroll down to the bottom of the logging area, and then
click **Get recent logs**.

To switch between the topics, click the drop-down list (at the top-left corner
of logging area) and select one of the subscribed topics. A tick mark against
the topic `/telemetry` indicates that you are currently viewing the logs
belonging to `/telemetry`.

You can search the logs for matching phrases using the **Search** bar. All
occurrences of a match are highlighted.

If you prefer to view the timestamp of every log displayed in the logging area,
select **Show timestamps** checkbox.

Topics such as `/rosout` and `/rosout_agg` are already available for a
ROS-based device.
