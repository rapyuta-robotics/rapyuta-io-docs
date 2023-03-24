---

title: "Enabling VPN Services"
intro: rapyuta.io is a platform that enables robotics solution development by providing the necessary software infrastructure and facilitating the interaction between multiple stakeholders who contribute to the solution development.
weight: 347
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
  - How to
---


## VPN Overview

rapyuta.io supports the native VPN. It now provides the capability to connect devices and device deployments in a warehouse with deployments running in the cloud and vice-versa. It will also allow device (robot/edge) addressability in the warehouse for debugging and maintenance.

You can use the CLI to enable VPN on projects, devices, and cloud deployments.

{{% tab name="CLI" %}}

### Enabling VPN on projects

You can either create a new project and enable VPN in the project manifest or enable VPN in an existing project.

To list projects with features:
```Bash
rio project list -w
```

To create a new project you will have to first create a project maifest, set the attribute `vpn.enabled` to `true` and then apply the manifest.
For example, create a project manifest `project.yaml` as below:
```Bash
apiVersion: api.rapyuta.io/v2
kind: Project
metadata:
  name: demo-project
spec:
  features:
    vpn: true
```
Apply the maifest
```
rio apply project.yaml
```

To enable VPN on an existing projects:
```
rio project features vpn <project_name> true
```


### Enabling VPN client on devices

To view the list of devices:
```
rio device list
```

To enable VPN on all online devices:
```
rio device vpn true
```

To enable VPN on selected devices:
```
rio device vpn true --devices=<device_name> --devices=<device2_name>
```
For example, if you want to enable VPN for the devices amr01 and edge02, 
```
rio device vpn true --devices=amr01 --devices=edge01
```

### Run VPN client in cloud deployments

To Run VPN client in cloud deployments you will have to first create a deployment maifest, set the attribute `vpn.enabled` to `true` and then apply the manifest.

For example, craete a deployment manifest, `deployment.yaml`.
```
apiVersion: "apiextensions.rapyuta.io/v1"
kind: Deployment
metadata:
  name: "nginx-with-tailscale"
  depends:
    kind: package
    nameOrGUID: "nginx"
    version: "1.0.0"
spec:
  runtime: cloud
  features:
    vpn:
      enabled: true
```

To apply the maifest:
```
rio apply deployment.yaml
```

### Connecting your machine to a project's VPN

1. Select the project that you want to connect to
```
rio project select <project_name>
```
2. Connect to the VPN
```
rio vpn connect
```
3. Check status
```
rio vpn status
```
4. Check the status of the `tailscale` client
```
tailscale status
```
5. To disconnect, run
```
rio vpn disconnect
```
{{% /tab %}}
{{< /tabs >}}

