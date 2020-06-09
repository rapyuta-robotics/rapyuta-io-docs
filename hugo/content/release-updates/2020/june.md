---
title: "June"
type: release-updates
date: 2020-06-01T16:18:22+05:30
weight: 834
---

## June 8
Welcome to the June 8, 2020 release of the rapyuta.io platform. There
are significant updates in this release that we hope you will like.

#### Features
* **Routed Networks**

    New [rapyuta.io resource](/developer-guide/manage-software-cycle/communication-topologies/ros-routed-networks) 
    to enable ROS communication between different ROS package deployments. The existing method of 
    using dependent deployments for ROS communication is being deprecated but existing packages will keep supporting it.
    Please clone or import an existing package to use it with routed networks. 

* **Live Logs Enhancements**
    * Visual enhancements to ***Live logs*** tab.
    * Ability to view live logs for cloud deployments with multiple replicas.
    * Ability to download live logs.
    
* **User Onboarding**
    
    Added user onboarding tour for new sign ups as well as dedicated walk through tours for projects and devices.
    
* **Filters For Deployment**
    
    Deployments list view now supports filters based on deployment phase.

#### SDK
**rapyuta.io Python SDK [0.14.0](/developer-guide/tooling-automation/python-sdk/#installation) released** 

   Added methods to create and use routed networks

Read about how to [set ROS services and ROS actions as targeted](/developer-guide/manage-software-cycle/communication-topologies/ros-support/).

