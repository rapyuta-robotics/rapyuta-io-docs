---
title: "Rosbridge Compatibility"
description:
type: dev-tutorials
pre: "3. "
weight: 102
---
## Rosbridge WebSocket Compatibility
All the requests to deployment endpoints on rapyuta.io goes through a secure proxy which routes the requests to different backends.
When running behind such a reverse proxy, `rosbridge_websocket` fails at the connection handshake when the port in the request header is different from the port the deployment is running on (e.g., the default `9090`).

To workaround this limitation,

1. An additional argument, `websocket_external_port` needs to be included in the launch spec and set it to 80.
2. The `rosbridge_suite` needs to be added as a git submodule into your workspace.

An example launch spec would look something like this:
```
<launch>
    <arg name="ws_port"    default="$(optenv WS_PORT 9090)" />
    <arg name="ws_address" default="$(optenv WS_ADDR 0.0.0.0)" />
    <arg name="websocket_external_port" default="80" />

    <include file="$(find rosbridge_server)/launch/rosbridge_websocket.launch">
        <arg name="port"    value="$(arg ws_port)" />
        <arg name="websocket_external_port"    value="$(arg websocket_external_port)" />
        <arg name="address" value="$(arg ws_address)" />
    </include>
</launch>

```

The [command center](../../quick-walkthrough/#create-command-center-package) package in the quick walkthrough can be used as a reference as to how to pass `websocket_external_port`.

This github issue throws more light on the issue: [https://github.com/RobotWebTools/rosbridge_suite/pull/468] (https://github.com/RobotWebTools/rosbridge_suite/pull/468)
