---
title: "Metrics"
description:
type: core-concepts
date: 2018-11-21T19:32:57+05:30
pre: "l. "
weight: 197
---
Metrics are scalar measurements that change over time such as temperature,
remaining battery etc. They are usually used for dynamic device selection.
You can add graphs and dashboards to rapyuta.io for visualising metric data
in nearly real time.

You can group metrics data by different time intervals since it is stored in a
time series database. You may aggregate metric values by their count, average,
minimum, maximum etc. You can create custom live charts and also choose from
multiple forms of visuals, such as, line graph, stacked graph, step-plot and
bar chart.

rapyuta.io can collect metrics such as humidity and wind speed, from a
powered-on or connected device even if a rapyuta.io package deployment is not
being executed on the console. This could be useful for gathering data and
monitoring a device's state.

There could likely be a delay of five seconds in relaying, indexing and
rendering metrics. Metrics are not intended for large data blobs such as
laser scans and images.

Follow how to [visualise device metrics data](/getting-started/metrics-collection-visualisation) guide.
