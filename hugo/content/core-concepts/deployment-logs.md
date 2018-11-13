---
title: "Deployment logs"
date:
weight: "18"
---
You can ensure that the deployment logs are running by checking whether the
**DEPLOYMENT PHASE** is **Started successfully** and the **STATUS** is **Running**.

To view logs for a specific deployment,
click **Deployments** > your specific deployment > **Logs**.

As soon as you request for deployment logs, rapyuta.io displays logs that are
ten seconds prior to the request time. The logs are displayed in the logging
area (terminal-like window) as a continuous real-time log stream.

## Timestamp
Each log entry has a corresponding timestamp attached to it. To view the
timestamps of non-streaming logs, clear **Stream logs** checkbox > select
**Show timestamps** checkbox. The timestamps are in UTC and of ISO 8601 standard:

## Streaming
There are two modes of viewing logs:

1. **Streaming**    
The logs are always streamed in real-time because the **Stream logs** checkbox is
selected by default. Hence, you do not need to refresh or reload for latest logs.
The logs are streamed as and when they are made available by the server.    
For device components, Stream logs option is unavailable.
2. **Non-streaming**    
To disable real-time streaming of logs, clear Stream logs checkbox. You'll now
view logs in non-streaming mode. In this mode, logs are automatically refreshed
every ten seconds. You can also filter logs and display timestamps for all logs.

## Filtering
You can filter logs by time interval or by log source.

1. Filter by time interval
	1. To provide a custom time range, follow these steps in sequence:
		1. Click **Past 5 minutes** drop-down list > **Custom time** range:
		2. Choose from date and to date using calendar:
		3. Choose time range. The time drop-down list on the left represents
		start time, while the one on the right is end time
	2. To select a predefined time interval, click **Past 5 minutes** drop-down
	list and choose one item from the list
	If there are no logs available for a given time range, the logging area
	appears empty
2. Filter by source of logs (stdout/stderr)
In devices, logs are sourced from both the sources - stdout and stderr. For
cloud components, all of the logs are read only from stdout.
To switch between stdout and  stderr, click **stdout/stderr** drop-down list and
select the source you require:

## Search logs
You can search the logs for matching phrases using the **Search** bar. All
occurrences of a match are highlighted as follows:

## View logs in full screen
To expand the logging area to full screen, click **Expand**.    
You cannot filer logs or search logs in Full-screen view.

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
