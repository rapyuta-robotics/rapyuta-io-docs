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

The [command center](/quick-walkthrough/#create-command-center-package) package in the quick walkthrough can be used as a reference as to how to pass `websocket_external_port`.

Some things to note in the command center package mentioned above:

1. The latest version of rosbridge is not yet released as a package (as on 13/04/2020). Hence, the [`rosbridge_suite`](https://github.com/RobotWebTools/rosbridge_suite) repo is added as a [git submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) into the [io_tutorials](https://github.com/rapyuta-robotics/io_tutorials) repository.
2. The launch file of the command center at `io_turtlesim/io_turtle_command_center/launch/command_center.launch` has an additional argument called `websocket_external_port` and is set to `80`. This is irrespective of the port on which the websocket server is listening on.

**P.S.:** This github issue throws more light on the issue and why the external port needs to be set: [https://github.com/RobotWebTools/rosbridge_suite/pull/468] (https://github.com/RobotWebTools/rosbridge_suite/pull/468)
