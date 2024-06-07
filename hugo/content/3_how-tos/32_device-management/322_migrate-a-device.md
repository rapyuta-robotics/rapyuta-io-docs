---

title: "Migrating a Device Across Projects"
weight: 322
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
gittags:
  - How to
---

This feature allows administrators to migrate online devices from one project to another using the Command Line Interface (CLI). This is useful for reallocating devices quickly without the need for re-onboarding, thus saving time and enhancing operational efficiency.

## Use Cases

### Production Environment

A number of R-AFL devices will be placed in a warehouse, such as Monaka, for calibration and trial runs before being shipped to customers. Once an R-AFL device is ready to be shipped, it can be migrated to another project without needing to go through the re-onboarding process again. This streamlines the workflow, making the transition faster and more efficient.

### Staging Environment

In a staging environment, devices may be used across multiple staging projects for testing purposes. Devices can be migrated between different staging projects without re-onboarding, allowing for flexible and efficient testing across various environments.

## Migrating a Device

Before starting the device migration process, make sure to consider the following constraints:

- **Device Status**: Ensure that the device is online before initiating the migration process.
- **Active Deployments**: Ensure there are no active deployments on the device during migration to avoid conflicts.
- **Unique Device Names**: Verify that the target project does not contain a device with the same name as the one being migrated.

{{%notice note%}}
**VPN Enablement**: After migration, administrators have the option to enable VPN on the device for enhanced security. Include the `--enable-vpn` flag in the migration command if VPN is required.
{{%/notice%}}

To migrate a device from Project A to Project B, use the following CLI command:

```bash
rio device migrate <device-name> Project_B --enable-vpn

