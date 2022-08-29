---

title: "Deployment Metrics Visualization"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

weight: 544

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

---
Monitoring deployment metrics is important as it helps you understand the resource usage in your devices. You can now visualize the following resource metrics on the rapyuta.io console: 
  * CPU Usage - Displays the percentage of the CPU used.
  * Memory Usage - Displays the total memory being used.
  * Disk Usage - Displays the total disk space being used.
  * Network In and Out - Displays the amount of data being sent and received in bytes.
  * Disk IO - Displays the amount of data being read and written. 

To visualize the graphical representation of the metrics data:

1. In the rapyuta.io console, click **Development > Deployments**, select the deployment and click the **Metrics** tab.  
2. To change the time range, click **Past 5 minutes** drop-down menu and select the range. You can also set a **Custom interval** by specifying the time and date range.
3. To change the refresh interval, select **Every minute** drop-down menu and select the interval.
4. You can also customize the options that can be viewed in the graph. For example, in the image below, you can view the total amount of memory present and the amount used, to view only the usage, simply click on the **total** option to unselect it.
5. You can use the slider below the graph to zoom in and view a sub section of the graph.

![Metrics Graph](/images/chapters/developer-guide/tooling-automation/metrics/metrics-graph.png?classes=border,shadow&width=50pc)

{{% notice note %}}
To visualize more system metrics, see [Deploying Grafana to Visualize Metrics](/4_tutorials/42_advanced/deploy-grafana/#deploying-grafana-to-visualize-metrics). 
{{% /notice %}}

