---
title: "Deployment Error Codes"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.

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

## Error Codes

If the overall deployment **STATUS** is **Error**, rapyuta.io displays an error code along with a brief description of the error.

The following table lists available error codes, short descriptions and the recommendations you should take:

| Error code         | Description | Recommended action |
| ------------------ | ----------- | ------------------ |
| DEP_E151 | device is either offline or not reachable | check the internet connection of the device |
| DEP_E152 | executables of the component deployed on the device either exited too early or failed | in the docker deployments this may indicate an error with the entrypoint or command, verify and fix it |
| DEP_E153 | unable to either pull the docker image or build the source code for the component deployed on cloud | verify that the docker image provided while adding the package still exists at the specified registry endpoint |
| DEP_E154 | executables of the component deployed on cloud exited too early | troubleshoot the failed component by analyzing deployment logs |
| DEP_E155 | executables of the component deployed on cloud failed | troubleshoot the failed component by analyzing deployment logs |
| DEP_E156 | dependent deployment is in error state | troubleshoot the dependent deployment that is in error state |
| DEP_E161 | docker image not found for executables of components deployed on device | verify that the path of the docker image is valid |
| DEP_E162 | Validation error. Cases include:<ul><li>Inconsistent values of ROS distro and CPU architecture variables for the device and package being provisioned.</li><li>rapyuta.io docker images not present on docker device.</li></ul> | <ul><li>Create package with appropriate values for ROS distro and CPU architecture variables.</li><li>Onboard the device again.</li></ul> |
| DEP_E163 | application has stopped and exited unexpectedly, and crashes continuously | debug the application using the corresponding deployment logs |
| DEP_E171 | cloud bridge encountered duplicate alias on the device. | change the alias name during deployment and ensure that there is no duplication of  alias name under the same routed network. For more information about alias, [click here.](/developer-guide/manage-software-cycle/communication-topologies/ros-support/#ros-environment-aliases-runtime-identity-assignment)</a> |
| DEP_E172 | compression library required for the cloud bridge is missing on the device. | re-onboard the device.</a> |
| DEP_E173 | transport libraries required for the cloud bridge is missing on the device. | re-onboard the device.</a> |
| DEP_E174 | cloud bridge on the device encountered multiple ROS service origins. | do not add multiple deployments with the same ROS service endpoint under the same routed network.</a> |
| DEP_E175 | python actionlib/msgs required for the cloud bridge is missing on the device. | re-onboard the device.</a> |
| DEP_E176 | cloud bridge encountered duplicate alias on the cloud component. | change the alias name during deployment and ensure that there is no duplication of  alias name under the same routed network. For more information about alias, [click here.](/developer-guide/manage-software-cycle/communication-topologies/ros-support/#ros-environment-aliases-runtime-identity-assignment)</a> |
| DEP_E177 | cloud bridge on the cloud component encountered multiple ROS service origins. | re-onboard the device.</a> |
| DEP_E2xx | internal rapyuta.io error in the components deployed on cloud | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E3xx | internal rapyuta.io error in the components deployed on a device | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |
| DEP_E4xx | internal rapyuta.io error | report the issue together with the relevant details to the <a href="#" onclick="javascript:FreshWidget.show();">support team</a> |