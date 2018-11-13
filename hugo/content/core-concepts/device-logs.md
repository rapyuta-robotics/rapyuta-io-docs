---
title: "Device logs"
url: "/core-concepts/device-logs/"
pre: "r. "
weight: 38
---

By default, device logs are not collected until you explicitly subscribe to a
ROS topic. Once you subscribe to a topic, the device logs are displayed in the
logging area (a terminal-like window).

To subscribe to a ROS topic, click **Subscribe** against the topic.

You must ensure the status of the subscribed topic is **Subscribed** and is
highlighted in green colour.

Initially, you'll see the latest 500 logs on your window. As you scroll up to
the top of the scroll bar the previous 500 logs are displayed. You may keep
scrolling up till all the logs are exhausted.

To get updated logs, scroll down to the bottom of the scroll bar and then click
**Get recent logs**.

To switch between the topics, click the drop-down list (at the top-left corner
of logging area) and select one of the subscribed topics.

You can search the logs for matching phrases using the Search bar. All
occurrences of a match are highlighted as follows.

A tick mark against the topic telemetry indicates that you're currently
viewing the logs belonging to telemetry.

Topics such as `/rosout` are already available for a ROS-based device.
