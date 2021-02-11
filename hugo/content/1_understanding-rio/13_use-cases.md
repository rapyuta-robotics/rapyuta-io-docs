---
title: Common Use cases
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

## TODO - Highlight Usecases

## Observability for Robots

### Logging And Debugging

Logs are an essential part of troubleshooting application and infrastructur performance. They help provide visibility into how your applications run on each of the various infrastructure components. It becomes more acute in the context of distributed robotics applications. rapyuta.io provides a set of features specifically targeted to meet the different needs.

* **Streaming Logs**        

  This feature essentially allows you to tail the stdout/stderr of a deployment/build running on the rapyuta.io cloud. It is similar to the tail -f functionality in a UNIX terminal console.

* **Historical Logs**    

  It is an indexed logging feature that lets you retrieve (and download) stdout/stderr log of any deployment/build running on any infrastructure (device or cloud) logs based on standard lucene search queries and time ranges.

* **Batch Logs and Blobs**    

  It is tailor-made for the situation where your device may not always be connected to the internet or has a lot of data or has the need to collect binary data, e.g., rosbags. The platform offers you SDK methods and an API to make this data available to you anywhere.

* **Secure Debugging**

Imagine being able to debug your robots as if they were right in front of you.  That’s exactly what remote SSH allows you to do. This powerful tool enables you to remotely troubleshoot your robots.


### Real time remote monitoring and alerts

rapyuta.io allows you to view the various data from your robots in a customisable dashboard with a simple line of code. You don’t need a myriad of complex hardware and software. You can also make sure that the key people are notified immediately by setting up alerts on key metrics.



#### Metrics

rapyuta.io allows you to collect critical system metrics such as CPU usage, memory consumption, etc. as well as directly subscribe to arbitrary ROS topic types. You can use this to collect measurements about parameters like temperature, distance or even application and business metrics such as orders completed or time to delivery.
After collecting metrics of s device, the user can query and visualize this information on a dashboard.

#### Remote data aggregation and root cause analysis

Managing incidents in-time is crucial for any robotics deployment in operation. With the help of in-depth access to robot’s data, rapyuta.io enables you to quickly analyse and identify issues leading up to an incident, thereby saving the time and resources to troubleshoot. You can even play back your deployment state.



## Communication for Robots

#### ROS Native

The unique communication architecture in rapyuta.io solves many of the challenges associated with running ROS1 across multiple robots in a local network or even across the public internet. It sports first-class support for ROS topics, services and actions
adding crucial features like QoS, compression, mutual authentication, encryption etc. while protecting you against adverse effects of transient network errors. It works for arbitrary message types and only requires the user to provide topic/service/action names and zero changes to your application source. ROS has several key pain points when working with multi-robot systems that often need error-prone setups involving specific
launch sequences, roslaunch/xml files, and remappings. rapyuta.io ships with special support for multi-robot systems and enforces runtime identities to robots to automatically wrap and unwrap for the right agent.


#### Generic Network Endpoints

rapyuta.io allows your applications running in the cloud to declaratively expose HTTP/HTTPS Websocket/WSS and raw TLS endpoints to enable integration with any other popular web services and protocols.


## Configuration for Robots

The behavior of a robot is determined by a set of parameters like the robot's velocity, controller gains, threshold value, etc. As a robotic developer, you may need to represent, store, and review parameters. Additionally, you may want to access parameters in your source code, modify a subset of parameters for a particular robot,
or add new parameters and apply those to a group of robots. rapyuta.io organizes a configuration into a tree-like hierarchical structure called a configuration hierarchy. It allows a user to inherit values and optionally override sections based on particular criteria, e.g., robot_type, client_type. Additionally, it decouples the process of describing these overriding criteria from the process of consuming the resultant configuration at runtime by leveraging metadata tags present on the device. It allows the developer abstract out hierarchies based on differences in certain traits or properties of the robot/software/location without having to bother about the actual
hardware deployment scenario. At the same time individuals responsible for maintaining or provisioning the device does not need to be aware of the hierarchy and only need to assign the relevant metadata tags to the device.



## GitOps for Robots

When defining packages rapyuta.io allows the developer to directly reference Builds. rapyuta.io platform is then responsible for building and delivering the software to both cloud and device. With Builds, under the hood, rapyuta.io solves the hard problems of native arm compiles, software versioning, artifact delivery, transactional
upgrades and provisioning. Builds, Packages and Catalog together, backed by a REST API and an SDK, makes it possible for the developers to automate the flow of your robotics solution right from git to your devices and cloud. rapyuta.io can also integrates with existing CI/CD systems and Quality Assurance processes for production ready Robotics.



## Software Composition

Complex robotic applications are often built using more than one programming language, in varied development environments, and by people from distinct domains. For example, the interactive user facing (User Interface) part of an application is built using a JavaScript framework while the application's device component is developed in C/C++, and navigation algorithms are implemented in Java or Python. Hence, all of the teams, which are involved in creating the application, have disparate development cycles. As a result, every team depends on the running instances of components developed
by other teams.

rapyuta.io supports workflows that let the user combine these packages at build time or runtime, combine multiple packages and deployments that rely on each other to make possible complex functionalities and behavior.

### Software management of your robots

Robotics developers face many challenges with the contineous changing of requirements  and updatation of the softwares on the robots. To avoid the hassle of on-site software changes and updates, rapyuta.io allows you to remotely update and rollback the software that is running on your robots. This also serves as a powerful CI/CD tool for you to remotely improve operational efficiencies and client requirements.

###  Remote Management and after sale support.

As a robotics developer or a solutions provider, maintaining existing deployments are always a hassle. By allowing easy and effective management of your robots from anywhere, rapyuta.io eliminates the need to deploy resources on site, and help you achieve true digital transformation

