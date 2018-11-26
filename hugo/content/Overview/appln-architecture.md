---
title: "Application Architecture"
description:
type: Overview
date: 2018-11-26T18:11:06+05:30
weight: 3
---
A rapyuta.io component is either a generic component or a ROS component.

The platform provides ways to expose Secure TCP(TLS/SNI), HTTP/Websocket,
and HTTPS/Websocket-Secure endpoints when deployed on the cloud. Both ROS
and generic components can leverage these types of endpoints.

For a ROS component, the platform launches a ROS master and a cloud bridge.
Each cloud bridge exposes a user-specified set of ROS topics, services, and
actions for the component and receives similarly exposed ROS topics, services,
and actions from other components.

You do not have to explicitly run the cloud bridge or ROS master while
deploying the application. Their lifecycle is managed by the platform.

![application architecture](/images/application-architecture.png)
