---
title: "Deployment Error Codes"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 612
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
  - Troubleshoot
---

## Error Codes

If the overall deployment **STATUS** is **Error**, rapyuta.io displays an error code along with a brief description of the error.
Listed below are the error codes and the recommended actions to resolve them:

| Error code         | Description | Recommended action |
| ------------------ | ----------- | ------------------ |
| DEP_E151 | Device is either offline or not reachable | Ensure that the device is connected to the internet. |
| DEP_E152 | Executables of the component deployed on the device either exited too early or failed | In the docker deployments this may indicate an error with the entry point or command, verify and fix it. |
| DEP_E153 | Unable to either pull the docker image or build the source code for the component deployed on cloud | Ensure that the docker image provided while adding the package still exists at the specified registry endpoint. |
| DEP_E154 | Executables of the component deployed on cloud exited too early | Troubleshoot the failed component by analyzing the deployment logs. |
| DEP_E155 | Executables of the component deployed on cloud failed | Troubleshoot the failed component by analyzing the deployment logs |
| DEP_E156 | Dependent deployment is in error state | Troubleshoot the dependent deployment that is in error state |
| DEP_E161 | Docker image not found for executables of components deployed on device | Ensure that the docker image path is valid. |
| DEP_E162 | Validation error. Cases include:<ul><li>Inconsistent values of ROS distro and CPU architecture variables for the device and package being provisioned.</li><li>rapyuta.io docker images not present on docker device.</li></ul> | <ul><li>Create package with appropriate values for ROS distro and CPU architecture variables.</li><li>Onboard the device again.</li></ul> |
| DEP_E163 | Application has stopped and exited unexpectedly, and crashes continuously | Debug the application using the corresponding deployment logs. |
| DEP_E171 | Cloud bridge encountered duplicate alias on the device | Change the alias name during deployment and ensure that there is no duplication of alias name under the same routed network.</a> |
| DEP_E172 | Compression library required for the cloud bridge is missing on the device | Re-onboard the device.</a> |
| DEP_E173 | Transport libraries required for the cloud bridge are missing on the device | Re-onboard the device.</a> |
| DEP_E174 | Cloud bridge on the device encountered multiple ROS service origins | Ensure that there aren't  multiple deployments with the same ROS service endpoint under the same routed network.</a> |
| DEP_E175 | Python actionlib/msgs required for the cloud bridge is missing on the device. | Re-onboard the device.</a> |
| DEP_E176 | Cloud bridge encountered duplicate alias on the cloud component | Change the alias name during deployment and ensure that there is no duplication of alias name under the same routed network.</a> |
| DEP_E177 | Cloud bridge on the cloud component encountered multiple ROS service origins | Re-onboard the device.</a> |
| DEP_317 | Failed to start | <ul><li> Ensure the current device has a subpath. </li> <li>Ensure that the mount path isn't empty. </li></ul> |
| DEP_E2xx | Internal rapyuta.io error in the components deployed on cloud | Report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E3xx | Internal rapyuta.io error in the components deployed on a device | Report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E4xx | Internal rapyuta.io error | Report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |