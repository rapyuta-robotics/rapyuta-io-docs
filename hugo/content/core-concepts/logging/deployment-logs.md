---
title: "Deployment Logs"
description:
type: core-concepts
date: 2018-11-20T18:49:43+05:30
pre: "2. "
weight: 194
---
Logs of a deployment are buffered (*historical logs*) and streamed continuously (*live logs*) in real time.

[Add a *ROS Publisher Exclusive* package](/getting-started/create-new-package)
that has a _Talker_ component with cloud runtime. It publishes the ROS topic 
_\telemetry_ with **Maximum** **QoS**. [Deploy the package](/getting-started/deploy-package)
on the cloud by the name _ROS publisher exclusive deployment_

1. On the left navigation bar, click **DEPLOYMENTS**.
2. Select specific deployment whose logs you want to view or analyse. In this example, _ROS publisher exclusive deployment_ is selected.
3. On the deployment's **DETAILS** tab, ensure the green progress bar is at **Succeeded** and **Status:Running** point.

## Real time logs
To view the corresponding deployment logs in real time, click **Live Logs** tab. They are streamed continuously in a terminal-like window, while you analyse the logs.

![Live Logs tab](/images/core-concepts/logging/deployment-logs/realtime-logs/deployment-live-logs.png?classes=border,shadow&width=50pc)

To search for a specific phrase in the continuous log stream, enter the phrase inside the **Search** box. If there is a match, all occurrences of matching patterns of the phrase are highlighted.

![Search live logs](/images/core-concepts/logging/deployment-logs/realtime-logs/live-logs-search.png?classes=border,shadow&width=50pc)

You may view the logs in full screen mode by clicking on the **fullscreen** button that is located at the top left corner of the terminal-like window.

![View live logs in Full Screen](/images/core-concepts/logging/deployment-logs/realtime-logs/live-logs-FS.png?classes=border,shadow&width=50pc)

On the other hand, the corresponding component-executable combination for which deployment logs are currently being streamed is displayed at the top right corner of the window.

![component-executable combo](/images/core-concepts/logging/deployment-logs/realtime-logs/cmpnt-exec-combination.png?classes=border,shadow&width=50pc)
