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

{{< tabs >}}

{{% tab name="UI" %}}
 
 ### Enabling/Disabling VPN on projects
 
 To enable/disable VPN while creating a new project:

 1. To enable VPN while creating a new project, in the create a new project modal, click the **Enabled** button. For more information, see [Managing Projects](/how-to-guides/account-management/managing-projects/)

To enable/disable VPN for an existing project:
To enable or disable VPN for an existing project, follow these steps:

1. On the left navigation bar, click **Account > Project**. The panel displays a list of projects.

2. To enable/disable VPN for a project, under **Actions** select the **Edit** icon and click the **Enabled/Disabled** button.

  {{%notice info%}}
  * Only an org admin or a project creator can enable/disable VPN on projects.
  * When you create your first project, you cannot view the VPN option. However, you can enable it after creating the project (refer to step 2).
  {{%/notice%}}


 3. The VPN status is displayed alongside the project list, and it can have various statuses, including:
  * **VPN Enabled** - This message indicates that VPN is successfully enabled for the project.
  * **VPN Disabled** - This message indicates that VPN is currently disabled for the project.
  * **VPN Error** - This message indicates that there was an error during the VPN connection process, resulting in a failed connection. For more information, see [VPN Services Troubleshooting](/6_troubleshoot/613_vpn-services/)

  
  ### Enabling VPN on Devices

  To enable VPN on devices:

  1. Navigate to the right navigation pane and click **Devices**.
  2. Select the specific device for which you want to enable VPN.
  3. On the device details page, click **Enabled** next to the VPN option. For more information, see [Enable VPN for an Online Device](/3_how-tos/32_device-management/321_onboarding-a-device/#enable-vpn-for-an-online-device)

  {{%notice info%}}
   VPN can be enabled on devices only if VPN is enabled for the selected project and if the device is online.
  {{%/notice%}}

  ![vpn_devices](/images/core-concepts/vpn/vpn_devices.png)


 ### Enabling VPN on Cloud Deployments

  VPN can be enabled on cloud deployments while depolying the package. To enable VPN on cloud deployments:

  1. Select the package, and click **Deploy Package**.
  2. In the deploy package modal, beside **VPN Client** click **Enabled** . For more information, see [Deploying Packages](/3_how-tos/33_software-development/334_deploy-packages/)

  {{%notice info%}}
   VPN can be enabled for cloud deplyments only if VPN is enabled for the selected project.
  {{%/notice%}}

{{% /tab %}}

{{% tab name="CLI" %}}

### Enabling VPN on projects

You can either create a new project and enable VPN in the project manifest or enable VPN in an existing project.

To list projects with features:

```Bash
rio project list -w
```

To create a new project you will have to first create a project maifest, set the attribute `vpn.enabled` to `true` and then apply the manifest.
For example, create a project manifest `project.yaml` as below:

```yaml
apiVersion: api.rapyuta.io/v2
kind: Project
metadata:
  name: demo-project
spec:
  features:
    vpn: true
```

To apply the maifest:

```Bash
rio apply project.yaml
```

To enable VPN on an existing projects:

```Bash
rio project features vpn <project_name> true
```

### Enabling VPN client on devices

To view the list of devices:

```bash
rio device list
```

To enable VPN on all online devices:

```bash
rio device vpn true
```

To enable VPN on selected devices:

```bash
rio device vpn true --devices=<device_name> --devices=<device2_name>
```

For example, if you want to enable VPN for the devices amr01 and edge02, 

```Bash
rio device vpn true --devices=amr01 --devices=edge01
```

### Run VPN client in cloud deployments

To Run VPN client in cloud deployments you will have to first create a deployment maifest, set the attribute `vpn.enabled` to `true` and then apply the manifest.

For example, craete a deployment manifest, `deployment.yaml`.

```yaml
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

```Bash
rio apply deployment.yaml
```

### Connecting your machine to a project's VPN

1. Select the project that you want to connect to

  ```Bash
  rio project select <project_name>
  ```

2. Connect to the VPN

  ```Bash
  rio vpn connect
  ```

3. Check status

  ```Bash
  rio vpn status
  ```

4. Check the status of the *tailscale* client

  ```Bash
  tailscale status
  ```

5. To disconnect, run

  ```Bash
  rio vpn disconnect
  ```

{{% /tab %}}
{{< /tabs >}}

## Related Links

 [VPN Services Troubleshooting](/6_troubleshoot/613_vpn-services/)