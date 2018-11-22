---
title: "Deployment Logs"
description:
type: core-concepts
date: 2018-11-20T18:49:43+05:30
weight: 145
---
Add a _ROS Publisher Exclusive_ package that has a _Talker_ component with cloud runtime.
It publishes `/telemetry` ROS topic with **High** **QoS**. Deploy the package
on the cloud by the name _ROS publisher exclusive deployment_

1. On the left navigation bar, click **DEPLOYMENTS**.
2. Select specific deployment whose logs you want to view or analyse. In this
   example, _ROS publisher exclusive deployment_ is selected.
3. On the deployment's **DETAILS** tab, ensure the green progress bar is at
   **Succeeded** and **Status:Running** point.
4. To view or analyse the corresponding deployment logs, click **Logs**. rapyuta.io
   displays logs that are ten seconds   prior to the request time. The logs are
   displayed in the logging area (terminal-like window) as a continuous real-time log stream.

![Successful Deployment](/images/core-concepts/logging/deployment-logs/success-deployment.png?classes=border)

## Timestamp
Each log entry has a corresponding timestamp attached to it. To view the
timestamps of non-streaming logs, select **Show timestamps** checkbox.
The timestamps are in UTC and of ISO 8601 standard.

![Logs Timestamps](/images/core-concepts/logging/deployment-logs/timestamps.png?classes=border)

## Streaming
There are two modes of viewing logs:

1. **Streaming**    
The logs are always streamed in real-time because the **Stream logs** checkbox is
selected by default. Hence, you do not need to refresh or reload for latest logs.
The logs are streamed as and when they are made available by the server.    
For device components, **Stream logs** option is unavailable.

![Stream Logs](/images/core-concepts/logging/deployment-logs/stream-logs.png?classes=border)
2. **Non-streaming**    
To disable real-time streaming of logs, clear Stream logs checkbox. You'll now
view logs in non-streaming mode. In this mode, logs are automatically refreshed
every ten seconds. You can also filter logs and display timestamps for all logs.

![Non-streaming Logs](/images/core-concepts/logging/deployment-logs/non-stream-logs.png?classes=border)

## Filtering
You can filter logs by time interval or by log source.

1. **Filter by time interval**
	1. To provide a custom time range, follow these steps in sequence:   
		1. Click **Past 5 minutes** drop-down list > **Custom time** range.
		2. Choose from-date and to-date using calendar.
		3. Choose time range. The time drop-down list on the left represents
		start time, while the one on the right is end time.
    ![Custom time range](/images/core-concepts/logging/deployment-logs/custom-time-range.png?classes=border)
	2. To select a predefined time interval, click **Past 5 minutes** drop-down
	list and choose one item from the list.
    ![Predefined time interval](/images/core-concepts/logging/deployment-logs/predefined-time-interval.png?classes=border)

	If there are no logs available for a given time range, the logging area
	appears empty.
2. **Filter by source of logs (stdout/stderr)**       
In devices, logs are sourced from both the sources: _stdout_ and _stderr_. For
cloud components, all of the logs are read only from stdout.
To switch between stdout and  stderr, click **stdout/stderr** drop-down list and
select the source you require.

![Log source](/images/core-concepts/logging/deployment-logs/log-source.png?classes=border)

## Search logs
You can search the logs for matching phrases using the **Search** bar. All
occurrences of a match are highlighted.

![Search box](/images/core-concepts/logging/deployment-logs/search-box.png?classes=border)

## View logs in full screen
To expand the logging area to full screen, click **Expand** (at top-right corner
of the logging area). You cannot filer logs or search logs in Full-screen view.

If you see a grey coloured Stream ended status at the top-left corner of the
logging area, click **Refresh**.

To select an executable whose deployment logs you want to see, click the
**component-executable** drop-down list and choose the executable you want:

## Troubleshooting
If logs are invisible, follow these steps:

1. Verify that the device is online and all services are running
2. Reload and clear cache
3. Log out and log in again
4. Log in a private window
5. Contact support
